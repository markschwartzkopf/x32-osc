///<reference path="x32-osc.d.ts" />
import { EventEmitter } from 'events';
import * as dgram from 'dgram';
import { x32NodeStructure } from './x32definitions';
import * as fs from 'fs';

const x32branches = [
  'config',
  'ch',
  'auxin',
  'fxrtn',
  'bus',
  'mtx',
  'main',
  'dca',
  'fx',
  'outputs',
  'headamp',
];

interface consoleEvents {
  connected: () => void;
  ready: () => void;
  info: (info: string) => void;
  error: (err: Error) => void;
  meter: (data: { number: number; meters: number[] }) => void;
  closed: () => void;
}

type oscArgument =
  | { type: 'i'; data: number }
  | { type: 'f'; data: number }
  | { type: 's'; data: string }
  | { type: 'b'; data: Buffer };

interface X32 {
  on<U extends keyof consoleEvents>(event: U, listener: consoleEvents[U]): this;
  off<U extends keyof consoleEvents>(
    event: U,
    listener: consoleEvents[U]
  ): this;
  emit<U extends keyof consoleEvents>(
    event: U,
    ...args: Parameters<consoleEvents[U]>
  ): boolean;
  _OSC: x32MetaNode;
}

interface nodeEmitter extends EventEmitter {
  on(event: string, listener: (values: string[]) => void): this;
  emit(event: string, values: string[]): boolean;
}

interface leafEmitter extends EventEmitter {
  on(event: string, listener: (value: number) => void): this;
  emit(event: string, value: number): boolean;
}

class X32 extends EventEmitter {
  private _serverVersion = '';
  get serverVersion() {
    return this._serverVersion;
  }
  private _model = '';
  get model() {
    return this._model;
  }
  private _firmwareVersion = '';
  get firmwareVersion() {
    return this._firmwareVersion;
  }
  private _connected = false;
  get connected() {
    return this._connected;
  }
  private _ready = false;
  get ready() {
    return this._ready;
  }
  readonly address: string;
  private _x32Meta: x32MetaNode = { _address: [] };
  private _linkcfg = {
    hadly: true,
    eq: true,
    dyn: true,
    fdrmute: true,
    mono: false,
  };
  private _lastValidMessage = Date.now();
  private _x32UpdateFrequency = 10;
  private _socket: dgram.Socket;
  private _meterSubscriptions: meterDescriptions = [];
  private _subscription?: NodeJS.Timer;
  private _heartbeat: NodeJS.Timer;
  private _nodeEmitter: nodeEmitter;
  private _leafEmitter: leafEmitter;
  /**
   *
   * @param address - IP address or url to the x32
   * @param x32UpdateFrequency - number of milliseconds between meter updates. Between ? and ?
   *
   */
  constructor(address: string, x32UpdateFrequency?: number) {
    super();
    this._nodeEmitter = new EventEmitter();
    this._leafEmitter = new EventEmitter();
    if (x32UpdateFrequency) {
      this._x32UpdateFrequency = x32UpdateFrequency / 50;
      if (this._x32UpdateFrequency > 99) {
        this.emit(
          'info',
          'Lowering X32 update frequency to highest possible: 4950ms'
        );
        this._x32UpdateFrequency = 99;
      }
      if (this._x32UpdateFrequency < 1) {
        this.emit(
          'info',
          'raising X32 update frequency to lowest possible: 50ms'
        );
        this._x32UpdateFrequency = 1;
      }
    }
    //calculate frequency
    this.address = address;
    this._socket = dgram.createSocket({ type: 'udp4', reuseAddr: true });
    this._socket.on('close', () => {
      this.emit('closed');
    });
    this._socket.on('error', (err) => {
      this.emit('error', err);
    });
    this._socket.on('connect', () => {
      this._x32Verify();
    });
    this._socket.on('message', (buf) => {
      this._processDataFromX32(buf);
    });
    this._socket.bind(0, '0.0.0.0', () => {
      this.emit('info', 'Connecting to X32 at ' + address);
      this._socket.connect(10023, address);
    });
    this.on('connected', () => {
      this._connected = true;
      this.subscribe();
      this._subscription = setInterval(() => {
        if (this.connected) this.subscribe();
      }, 9000);
      this.refreshState();
      /* this._getNode('ch/17/mix')
        .then((values) => {
          console.log('promise res:');
          console.log(values);
        })
        .catch((err) => {
          console.log('err:' + err);
        }); */
    });
    this._heartbeat = setInterval(() => {
      let time = Math.round((Date.now() - this._lastValidMessage) / 1000);
      if (time > 20) {
        if (this.connected) {
          this.emit(
            'error',
            new Error(
              'It has been ' +
                time +
                ' seconds since last valid message from X32. Closing connection'
            )
          );
        } else
          this.emit(
            'error',
            new Error('Unable to connect to X32 at ' + this.address)
          );
        this.close();
      } else if (time > 10 && this.connected) {
        this.emit(
          'info',
          'Warning: It has been ' +
            time +
            ' seconds since last valid message from X32'
        );
      }
    }, 5000);
    this.on('closed', () => {
      this.removeAllListeners();
    });
  }

  close() {
    this.emit('info', 'Closing connection to X32');
    this._connected = false;
    if (this._subscription) clearInterval(this._subscription);
    clearInterval(this._heartbeat);
    this._socket.close();
  }

