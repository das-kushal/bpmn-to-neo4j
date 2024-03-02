/**
 * Author: cschmitt
 * Copyright: E2E Technologies Ltd
 */
"use strict";

var util = require('util');

var ProcessLogger = require('./processLogger').ProcessLogger;
var Transaction = require('./transaction').Transaction;

/**
 * The request id needs to be globally unique on the node instance
 * @type {number}
 */
if(!global.e2eTransactionLoggerCurrentRequestId){
    global.e2eTransactionLoggerCurrentRequestId = 1;
}

/**
 * Create a transaction logger
 * @param {String=} logPath
 * @constructor
 */
var TransactionLogger = function(logPath){
    ProcessLogger.call(this, logPath, 0, new Date());

    this.logPath = logPath;

    /**
     * Start a transaction
     * @param {String} name
     * @param {String=} domain
     * @param {String=} type
     * @param {String=} trxId
     * @param {String=} param1
     * @param {String=} param2
     * @return {Transaction}
     */
    this.startTransaction = function(name, domain, type, trxId, param1, param2){
        var trx;

        trxId = trxId || require('node-uuid').v4();

        trx = new Transaction({
            trxId: trxId,
            requestId: global.e2eTransactionLoggerCurrentRequestId++,
            name: name,
            domain: domain || 'INTERFACE',
            type: type || 'SERVICE',
            param1: param1,
            param2: param2
        }, logPath);

        trx.start();

        return trx;
    };
};

util.inherits(TransactionLogger, ProcessLogger);

module.exports = new TransactionLogger();
module.exports.TransactionLogger = TransactionLogger;

