'use strict';

const gcloud = require('../singletons/gcloud');

exports.telegramHandler = async (data, context) => {
    return {
        message: 'event dispatched',
        data: ""
    };
};

exports.startVm = async (data, context) => {
    const vmName = "vscode";

    const zone = gcloud.getInstance();
    await zone.vm(vmName).start();

    return {
        message: "server is starting"
    }
}

exports.stopVm = async (data, context) => {
    const vmName = "vscode";

    const zone = gcloud.getInstance();
    await zone.vm(vmName).stop();

    return {
        message: "server is stoping"
    }
}

module.exports = exports;