  private _send(cmd: string, args?: oscArgument[]) {
    if (!this.connected && cmd != '/info') {
      this.emit(
        'error',
        new Error('Cannot send message to X32 unless connected')
      );
      return;
    }
    if (args == undefined) args = [];
    let cmdBuf = stringToBuffer(cmd);
    let argTypes = ',';
    let argBufs: Buffer[] = [];
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        argTypes += args[i].type;
        argBufs.push(oscArgumentToBuffer(args[i]));
      }
    }
    let typesBuf = stringToBuffer(argTypes);
    let argsBuf = Buffer.concat(argBufs);
    this._socket.send(Buffer.concat([cmdBuf, typesBuf, argsBuf]), (err) => {
      if (err) this.emit('error', err);
    });
  }

  subscribe() {
    if (!this.connected) {
      this.emit('error', new Error('Cannot subscribe until X32 is connected.'));
      return;
    }
    this._send('/xremote');
    if (this._meterSubscriptions.length) {
      for (let i = 0; i < this._meterSubscriptions.length; i++) {
        let sub = this._meterSubscriptions[i];
        let meterArgs: [number, number, number];
        if (typeof sub == 'number') {
          meterArgs = [sub, 0, 0];
        } else if (sub.length == 2) {
          meterArgs = [sub[0], sub[1], 0];
        } else meterArgs = sub;
        this._send('/meters', [
          { type: 's', data: '/meters/' + meterArgs[0] },
          { type: 'i', data: meterArgs[1] },
          { type: 'i', data: meterArgs[2] },
          { type: 'i', data: this._x32UpdateFrequency },
        ]);
      }
    } else this._send('/status');
  }

  private _processDataFromX32(buf: Buffer) {
    let split = buf.indexOf(0);
    let oscAddress = buf.slice(0, split).toString();
    split++;
    split = Math.ceil(split / 4) * 4;
    buf = buf.slice(split);

    switch (oscAddress) {
      case 'node':
        this._lastValidMessage = Date.now();
        let nodeArgs = oscFormatBufferToArguments(buf);
        if (Array.isArray(nodeArgs)) {
          if (nodeArgs.length == 1 && nodeArgs[0].type == 's') {
            let values = oscNodeStringToValueArray(nodeArgs[0].data);
            if (values.length) {
              let nodeAddress = values.shift()!;
              this._nodeEmitter.emit(nodeAddress, values);
              //console.log('node' + ' ' + nodeAddress);
            }
          } else this.emit('error', new Error('Bad /node data from X32'));
        } else this.emit('error', new Error(nodeArgs.error));
        break;
      case '/status':
        this._lastValidMessage = Date.now();
        break;
      case '/info':
        this._lastValidMessage = Date.now();
        let infoArgs = oscFormatBufferToArguments(buf);
        if (Array.isArray(infoArgs)) {
          if (
            infoArgs.length == 4 &&
            infoArgs.every((x) => {
              return x.type == 's';
            })
          ) {
            this._serverVersion = infoArgs[0].data as string;
            this._model = infoArgs[2].data as string;
            this._firmwareVersion = infoArgs[3].data as string;
            this.emit(
              'info',
              'Connected to X32. Model: ' +
                this.model +
                ', firmware version: ' +
                this.firmwareVersion
            );
            this.emit('connected');
          } else this.emit('error', new Error('Bad console info from X32'));
        } else this.emit('error', new Error(infoArgs.error));
        break;
      default:
        let possibleFirstNode = oscAddress.slice(1, oscAddress.indexOf('/', 1));
        if (x32branches.indexOf(possibleFirstNode) != -1) {
          let args = oscFormatBufferToArguments(buf);
          if (Array.isArray(args) && args.length == 1) {
            this._lastValidMessage = Date.now();
            this._processChangeFromX32(oscAddress, args[0]);
            if (args[0].type == 'f')
              this._leafEmitter.emit(oscAddress, args[0].data);
          } else if (!Array.isArray(args)) {
            this.emit('error', new Error(args.error));
          } else
            this.emit(
              'error',
              new Error('Unknown change type from X32: Multiple OSC arguments')
            );
        } else {
          if (possibleFirstNode == 'meters') {
            let args = oscFormatBufferToArguments(buf);
            if (Array.isArray(args)) {
              if (
                args.length == 1 &&
                args[0].type == 'b' &&
                args[0].data.length % 4 == 0
              ) {
                this._lastValidMessage = Date.now();
                let meterNumber = oscAddress.slice(
                  oscAddress.indexOf('/', 1) + 1
                );
                let meterBuf = args[0].data.slice(4);
                let meterData: number[] = [];
                for (let i = 0; i < meterBuf.length; i += 4) {
                  meterData.push(meterBuf.readFloatLE(i));
                }
                this.emit('meter', {
                  number: parseInt(meterNumber),
                  meters: meterData,
                });
              } else this.emit('error', new Error('Bad meter data from X32'));
            } else this.emit('error', new Error(args.error));
          } else if (possibleFirstNode.slice(0, 1) == '-') {
            //console.log("Control info I don't care about from X32: " + oscAddress);
          } else
            this.emit(
              'error',
              new Error('Unknown OSC address from x32: ' + oscAddress)
            );
        }
        break;
    }
  }

  private _x32Verify() {
    this._send('/info');
  }

  private _getNode(address: string): Promise<string[]> {
    return new Promise((res, rej) => {
      let nodeTimeout: NodeJS.Timeout;
      let nodeListener = (values: string[]) => {
        this._nodeEmitter.off(address, nodeListener);
        clearTimeout(nodeTimeout);
        res(values);
      };
      nodeTimeout = setTimeout(() => {
        this._nodeEmitter.off(address, nodeListener);
        this.emit(
          'error',
          new Error(
            'Timeout on X32 node request for ' +
              address +
              '. Closing X32 connection.'
          )
        );
        this.close();
        rej('timeout');
      }, 5000);
      this._nodeEmitter.on(address, nodeListener);
      this._send('/node', [{ type: 's', data: address }]);
    });
  }

  refreshState() {
    let start = Date.now();
    this._refreshState()
      .then(() => {
        this._markAllRedundant();
        this.emit(
          'info',
          'Received X32 state in ' + (Date.now() - start) + ' ms'
        );
        if (!this._ready) {
          this._ready = true;
          this.emit('ready');
          //fs.writeFile('./x32-obj.json', JSON.stringify(this.OSC), () => {});
        }
      })
      .catch((err) => {
        this.emit('error', err);
      });
  }

  private async _refreshState(
    node?: x32DefinitionNode,
    prefix?: string
  ): Promise<void> {
    return new Promise((res, rej) => {
      if (!node) {
        node = x32NodeStructure as x32DefinitionNode;
        this._x32Meta = { _address: [] };
        this._OSC = new Proxy<x32MetaNode>(this._x32Meta, this._OSCProxy);
      }
      if (!prefix) prefix = '';
      let nodeProperties = Object.getOwnPropertyNames(node);
      let i = -1;
      let getNextNode = async () => {
        i++;
        if (i < nodeProperties.length) {
          let child = node![nodeProperties[i]];
          let childName = nodeProperties[i];
          if (childName[0] == "'") childName = childName.slice(1);
          let childNode: x32DefinitionNode;
          if (child._type) {
            await getNextNode();
            return;
          }
          let hasLeavesNodesVar = hasLeavesNodes(child);
          if (hasLeavesNodesVar[0])
            await this._getNode(prefix + childName)
              .then((values) => {
                this._populateX32Object(prefix + childName, values);
              })
              .catch((err) => {
                rej(err);
              });
          if (hasLeavesNodesVar[1])
            await this._refreshState(child, prefix + childName + '/').catch(
              (err) => {
                rej(err);
              }
            );
          getNextNode();
        } else res();
      };
      getNextNode();
    });
  }

  private _markAllRedundant() {
    if (isNode(this._x32Meta.config) && isNode(this._x32Meta.config.linkcfg)) {
      if (isMetaLeaf(this._x32Meta.config.linkcfg.hadly))
        this._linkcfg.hadly = this._x32Meta.config.linkcfg.hadly._value == 'ON';
      if (isMetaLeaf(this._x32Meta.config.linkcfg.eq))
        this._linkcfg.eq = this._x32Meta.config.linkcfg.eq._value == 'ON';
      if (isMetaLeaf(this._x32Meta.config.linkcfg.dyn))
        this._linkcfg.dyn = this._x32Meta.config.linkcfg.dyn._value == 'ON';
      if (isMetaLeaf(this._x32Meta.config.linkcfg.fdrmute))
        this._linkcfg.fdrmute =
          this._x32Meta.config.linkcfg.fdrmute._value == 'ON';
    }
    if (isNode(this._x32Meta.config) && isNode(this._x32Meta.config.mono)) {
      if (isMetaLeaf(this._x32Meta.config.mono.link))
        this._linkcfg.mono = this._x32Meta.config.mono.link._value == 'ON';
    }
    for (let i = 1; i <= 32; i += 2) {
      this._markRedundant('ch', i);
    }
    for (let i = 1; i <= 8; i += 2) {
      this._markRedundant('aux', i);
    }
    for (let i = 1; i <= 8; i += 2) {
      this._markRedundant('fx', i);
    }
    for (let i = 1; i <= 16; i += 2) {
      this._markRedundant('bus', i);
    }
    for (let i = 1; i <= 6; i += 2) {
      this._markRedundant('mtx', i);
    }
  }

  private _markRedundant(
    type: 'ch' | 'aux' | 'fx' | 'bus' | 'mtx',
    num: number
  ) {
    num = num + (num % 2);
    let linked = false;
    let linkAddress = type + 'link';
    let address: string = type;
    if (type == 'fx') {
      address = 'fxrtn';
    }
    if (type == 'aux') {
      address = 'auxin';
    }
    if (isNode(this._x32Meta.config)) {
      let linkNode = this._x32Meta.config[linkAddress];
      if (isNode(linkNode)) {
        let linkLeaf = linkNode[num - 1 + '-' + num];
        if (isMetaLeaf(linkLeaf)) linked = linkLeaf._value == 'ON';
      } else
        console.error(
          'Tried to mark redundant flags from nonexistent node ' + linkNode
        );
    }
    let [hadly, eq, dyn, fdrmute] = [
      linked && this._linkcfg.hadly,
      linked && this._linkcfg.eq,
      linked && this._linkcfg.dyn,
      linked && this._linkcfg.fdrmute,
    ];
    let parentNode = this._x32Meta[address];
    if (isNode(parentNode)) {
      let node = parentNode[num.toString().padStart(2, '0')];
      if (isNode(node)) {
        if (isNode(node.preamp)) markRedundantTree(node.preamp, hadly);
        if (isNode(node.eq)) markRedundantTree(node.eq, eq);
        if (isNode(node.dyn)) markRedundantTree(node.dyn, dyn);
        if (isNode(node.gate)) markRedundantTree(node.gate, dyn);
        if (isNode(node.insert)) markRedundantTree(node.insert, dyn);
        if (isNode(node.mix)) markRedundantTree(node.mix, fdrmute);
        if (isNode(node.grp)) markRedundantTree(node.grp, fdrmute);
      } else
        console.error(
          'Tried to mark redundant flags from nonexistent node ' +
            address +
            '/' +
            num.toString().padStart(2, '0')
        );
    } else
      console.error(
        'Tried to mark redundant flags from nonexistent node ' + address
      );
    //hadly, eq, dyn, fdrmute
  }

  private _populateX32Object(
    address: string,
    values: string[],
    leaves?: { name: string; type: x32DefinitionLeaf }[],
    node?: x32MetaNode
  ) {
    if (!leaves) {
      //assume root
      leaves = getLeafDefs(address);
    }
    if (leaves.length != values.length) {
      this.emit(
        'error',
        new Error(
          'X32 definitions do not match data from X32 for address: ' + address
        )
      );
      return;
    }
    if (!node) node = this._x32Meta;
    let index = address.indexOf('/');
    let property: string;
    if (index == -1) {
      property = address;
    } else property = address.slice(0, index);
    if (!node[property])
      node[property] = { _address: [...node._address, property] };
    let nodeProperty = <x32MetaNode | x32MetaLeaf>node[property];
    if (nodeProperty._type) {
      this.emit(
        'error',
        new Error('Corrupt X32 tree. Leaf where a node should be.')
      );
    } else {
      if (index == -1) {
        let nodeProperty = <x32MetaNode>node[property];
        for (let i = 0; i < leaves.length; i++) {
          nodeProperty[leaves[i].name] = {
            _address: [...nodeProperty._address, leaves[i].name],
            _value: values[i],
            ...leaves[i].type,
          };
        }
      } else {
        this._populateX32Object(
          address.slice(index + 1),
          values,
          leaves,
          <x32MetaNode>node[property]
        );
      }
    }
  }

  set OSC(value: osc) {
    this.emit(
      'error',
      new Error('Replacing the entire parameter tree is not yet coded')
    );
  }
  get OSC() {
    //@ts-ignore /*I don't know how to tell typescript that _OSCProxy doesn't preserve type
    return this._OSC;
  }

  set meterSubscriptions(value: meterDescriptions) {
    this._meterSubscriptions = value;
    if (this.ready) this.subscribe();
  }
  get meterSubscriptions() {
    return [...this._meterSubscriptions];
  }

  private _OSCProxy: ProxyHandler<x32MetaNode> = {
    get: function (
      x32Node: x32MetaNode,
      property: string | symbol
    ): string | null | x32Node {
      if (!property || typeof property == 'symbol') return null;
      let prop = x32Node[property];
      if (!prop || Array.isArray(prop) || property[0] == '_') return null;
      if (!prop._type) {
        //@ts-ignore
        return new Proxy(prop, this);
      } else return prop._value;
    },
    //set needs to be an arrow function so that "this" will be the X32 object
    set: (
      x32Node: x32MetaNode,
      property: string | symbol,
      value: string | x32Node
    ) => {
      if (!property || typeof property == 'symbol') return false;
      let prop = x32Node[property];
      if (!prop || Array.isArray(prop) || property[0] == '_') return false;
      if (prop._type && typeof value == 'string') {
        let oscAddress = '/' + prop._address.join('/');
        this._send(oscAddress, [{ type: 's', data: value }]);
        return true;
      }
      if (!prop._type && typeof value == 'object' && value != null) {
        let properties = Object.getOwnPropertyNames(value);
        for (let i = 0; i < properties.length; i++) {
          this._OSCProxy.set!(prop, properties[i], value[properties[i]], 0);
        }
        return true;
      }
      return false;
    },
    ownKeys: (x32Node: x32MetaNode) => {
      let rtn = [];
      let keys = Object.getOwnPropertyNames(x32Node);
      for (let i = 0; i < keys.length; i++) {
        if (keys[i][0] != '_') rtn.push(keys[i]);
      }
      return rtn;
    },
    defineProperty: () => {
      return false;
    },
    deleteProperty: () => {
      return false;
    },
  };

  private _setOSC(
    address: string | string[],
    value: string,
    x32InNode?: x32MetaNode,
    strAddress?: string
  ): Promise<void> {
    let x32Node: x32MetaNode;
    let arrayAddress: string[];
    let stringAddress: string;
    if (typeof address == 'string') {
      if (address[0] == '/') address = address.slice(1);
      arrayAddress = address.split('/');
    } else {
      arrayAddress = address;
    }
    if (x32InNode) {
      x32Node = x32InNode;
    } else x32Node = this._x32Meta;
    if (strAddress) {
      stringAddress = strAddress;
    } else stringAddress = '/' + arrayAddress.join('/');
    return new Promise((res, rej) => {
      if (arrayAddress.length == 1) {
        let leaf = x32Node[address[0]];
        if (!Array.isArray(leaf) && leaf._type) {
          leaf._value = value;
          this._sendDatawTimeout(stringAddress, value)
            .then(() => {
              res();
            })
            .catch((err) => {
              rej(err);
            });
        } else rej('Address ' + stringAddress + ' does not point to leaf');
      } else {
        let nodeName = arrayAddress[0];
        let nextNode = x32Node[nodeName];
        if (!Array.isArray(nextNode) && !nextNode._type) {
          this._setOSC(arrayAddress.slice(1), value, nextNode, stringAddress)
            .then(() => {
              res();
            })
            .catch((err) => {
              rej(err);
            });
        } else rej('Bad address or metatree: ' + stringAddress);
      }
    });
  }

  private _sendDatawTimeout(
    address: string,
    value: number | string,
    int?: boolean,
    timeout?: number
  ): Promise<void> {
    if (!timeout) timeout = 20;
    let arg: oscArgument[];
    if (typeof value == 'string') {
      arg = [{ type: 's', data: value }];
    } else arg = [{ type: 'f', data: value }];
    if (int && typeof value == 'number') arg = [{ type: 'i', data: value }];
    return new Promise((res, rej) => {
      this._send(address, arg);
      setTimeout(() => {
        res();
      }, timeout);
    });
  }

  private _learnTextFromNumber(
    address: string,
    node: string,
    valueIndex: number,
    steps: number,
    int?: boolean,
    delay?: number
  ): Promise<string[]> {
    return new Promise(async (res, rej) => {
      let rtn: string[] = [];
      //Number of steps + 1 is the number of values tested
      let i = -1;
      let change = 0;
      let valueCount = 0;
      let lastVal = '';
      while (i < steps) {
        i++;
        let numToSend = i;
        if (!int) numToSend = i / steps;
        await this._sendDatawTimeout(address, numToSend, int, delay)
          .then(() => {
            return this._getNode(node);
          })
          .then((values) => {
            rtn.push(values[valueIndex]);
            //console.log(i)
            //console.log(numToSend + ' ' + values[valueIndex]);
            if (values[valueIndex] != lastVal) {
              //console.log(i - change);
              valueCount++;
              //console.log('change:' + numToSend)
              change = i;
            }
            lastVal = values[valueIndex];
          })
          .catch((err) => {
            rej(err);
          });
      }
      //console.log('valueCount: ' + valueCount);
      res(rtn);
    });
  }

  testX32NodeStructure(): Promise<string[]> {
    return new Promise((res, rej) => {
      let startTime = Date.now();
      let test = x32NodeStructure as x32DefinitionNode;
      this._testTree(test)
        .then((rtn) => {
          let seconds = Math.round((Date.now() - startTime) / 1000);
          let minutes = Math.floor(seconds / 60);
          seconds = seconds % 60;
          let hours = Math.floor(minutes / 60);
          minutes = minutes % 60;
          console.log(
            'Testing finished in ' +
              hours +
              ':' +
              minutes.toString().padStart(2, '0') +
              ':' +
              seconds.toString().padStart(2, '0')
          );
          res(rtn);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  private _testTree(
    node: x32DefinitionNode,
    inAddress?: string,
    leaveKeys?: boolean
  ): Promise<string[]> {
    let address = '';
    if (inAddress) address = inAddress;
    return new Promise((res, rej) => {
      let rtn: string[] = [];
      let leavesNodes = hasLeavesNodes(node);
      if (leavesNodes[0] || leavesNodes[1]) {
        let properties = Object.getOwnPropertyNames(node);
        let i = -1;
        let checkLeaf = () => {
          i++;
          if (i == properties.length - 1 && properties[i][0] == "'")
            i = properties.length;
          if (address == '/ch' && i >= 6) i = properties.length;
          if (address == '/fx' && i >= 3) i = properties.length;
          if (i < properties.length) {
            if (
              properties[i][0] == "'" &&
              i < properties.length - 2 &&
              !leaveKeys
            ) {
              if (address.slice(-3) == '/eq') {
                i = properties.length - 1;
              } else i = properties.length - 2;
            }
            if (address == '/ch') i = 6;
            if (address == '/fx') i = 3;
            let maybeLeaf = node[properties[i]];
            if (maybeLeaf._type) {
              let leafName = properties[i];
              if (leafName[0] == "'") leafName = leafName.slice(1);
              console.log('Testing leaf: ' + address + '/' + leafName);
              if (maybeLeaf._type == 'conditional' && leaveKeys) {
                let key = getLeafValue(maybeLeaf._keyAddress, this.OSC);
                if (typeof key == 'object') {
                  rtn.push(key.error);
                } else {
                  if (maybeLeaf._conditional[key]) {
                    if (maybeLeaf._conditional[key][maybeLeaf._index]) {
                      maybeLeaf = JSON.parse(
                        JSON.stringify(
                          maybeLeaf._conditional[key][maybeLeaf._index]
                        )
                      ) as x32DefinitionLeaf;
                    } else {
                      i = properties.length - 1;
                      maybeLeaf = { _type: 'unused' };
                    }
                  } else rtn.push('Incomplete conditional data');
                }
              }
              switch (maybeLeaf._type) {
                case 'bitmap':
                  let bitmapArray = [
                    '%'.padEnd(maybeLeaf._size + 1, '0'),
                    '%'.padEnd(maybeLeaf._size, '0') + '1',
                  ];
                  this._learnTextFromNumber(
                    address + '/' + leafName,
                    address.slice(1),
                    i,
                    1,
                    true
                  )
                    .then((values) => {
                      if (
                        JSON.stringify(values) != JSON.stringify(bitmapArray)
                      ) {
                        rtn.push(address + '/' + leafName);
                      }
                      checkLeaf();
                    })
                    .catch((err) => {
                      rej(err);
                    });
                  break;
                case 'btnString':
                  let btnStringArray = ['X001', 'X002'];
                  let btnReturnArray: string[] = [];
                  this._sendDatawTimeout(
                    address + '/' + leafName,
                    btnStringArray[0]
                  )
                    .then(() => {
                      return this._getNode(address.slice(1));
                    })
                    .then((nodeValues) => {
                      btnReturnArray.push(nodeValues[i]);
                      return this._sendDatawTimeout(
                        address + '/' + leafName,
                        btnStringArray[1]
                      );
                    })
                    .then(() => {
                      return this._getNode(address.slice(1));
                    })
                    .then((nodeValues) => {
                      btnReturnArray.push(nodeValues[i]);
                      if (
                        JSON.stringify(btnReturnArray) !=
                        JSON.stringify(btnStringArray)
                      ) {
                        //fs.writeFile('./test.json', JSON.stringify(btnReturnArray), () => {});
                        //fs.writeFile('./test2.json', JSON.stringify(btnStringArray), () => {});
                        rtn.push(address + '/' + leafName);
                      }
                      checkLeaf();
                    })
                    .catch((err) => {
                      rej(err);
                    });
                  break;
                case 'encString':
                  let encStringArray = ['X001', 'X002'];
                  let encReturnArray: string[] = [];
                  this._sendDatawTimeout(
                    address + '/' + leafName,
                    encStringArray[0]
                  )
                    .then(() => {
                      return this._getNode(address.slice(1));
                    })
                    .then((nodeValues) => {
                      encReturnArray.push(nodeValues[i]);
                      return this._sendDatawTimeout(
                        address + '/' + leafName,
                        encStringArray[1]
                      );
                    })
                    .then(() => {
                      return this._getNode(address.slice(1));
                    })
                    .then((nodeValues) => {
                      encReturnArray.push(nodeValues[i]);
                      if (
                        JSON.stringify(encReturnArray) !=
                        JSON.stringify(encStringArray)
                      ) {
                        //fs.writeFile('./test.json', JSON.stringify(encReturnArray), () => {});
                        //fs.writeFile('./test2.json', JSON.stringify(encStringArray), () => {});
                        rtn.push(address + '/' + leafName);
                      }
                      checkLeaf();
                    })
                    .catch((err) => {
                      rej(err);
                    });
                  break;
                case 'enum':
                  if (!leaveKeys || !maybeLeaf._isKey) {
                    let isKey = !!maybeLeaf._isKey;
                    let enumArray = maybeLeaf._enum;
                    let enumDelay = 10;
                    if (address.slice(-4) == 'link') enumDelay = 70;
                    this._learnTextFromNumber(
                      address + '/' + leafName,
                      address.slice(1),
                      i,
                      enumArray.length - 1,
                      true,
                      enumDelay
                    )
                      .then((values) => {
                        if (
                          JSON.stringify(values) != JSON.stringify(enumArray)
                        ) {
                          //fs.writeFile('./test.json', JSON.stringify(values), () => {});
                          //fs.writeFile('./test2.json', JSON.stringify(enumArray), () => {});
                          /* for (let i = 0; i < enumArray.length; i++) {
                            if (values[i] != enumArray[i]) console.log(values[i] + ' ' + enumArray[i]);
                          } */
                          rtn.push(address + '/' + leafName);
                          checkLeaf();
                        } else {
                          if (isKey && !leaveKeys) {
                            (async () => {
                              for (let i = 0; i < enumArray.length; i++) {
                                await this._setOSC(
                                  address + '/' + leafName,
                                  enumArray[i]
                                )
                                  .then(() => {
                                    console.log(
                                      'Testing leaf: ' +
                                        address +
                                        '/' +
                                        leafName +
                                        ', setting: ' +
                                        enumArray[i]
                                    );
                                    return this._testTree(node, address, true);
                                  })
                                  .then((values) => {
                                    let identifiedValues = values.map((x) => {
                                      return enumArray[i] + ' ' + x;
                                    });
                                    rtn = [...rtn, ...identifiedValues];
                                  })
                                  .catch((err) => {
                                    rej(err);
                                  });
                              }
                            })()
                              .then(() => {
                                checkLeaf();
                              })
                              .catch((err) => {
                                rej(err);
                              });
                          } else checkLeaf();
                        }
                      })
                      .catch((err) => {
                        rej(err);
                      });
                  } else checkLeaf();
                  break;
                case 'exponential':
                  let exponentialArray: string[] = [];
                  for (let i = 0; i <= maybeLeaf._steps; i++) {
                    let nextElement = x32ValueToString(
                      { type: 'f', data: i / maybeLeaf._steps },
                      {
                        _type: 'exponential',
                        _address: [],
                        _value: '',
                        _min: maybeLeaf._min,
                        _max: maybeLeaf._max,
                        _steps: maybeLeaf._steps,
                        _decimals: maybeLeaf._decimals,
                        _maxDigits: maybeLeaf._maxDigits,
                        _freq: maybeLeaf._freq,
                      },
                      this._x32Meta
                    );
                    if (typeof nextElement == 'string')
                      exponentialArray.push(nextElement);
                  }
                  this._learnTextFromNumber(
                    address + '/' + leafName,
                    address.slice(1),
                    i,
                    exponentialArray.length - 1
                  )
                    .then((values) => {
                      if (
                        JSON.stringify(values) !=
                        JSON.stringify(exponentialArray)
                      ) {
                        //fs.writeFile('./test.json', JSON.stringify(values), () => {});
                        //fs.writeFile('./test2.json', JSON.stringify(exponentialArray), () => {});
                        /* for (let i = 0; i < exponentialArray.length; i++) {
                          if (values[i] != exponentialArray[i]) console.log(values[i] + ' ' + exponentialArray[i]);
                        } */
                        rtn.push(address + '/' + leafName);
                      }
                      checkLeaf();
                    })
                    .catch((err) => {
                      rej(err);
                    });
                  break;
                case 'icon':
                  let iconArray = new Array(75).fill(0).map((v, i) => {
                    if (i == 0) i = 1; //There is no icon 0 for some absurd reason
                    return i.toString();
                  });
                  this._learnTextFromNumber(
                    address + '/' + leafName,
                    address.slice(1),
                    i,
                    iconArray.length - 1,
                    true
                  )
                    .then((values) => {
                      if (JSON.stringify(values) != JSON.stringify(iconArray)) {
                        //fs.writeFile('./test.json', JSON.stringify({[address + '/' + leafName]: values}), () => {});
                        //fs.writeFile('./test2.json', JSON.stringify({[address + '/' + leafName]: iconArray}), () => {});
                        rtn.push(address + '/' + leafName);
                      }
                      checkLeaf();
                    })
                    .catch((err) => {
                      rej(err);
                    });
                  break;
                case 'int':
                  let intArray = new Array(maybeLeaf._max + 1)
                    .fill(0)
                    .map((v, i) => {
                      return i.toString();
                    });
                  this._learnTextFromNumber(
                    address + '/' + leafName,
                    address.slice(1),
                    i,
                    intArray.length - 1,
                    true
                  )
                    .then((values) => {
                      if (JSON.stringify(values) != JSON.stringify(intArray)) {
                        //fs.writeFile('./test.json', JSON.stringify({[address + '/' + leafName]: values}), () => {});
                        //fs.writeFile('./test2.json', JSON.stringify({[address + '/' + leafName]: intArray}), () => {});
                        rtn.push(address + '/' + leafName);
                      }
                      checkLeaf();
                    })
                    .catch((err) => {
                      rej(err);
                    });
                  break;
                case 'level':
                  let levelArray: string[] = [];
                  for (let i = 0; i < 1024; i++) {
                    let nextElement = x32ValueToString(
                      { type: 'f', data: i / 1023 },
                      { _type: 'level', _address: [], _value: '' },
                      this._x32Meta
                    );
                    if (typeof nextElement == 'string')
                      levelArray.push(nextElement);
                  }
                  this._learnTextFromNumber(
                    address + '/' + leafName,
                    address.slice(1),
                    i,
                    levelArray.length - 1
                  )
                    .then((values) => {
                      //fs.writeFile('./test.json', JSON.stringify(values), () => {});
                      //fs.writeFile('./test2.json', JSON.stringify(levelArray), () => {});
                      /* for (let i = 0; i < levelArray.length; i++) {
                          if (values[i] != levelArray[i]) console.log(values[i] + ' ' + levelArray[i]);
                        } */
                      if (
                        JSON.stringify(values) != JSON.stringify(levelArray)
                      ) {
                        rtn.push(address + '/' + leafName);
                      }
                      checkLeaf();
                    })
                    .catch((err) => {
                      rej(err);
                    });
                  break;
                case 'level161':
                  let level161Array: string[] = [];
                  for (let i = 0; i < 161; i++) {
                    let nextElement = x32ValueToString(
                      { type: 'f', data: i / 160 },
                      { _type: 'level161', _address: [], _value: '' },
                      this._x32Meta
                    );
                    if (typeof nextElement == 'string')
                      level161Array.push(nextElement);
                  }
                  this._learnTextFromNumber(
                    address + '/' + leafName,
                    address.slice(1),
                    i,
                    level161Array.length - 1
                  )
                    .then((values) => {
                      //fs.writeFile('./test.json', JSON.stringify(values), () => {});
                      //fs.writeFile('./test2.json', JSON.stringify(level161Array), () => {});
                      if (
                        JSON.stringify(values) != JSON.stringify(level161Array)
                      ) {
                        rtn.push(address + '/' + leafName);
                      }
                      checkLeaf();
                    })
                    .catch((err) => {
                      rej(err);
                    });
                  break;
                case 'linear':
                  let linearArray: string[] = [];
                  let steps = Math.round(
                    (maybeLeaf._max - maybeLeaf._min) / maybeLeaf._step
                  );
                  for (let i = 0; i <= steps; i++) {
                    let nextElement = x32ValueToString(
                      { type: 'f', data: i / steps },
                      {
                        _type: 'linear',
                        _address: [],
                        _value: '',
                        _min: maybeLeaf._min,
                        _max: maybeLeaf._max,
                        _step: maybeLeaf._step,
                        _decimals: maybeLeaf._decimals,
                        _maxDigits: maybeLeaf._maxDigits,
                        _plusSign: maybeLeaf._plusSign,
                      },
                      this._x32Meta
                    );
                    if (typeof nextElement == 'string')
                      linearArray.push(nextElement);
                  }
                  this._learnTextFromNumber(
                    address + '/' + leafName,
                    address.slice(1),
                    i,
                    linearArray.length - 1
                  )
                    .then((values) => {
                      if (
                        JSON.stringify(values) != JSON.stringify(linearArray)
                      ) {
                        //fs.writeFile('./test.json', JSON.stringify(values), () => {});
                        //fs.writeFile('./test2.json', JSON.stringify(linearArray), () => {});
                        /* for (let i = 0; i < linearArray.length; i++) {
                          if (values[i] != linearArray[i]) console.log(values[i] + ' ' + linearArray[i]);
                        } */
                        rtn.push(address + '/' + leafName);
                      }
                      checkLeaf();
                    })
                    .catch((err) => {
                      rej(err);
                    });
                  break;
                case 'string':
                  let stringArray = ['X001', 'X002'];
                  let returnArray: string[] = [];
                  this._sendDatawTimeout(
                    address + '/' + leafName,
                    stringArray[0]
                  )
                    .then(() => {
                      return this._getNode(address.slice(1));
                    })
                    .then((nodeValues) => {
                      returnArray.push(nodeValues[i]);
                      return this._sendDatawTimeout(
                        address + '/' + leafName,
                        stringArray[1]
                      );
                    })
                    .then(() => {
                      return this._getNode(address.slice(1));
                    })
                    .then((nodeValues) => {
                      returnArray.push(nodeValues[i]);
                      if (
                        JSON.stringify(returnArray) !=
                        JSON.stringify(stringArray)
                      ) {
                        fs.writeFile(
                          './test.json',
                          JSON.stringify(returnArray),
                          () => {}
                        );
                        fs.writeFile(
                          './test2.json',
                          JSON.stringify(stringArray),
                          () => {}
                        );
                        rtn.push(address + '/' + leafName);
                      }
                      checkLeaf();
                    })
                    .catch((err) => {
                      rej(err);
                    });
                  break;
                case 'virtualEnum':
                  let vEnumArray = maybeLeaf._enum.map((v, i) => {
                    return i.toString();
                  });
                  this._learnTextFromNumber(
                    address + '/' + leafName,
                    address.slice(1),
                    i,
                    vEnumArray.length - 1,
                    true
                  )
                    .then((values) => {
                      //fs.writeFile('./test.json', JSON.stringify(values), () => {});
                      //fs.writeFile('./test2.json', JSON.stringify(vEnumArray), () => {});
                      if (
                        JSON.stringify(values) != JSON.stringify(vEnumArray)
                      ) {
                        rtn.push(address + '/' + leafName);
                      }
                      checkLeaf();
                    })
                    .catch((err) => {
                      rej(err);
                    });
                  break;
                case 'unused':
                  if (!leaveKeys)
                    console.error('Unexpected "unused" type leaf');
                  checkLeaf();
                  break;
                default:
                  let type = maybeLeaf._type;
                  if (maybeLeaf._type == 'conditional') {
                    if (leaveKeys) {
                      rej('Failed conditional transformation');
                    }
                  } else {
                    rtn.push('Unknown leaf type: ' + type);
                  }
                  checkLeaf();
                  break;
              }
            } else {
              let nodeName = properties[i];
              if (nodeName[0] == "'") nodeName = nodeName.slice(1);
              this._testTree(maybeLeaf, address + '/' + nodeName, leaveKeys)
                .then((partialRtn) => {
                  rtn = [...rtn, ...partialRtn];
                  checkLeaf();
                })
                .catch((err) => {
                  rej(err);
                });
            }
          } else res(rtn);
        };
        checkLeaf();
      }
    });
  }

  private _processChangeFromX32(
    oscAddress: string,
    arg: oscArgument,
    node?: x32MetaNode
  ) {
    if (!node) node = this._x32Meta;
    let index = oscAddress.indexOf('/', 1);
    if (index == -1) {
      let leaf = node[oscAddress.slice(1)];
      if (isMetaLeaf(leaf)) {
        let newValue = x32ValueToString(arg, leaf, this._x32Meta);
        if (typeof newValue == 'string') {
          leaf._value = newValue;
          let linkTest = leaf._address[leaf._address.length - 2].slice(-4);
          if (linkTest == 'link' || linkTest == 'kcfg')
            this._markAllRedundant();
        } else this.emit('error', new Error(newValue.error));
      } else
        this.emit(
          'error',
          new Error(
            'X32 changing unknown parameter: ' +
              node._address.join('/') +
              oscAddress
          )
        );
    } else {
      let nextNodeName = oscAddress.slice(1, index);
      let nextAddress = oscAddress.slice(index);
      let nextNode = node[nextNodeName];
      if (isNode(nextNode)) {
        this._processChangeFromX32(nextAddress, arg, nextNode);
      } else
        this.emit(
          'error',
          new Error(
            'X32 changing unknown parameter: ' +
              node._address.join('/') +
              oscAddress
          )
        );
    }
  }

  getDiff(reference: x32Node) {
    return this._getDiff(reference, this._x32Meta);
  }

  private _getDiff(ref: x32Node, x32Meta: x32MetaNode): x32Diff {
    let rtn: x32Diff = {};
    let properties = Object.getOwnPropertyNames(x32Meta);
    for (let i = 0; i < properties.length; i++) {
      let refProp = ref[properties[i]];
      if (refProp) {
        let metaProp = x32Meta[properties[i]];
        if (!Array.isArray(metaProp)) {
          if (metaProp._type && typeof refProp == 'string') {
            if (refProp != metaProp._value && !metaProp._redundant)
              rtn[properties[i]] = {
                reference: refProp,
                current: metaProp._value,
              };
          }
          if (!metaProp._type && typeof refProp == 'object') {
            let possibleObject = this._getDiff(refProp, metaProp);
            if (Object.getOwnPropertyNames(possibleObject).length > 0)
              rtn[properties[i]] = possibleObject;
          }
        }
      }
    }
    return rtn;
  }

  static x32FromText(text: Buffer | string | string[]): x32Node | null {
    let lines: string[];
    if (Buffer.isBuffer(text)) {
      lines = text.toString().split(/\r?\n/);
    } else if (typeof text == 'string') {
      lines = text.split(/\r?\n/);
    } else if (Array.isArray(text) && typeof text[0] == 'string') {
      lines = text;
    } else return null;
    let x32node: x32Node = {};
    let i = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i][0] == '/' && lines[i].slice(0, 6) != '/-stat') {
        let index = lines[i].indexOf(' ');
        let address = lines[i].slice(1, index);
        let values = oscNodeStringToValueArray(lines[i].slice(index));
        let leafDefs = getLeafDefs(address).map((x) => {
          return x.name;
        });
        if (leafDefs.length == 0 && values.length == 1) {
          //scene and snippet files can have leaves as well as nodes
          let newAddress = address.slice(0, address.lastIndexOf('/'));
          let leafName = address.slice(address.lastIndexOf('/') + 1);
          let leafValue = values[0];
          leafDefs = getLeafDefs(newAddress).map((x) => {
            return x.name;
          });
          if (leafDefs.indexOf(leafName) != -1) {
            values = leafDefs.map((x) => {
              if (x == leafName) {
                return leafValue;
              } else return '';
            });
            address = newAddress;
          } else leafDefs = [];
        }
        if (leafDefs.length != values.length)
          console.error('Value/definition mismatch or bad node');
        populateX32ValueTree(x32node, address, values, leafDefs);
      } else {
        //console.log("Skipped line:");
        //console.log(lines[i]);
      }
    }
    return x32node;
  }
}

export { X32 };

function x32ValueToString(
  arg: oscArgument,
  leaf: x32MetaLeaf,
  x32Node: x32MetaNode
): string | { error: string } {
  let typeError = {
    error:
      'OSC type "' +
      arg.type +
      '" incompatible with X32 leaf type"' +
      leaf._type +
      '"',
  };
  let rangeError = {
    error: 'Out of range number for OSC node:' + leaf._address,
  };
  if (leaf._type == 'conditional') {
    let key = getLeafValue(leaf._keyAddress, x32Node);
    if (typeof key == 'object') {
      return key;
    } else {
      if (leaf._conditional[key] && leaf._conditional[key][leaf._index]) {
        let newLeaf = JSON.parse(
          JSON.stringify(leaf._conditional[key][leaf._index])
        ) as x32DefinitionLeaf & {
          _name?: string;
          _address: string[];
          _value: string;
          _redundant?: true;
        };
        newLeaf._name;
        newLeaf._address = leaf._address;
        newLeaf._value = leaf._value;
        newLeaf._redundant = leaf._redundant;
        leaf = newLeaf;
      } else return { error: 'Incomplete conditional data' };
    }
  }
  switch (leaf._type) {
    case 'string':
      if (arg.type == 's') {
        return arg.data;
      } else return typeError;
      break;
    case 'encString':
      if (arg.type == 's') {
        return arg.data;
      } else return typeError;
      break;
    case 'btnString':
      if (arg.type == 's') {
        return arg.data;
      } else return typeError;
      break;
    case 'icon':
      if (arg.type == 'i') {
        return arg.data.toString();
      } else return typeError;
      break;
    case 'enum':
      if (arg.type == 'i') {
        return leaf._enum[arg.data];
      } else return typeError;
      break;
    case 'level161':
      if (arg.type == 'f') {
        let float161 = arg.data;
        float161 = Math.round(float161 * 160) / 160;
        let db161;
        if (float161 == 0) {
          return '-oo';
        } else {
          if (float161 >= 0.5) {
            db161 = float161 * 40 - 30;
          } else if (float161 >= 0.25) {
            db161 = float161 * 80 - 50;
          } else if (float161 >= 0.0625) {
            db161 = float161 * 160 - 70;
          } else if (float161 >= 0.0) {
            db161 = float161 * 480 - 90;
          }
          if (!db161 && db161 != 0) return rangeError;
          let db161String = db161.toFixed(1);
          if (db161 > 0) db161String = '+' + db161String;
          return db161String;
        }
      } else return typeError;
      break;
    case 'level':
      if (arg.type == 'f') {
        let levelFloat = arg.data;
        let db;
        if (levelFloat == 0) {
          return '-oo';
        } else {
          if (levelFloat >= 0.5) {
            db = levelFloat * 40 - 30;
          } else if (levelFloat >= 0.25) {
            db = levelFloat * 80 - 50;
          } else if (levelFloat >= 0.0625) {
            db = levelFloat * 160 - 70;
          } else if (levelFloat >= 0.0) {
            db = levelFloat * 480 - 90;
          }
          if (!db) return rangeError;
          if (Math.abs(db) < 0.1) db = 0;
          let levelString = (Math.round(db * 10) / 10).toFixed(1);
          if (db > 0) levelString = '+' + levelString;
          return levelString;
        }
      } else return typeError;
      break;
    case 'linear': {
      if (arg.type == 'f') {
        let steps = (leaf._max - leaf._min) / leaf._step;
        let rtn = Math.round(arg.data * steps) / steps;
        rtn *= leaf._max - leaf._min;
        rtn += leaf._min;
        let decimals = 0;
        if (leaf._decimals || leaf._decimals == 0) decimals = leaf._decimals;
        rtn = Math.round(rtn * 10000000) / 10000000;
        let linearString = rtn.toString();
        if (decimals || decimals == 0) linearString = rtn.toFixed(decimals);
        if (rtn >= 0 && leaf._plusSign) linearString = '+' + linearString;
        if (leaf._maxDigits) {
          let digits = Math.floor(Math.abs(rtn)).toFixed(0).length + decimals;
          let removeDigits = digits - leaf._maxDigits;
          if (removeDigits > 0) {
            if (removeDigits > decimals) removeDigits = decimals;
            if (removeDigits == decimals) removeDigits++;
            linearString = linearString.slice(0, -removeDigits);
          }
        }
        return linearString;
      } else return typeError;
    }
    case 'int': {
      if (arg.type == 'i') {
        return arg.type.toString();
      } else return typeError;
    }
    case 'virtualEnum': {
      if (arg.type == 'i') {
        return arg.data.toString();
      } else return typeError;
    }
    case 'bitmap': {
      if (arg.type == 'i') {
        let rtn = arg.data.toString(2);
        while (rtn.length < leaf._size) rtn = '0' + rtn;
        rtn = '%' + rtn;
        return rtn;
      } else return typeError;
    }
    case 'exponential': {
      if (arg.type == 'f') {
        let rounded = Math.round(arg.data * leaf._steps) / leaf._steps;
        let rtn =
          leaf._min * Math.exp(Math.log(leaf._max / leaf._min) * rounded);
        rtn = Math.round(rtn * 10000000) / 10000000;
        if (leaf._freq && rtn >= 1000) {
          let kHz = Math.floor(rtn / 1000);
          if ((leaf._decimals || leaf._decimals == 0) && leaf._decimals <= 0)
            rtn = Math.round(rtn);
          rtn = Math.round(rtn * 10) / 10; //20-20k freq type needs this
          let rest = Math.floor(rtn % 1000)
            .toString()
            .padStart(3, '0');
          if (leaf._decimals || leaf._decimals == 0) {
            return kHz + 'k' + rest.slice(0, leaf._decimals + 1);
          } else return kHz + 'k' + rest;
        } else {
          if (leaf._decimals || leaf._decimals == 0) {
            let expString = rtn.toFixed(leaf._decimals);
            if (leaf._maxDigits) {
              let digits = Math.floor(rtn).toFixed(0).length + leaf._decimals;
              let removeDigits = digits - leaf._maxDigits;
              if (removeDigits > 0) {
                if (removeDigits > leaf._decimals)
                  removeDigits = leaf._decimals;
                if (removeDigits == leaf._decimals) removeDigits++;
                expString = expString.slice(0, -removeDigits);
              }
            }
            return expString;
          } else return rtn.toString();
        }
      } else return typeError;
    }
    default:
      return { error: 'Unknown X32 type: "' + leaf._type + '"' };
  }
}

function getLeafValue(
  address: string[],
  x32node: x32MetaNode | x32Node
): string | { error: string } {
  if (address.length == 1) {
    let leaf = x32node[address[0]];
    if (
      (leaf && !Array.isArray(leaf) && typeof leaf == 'object' && leaf._type) ||
      typeof leaf == 'string'
    ) {
      if (typeof leaf == 'string') {
        return leaf;
      } else return leaf._value;
    } else return { error: 'Bad leaf address' };
  } else {
    let newNodeName = address[0];
    let newAddress = address.slice(1);
    let newNode = x32node[newNodeName];
    if (
      newNode &&
      typeof newNode == 'object' &&
      !Array.isArray(newNode) &&
      !newNode._type
    ) {
      return getLeafValue(newAddress, newNode);
    } else return { error: 'Bad address' };
  }
}

function getLeafDefs(
  address: string,
  //values: string[],
  node?: x32DefinitionNode
): { name: string; type: x32DefinitionLeaf }[] {
  let rtn: { name: string; type: x32DefinitionLeaf }[] = [];
  if (!node) node = x32NodeStructure as x32DefinitionNode;
  let index = address.indexOf('/');
  if (index == -1) {
    let property = address;
    if (isNumber(property)) property = "'" + property;
    let finalNode = node[property];
    if (!finalNode || finalNode._type) {
      //leaf of invalid node. Either way return []
      return [];
    }
    let nodeProperties = Object.getOwnPropertyNames(finalNode);
    for (let i = 0; i < nodeProperties.length; i++) {
      let maybeLeaf = finalNode[nodeProperties[i]];
      if (maybeLeaf._type) {
        let leafName = nodeProperties[i];
        if (leafName[0] == "'") leafName = leafName.slice(1);
        rtn.push({ name: leafName, type: maybeLeaf });
      }
    }
  } else {
    let property = address.slice(0, index);
    if (isNumber(property)) property = "'" + property;
    let nextAddress = address.slice(index + 1);
    let nextNode = node[property];
    if (!nextNode || nextNode._type) {
      console.error('invalid node:' + address);
      return [];
    }
    return getLeafDefs(nextAddress, nextNode);
  }
  return rtn;
}

function hasLeavesNodes(node: x32DefinitionNode): [boolean, boolean] {
  let rtn: [boolean, boolean] = [false, false];
  let nodeProperties = Object.getOwnPropertyNames(node);
  for (let i = 0; i < nodeProperties.length; i++) {
    if (node[nodeProperties[i]]._type) {
      rtn[0] = true;
    } else {
      rtn[1] = true;
    }
  }
  return rtn;
}

function populateX32ValueTree(
  x32Node: x32Node,
  address: string,
  values: string[],
  leaves: string[]
) {
  let index = address.indexOf('/');
  if (index == -1) {
    if (!x32Node[address]) x32Node[address] = {};
    let childNode = x32Node[address] as x32Node;
    for (let i = 0; i < leaves.length; i++) {
      if (values[i]) childNode[leaves[i]] = values[i];
    }
  } else {
    let property = address.slice(0, index);
    let newAddress = address.slice(index + 1);
    if (!x32Node[property]) x32Node[property] = {};
    let childNode = x32Node[property] as x32Node;
    populateX32ValueTree(childNode, newAddress, values, leaves);
  }
}

function markRedundantTree(node: x32MetaNode, linked: boolean) {
  let properties = Object.getOwnPropertyNames(node);
  for (let i = 0; i < properties.length; i++) {
    let prop = node[properties[i]];
    if (isNode(prop)) markRedundantTree(prop, linked);
    if (isMetaLeaf(prop))
      if (linked && properties[i] != 'pan' && properties[i] != 'sel') {
        prop._redundant = true;
      } else delete prop._redundant;
  }
}

function oscNodeStringToValueArray(string: string): string[] {
  let values: string[] = [];
  for (let i = 1; i < string.length; i++) {
    let remainingString = string.slice(i);
    let index = remainingString.indexOf(' ');
    if (index == -1) {
      i += remainingString.length;
      if (remainingString[remainingString.length - 1] == '\n')
        remainingString = remainingString.slice(0, -1);
      values.push(remainingString);
    } else if (index > 0) {
      let quoteTrim = 0;
      if (remainingString[0] == '"') {
        remainingString = remainingString.slice(1);
        index = remainingString.indexOf('"');
        quoteTrim = 1;
      }
      values.push(remainingString.slice(0, index));
      i += index + quoteTrim;
    }
  }
  return values;
}

function oscFormatBufferToArguments(
  buf: Buffer,
  format?: string[]
): oscArgument[] | { error: string } {
  if (!format) {
    let split = buf.indexOf(0);
    if (split == -1) return { error: 'Bad data from X32' };
    format = buf.slice(0, split).toString().split('');
    if (format[0] != ',') {
      return { error: 'Bad OSC format data from X32' };
    } else {
      format.shift();
    }
    split = Math.ceil(split / 4) * 4;
    buf = buf.slice(split);
  }
  let args: oscArgument[] = [];
  if (format.length == 0 && buf.length > 0)
    return { error: 'OSC data without format from X32' };
  if (format.length > 0 && buf.length < 4)
    return { error: 'OSC from X32 missing data claimed by format' };
  if (format.length == 0) return [];
  let argument1: oscArgument | null = null;
  let bufEnd = 4;
  switch (format[0]) {
    case 'b':
      let blobSize = buf.readInt32BE();
      if (blobSize + 4 > buf.length)
        return { error: 'OSC from X32 missing data claimed by format: blob' };
      bufEnd = 4 + blobSize;
      bufEnd = Math.ceil(bufEnd / 4) * 4;
      let blobData = buf.slice(4, 4 + blobSize);
      argument1 = { type: 'b', data: blobData };
      break;
    case 'f':
      argument1 = { type: 'f', data: buf.readFloatBE() };
      break;
    case 'i':
      argument1 = { type: 'i', data: buf.readInt32BE() };
      break;
    case 's':
      let stringSize = buf.indexOf(0);
      if (stringSize == -1)
        return { error: 'OSC from X32 missing data claimed by format: string' };
      bufEnd = stringSize + 1;
      bufEnd = Math.ceil(bufEnd / 4) * 4;
      argument1 = { type: 's', data: buf.slice(0, stringSize).toString() };
      break;
  }
  if (!argument1) return { error: 'unknown OSC format from X32' };
  let remainingArgs = oscFormatBufferToArguments(
    buf.slice(bufEnd),
    format.slice(1)
  );
  if (Array.isArray(remainingArgs)) {
    return [argument1, ...remainingArgs];
  } else {
    return remainingArgs;
  }
}

function oscArgumentToBuffer(arg: oscArgument): Buffer {
  switch (arg.type) {
    case 'b':
      let size = Buffer.alloc(4);
      size.writeInt32BE(arg.data.length);
      let bufPad = Buffer.alloc(4 - (arg.data.length % 4));
      return Buffer.concat([size, arg.data, bufPad]);
      break;
    case 'f':
      let floatBuf = Buffer.allocUnsafe(4);
      floatBuf.writeFloatBE(arg.data, 0);
      return floatBuf;
      break;
    case 'i':
      let intBuf = Buffer.allocUnsafe(4);
      intBuf.writeInt32BE(arg.data, 0);
      return intBuf;
      break;
    case 's':
      return stringToBuffer(arg.data);
      break;
  }
}

function stringToBuffer(str: string): Buffer {
  let buf = Buffer.from(str);
  let bufPad = Buffer.alloc(4 - (buf.length % 4));
  return Buffer.concat([buf, bufPad]);
}

function isNode(
  unknown: x32MetaNode | x32Node | string[] | string | x32MetaLeaf | undefined
): unknown is x32MetaNode | x32Node {
  if (
    unknown &&
    typeof unknown != 'string' &&
    !Array.isArray(unknown) &&
    !unknown._type
  ) {
    return true;
  } else return false;
}

function isMetaLeaf(
  unknown: x32MetaNode | x32MetaLeaf | string[] | undefined
): unknown is x32MetaLeaf {
  if (
    unknown &&
    typeof unknown != 'string' &&
    !Array.isArray(unknown) &&
    unknown._type
  ) {
    return true;
  } else return false;
}

let isNumber = (str: string) => /^\d+$/.test(str); //I have not the slightest idea what's happening here :)
