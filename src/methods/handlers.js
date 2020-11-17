'use strict';

const gcloud = require('../modules/gcloud');

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

exports.telegramHandler = async (data, context) => {
    return {
        data: data.body
    };
}

module.exports = exports;
