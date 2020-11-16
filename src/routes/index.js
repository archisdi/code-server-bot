'use strict';

module.exports = (app) => {
    app.use('/', require('./main_routes'));
};
