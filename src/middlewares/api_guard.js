'use strict';

const { HttpError } = require('tymon');
const config = require('../config/app');

module.exports = (req, res, next) => {
    if (req.query.secret !== config.apiKey && req.headers.secret !== config.apiKey) {
        return next(HttpError.UnauthorizedError('Not Authorized'));
    }
    return next();
};
