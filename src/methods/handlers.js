'use strict';

const { default: axios } = require('axios');
const { HttpError } = require('tymon');
const gcloud = require('../modules/gcloud');

const VM_NAME = process.env.VIRTUAL_MACHINE_NAME;

exports.startVm = async (data, context) => {
    const zone = gcloud.getInstance();
    await zone.vm(VM_NAME).start();

    return {
        message: "spinning server"
    }
}

exports.stopVm = async (data, context) => {
    const zone = gcloud.getInstance();
    await zone.vm(VM_NAME).stop();

    return {
        message: "terminating server"
    }
}

exports.statusVm = async (data, context) => {
    const zone = gcloud.getInstance();
    const [payload] = await zone.vm(VM_NAME).get();
    const { metadata } = payload;
    return {
        message: `server is ${metadata.status.toLowerCase()}`,
    }
}


exports.telegramHandler = async (data, context) => {
    const sourceId = data.body.message.chat.id;
    if (sourceId !== +process.env.MASTER_ID) {
        throw HttpError.UnauthorizedError("unidentified personel !")
    }

    let reply;
    switch (data.body.message.text) {
        case "/spin":
            reply = (await exports.startVm()).message;
            break;

        case "/terminate":
            reply = (await exports.stopVm()).message;
            break;

        case "/status":
            reply = (await exports.statusVm()).message;
            break;
    
        default:
            reply = "unknown command"
            break;
    }

    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_KEY}/sendMessage`,
        { chat_id: sourceId, text: reply }, 
        {  headers: { 'Content-Type': 'application/json' } }
    );

    return {
        message: reply
    };
}

module.exports = exports;
