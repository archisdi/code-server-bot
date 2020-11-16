'use strict';

const { HttpError } = require('tymon');
const config = require('../config/app');

module.exports = (err, req, res, next) => {
    const errorInstance = err.code ? err : HttpError.InternalServerError(err.message);
    const {
        code = 500,
        user_message: userMessage = 'something went wrong',
        message_detail: messageDetail
    } = errorInstance;

    let stack = err.stack;
    stack = stack && config.debug ? err.stack.split('\n').map(item => item.trim()) : undefined;

    return res.status(+code).json({
        status: +code,
        message: userMessage,
        detail: messageDetail,
        stack
    });
};
