/**
 * Author: cschmitt
 * Copyright: E2E Technologies Ltd
 */
"use strict";


module.exports = require('./transactionLogger');
module.exports.processLogger = require('./processLogger');
module.exports.ProcessLogger = module.exports.processLogger.ProcessLogger;
module.exports.transactionLoggerMiddleware = require('./middleware').transactionLogger;

/**
 * set the default log path
 * @param {String} value
 */
module.exports.setDefaultLogPath = function(value){
    require('./logger').defaultPath = value;
};
