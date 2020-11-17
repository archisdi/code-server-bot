'use strict';
const ApiGuard = require('../middlewares/api_guard');
const { telegramHandler, startVm, stopVm } = require('../methods/handlers');
const { ExpressLogicAdapter: Logic } = require('../utils/libs/express');

const router = require('express').Router();

/** User Routes */
router.post('/vm/start', ApiGuard, Logic(startVm));
router.post('/vm/stop', ApiGuard, Logic(stopVm));
router.post("/telegram", Logic(telegramHandler));

module.exports = router;
