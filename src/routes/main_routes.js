'use strict';

const router = require('express').Router();

const { telegramHandler } = require('../methods/handlers');
const { ExpressLogicAdapter: Logic } = require('../utils/libs/express');

/** User Routes */
router.get('/telegram', Logic(telegramHandler));

module.exports = router;
