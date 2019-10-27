# node-red-contrib-ble-scan

This Node-Red module contains the "BLE Scan" node that continously scans for broadcast messages via the [noble](https://github.com/noble/noble) library.

## Installation

To install this module use Node-Red GUI installer or console command:

```
npm install node-red-contrib-ble-scan
```

This module requires the [noble](https://github.com/noble/noble) library which will be installed automatically.  Take note about the requirements when [running on linux](https://github.com/noble/noble#running-on-linux).

## Usage

**Output message:** **msg.payload** contains the peripheral object as it is generated from the noble.js library.
