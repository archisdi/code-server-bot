'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

/** Handlers */
const ApiGuard = require('./middlewares/api_guard');
const RateLimiter = require('./utils/libs/rate_limiter');
const RouteHandler = require('./routes');
const ExceptionHandler = require('./exceptions');

/** Initialize Express */
const app = express();

/** Plugins */
app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** Global Middlewares */
app.use(ApiGuard);
app.use(RateLimiter());

/** Register Handlers */
RouteHandler(app);
ExceptionHandler(app);

module.exports = app;
