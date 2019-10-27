module.exports = function (RED) {
    "use strict";

    const noble = require('@abandonware/noble');

    function BLEScanNode(config) {
        RED.nodes.createNode(this, config);

        let node = this;
        if (noble.state === 'poweredOn') {
            noble.startScanning([], true);
        } else {
            noble.on('stateChange', function (state) {
                if (state === 'poweredOn') {
                    noble.startScanning([], true);
                } else {
                    node.status({
                        fill: "red",
                        shape: "dot",
                        text: "device status: " + state
                    });
                }
            });
        }

        let discover = function (peripheral) {
            let msg = { payload: peripheral };
            node.send(msg);
        }
        noble.on('discover', discover);

        node.on('close', function () {
            noble.stopScanning();
            noble.removeListener('discover', discover);

            node.status({});
        });
    }
    RED.nodes.registerType("BLE Scan", BLEScanNode);
}
