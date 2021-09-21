/// <reference path="x32-osc.d.ts" />
/// <reference types="node" />
import { EventEmitter } from 'events';
interface consoleEvents {
    connected: () => void;
    ready: () => void;
    info: (info: string) => void;
    error: (err: Error) => void;
    meter: (data: {
        number: number;
        meters: number[];
    }) => void;
    closed: () => void;
}
interface X32 {
    on<U extends keyof consoleEvents>(event: U, listener: consoleEvents[U]): this;
    off<U extends keyof consoleEvents>(event: U, listener: consoleEvents[U]): this;
    emit<U extends keyof consoleEvents>(event: U, ...args: Parameters<consoleEvents[U]>): boolean;
    _OSC: x32MetaNode;
}
declare class X32 extends EventEmitter {
    private _serverVersion;
    get serverVersion(): string;
    private _model;
    get model(): string;
    private _firmwareVersion;
    get firmwareVersion(): string;
    private _connected;
    get connected(): boolean;
    private _ready;
    get ready(): boolean;
    readonly address: string;
    private _x32Meta;
    private _linkcfg;
    private _lastValidMessage;
    private _x32UpdateFrequency;
    private _socket;
    private _meterSubscriptions;
    private _subscription?;
    private _heartbeat;
    private _nodeEmitter;
    private _leafEmitter;
    /**
     *
     * @param address - IP address or url to the x32
     * @param x32UpdateFrequency - number of milliseconds between meter updates. Between ? and ?
     *
     */
    constructor(address: string, x32UpdateFrequency?: number);
    close(): void;
    private _send;
    subscribe(): void;
    private _processDataFromX32;
    private _x32Verify;
    private _getNode;
    refreshState(): void;
    private _refreshState;
    private _markAllRedundant;
    private _markRedundant;
    private _populateX32Object;
    set OSC(value: osc);
    get OSC(): osc;
    set meterSubscriptions(value: meterDescriptions);
    get meterSubscriptions(): meterDescriptions;
    private _OSCProxy;
    private _setOSC;
    private _sendDatawTimeout;
    private _learnTextFromNumber;
    testX32NodeStructure(): Promise<string[]>;
    private _testTree;
    private _processChangeFromX32;
    getDiff(reference: x32Node): x32Diff;
    private _getDiff;
    static x32FromText(text: Buffer | string | string[]): x32Node | null;
}
export default X32;
