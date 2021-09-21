# X32-OSC

## Compatibility

This software has exclusively been tested with firmware version 4.06, and is highly likely to fail in some respect with any other firmware. If you have a reason to use this with some other version of firmware, let me know and I'll try to add compatibility with that version.

## Instantiation

```javascript
const { X32 } = require('x32-osc');
let x32 = new X32('0.0.0.0', 700); //Connect to X32 at 0.0.0.0 with meter info sent every 700ms
```

In TypeScript:

```typescript
import { X32 } from 'x32-osc';
```

## Basic Usage

```javascript
let testScene;
fs.readFile('./test.scn', (err, data) => {
  testScene = X32.x32FromText(data);
});

//subscribe to /meters/6, the channel meters, for channel 1, and /meters/12, the recording meters
x32.meterSubscriptions = [[6, 1], 12];
x32.on('error', (err) => {
  console.error('X32 ERROR: ' + err);
});
x32.on('info', (info) => {
  console.log('X32 INFO: ' + info);
});
x32.on('meter', (data) => {
  console.log('X32 METERS: ' + JSON.stringify(data));
});
x32.on('ready', () => {
  // read channel 11 scribble strip color:
  console.log(x32.OSC.ch[11].config.color);
  // set DCA icon to icon #30:
  x32.OSC.dca[1].config.icon = '30';
  //get a tree of the differences between test.scn and the current state of the console:
  console.log(JSON.stringify(x32.getDiff(testScene), null, 2));
  // close the connection to the X32:
  x32.close();
});
x32.on('closed', () => {
  process.exit();
});
```

## X32 OSC parameters:

All of the OSC parameters and meter subscriptions are thoroughly documented by Patrick‐Gilles Maillot [here](https://drive.google.com/file/d/1Snbwx3m6us6L1qeP1_pD6s8hbJpIpD0a/view)
