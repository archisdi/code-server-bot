'use strict';

const router = require('express').Router();

const { telegramHandler, startVm, stopVm } = require('../methods/handlers');
const { ExpressLogicAdapter: Logic } = require('../utils/libs/express');

/** User Routes */
router.post('/vm/start', Logic(startVm));
router.post('/vm/stop', Logic(stopVm));

module.exports = router;
