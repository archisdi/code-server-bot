'use strict';

const router = require('express').Router();

const { telegramHandler, startVm, stopVm } = require('../methods/handlers');
const { ExpressLogicAdapter: Logic } = require('../utils/libs/express');

/** User Routes */
router.get('/telegram', Logic(telegramHandler));
router.get('/vm/start', Logic(startVm));
router.get('/vm/stop', Logic(stopVm));

module.exports = router;
