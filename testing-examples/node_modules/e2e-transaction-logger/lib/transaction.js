/**
 * Author: cschmitt
 * Copyright: E2E Technologies Ltd
 */
"use strict";

var util = require('util');

var ProcessLogger = require('./processLogger').ProcessLogger;
var logger = require('./logger');
var IO = require('./io').IO;

/**
 * Create a Transaction
 * @param {Object} data
 *  @param {String} data.trxId
 *  @param {Number} data.requestId
 *  @param {String} data.name
 *  @param {String} data.domain
 *  @param {String} data.type
 * @param {String} logPath
 * @constructor
 */
var Transaction = function(data, logPath){
    this.startDate = new Date();

    ProcessLogger.call(this, logPath, data.requestId, this.startDate, data.trxId);

    /**
     * Start the transaction. Do the trace.
     */
    this.start = function(){

        this.startDate = new Date();

        logger.logEntry(logPath,{
            datetime: this.startDate,
            trxId: data.trxId,
            requestId: data.requestId,
            name: data.name,
            elapsedTime: 0,
            state: 'OK',
            domain: data.domain,
            logType: data.type + '_ENTER',
            param1: data.param1,
            param2: data.param2
        });
    };

    /**
     * End the transaction. Do the trace.
     * @param {String|Boolean=} state 'OK' or true means success. Everything else means fail.
     */
    this.end = function(state){
        var endDate = new Date();

        logger.logEntry(logPath,{
            datetime: endDate,
            trxId: data.trxId,
            requestId: data.requestId,
            name: data.name,
            elapsedTime: +endDate - this.startDate,
            state: (state !== undefined) ? state : 'OK',
            domain: data.domain,
            logType: data.type + '_EXIT',
            param1: data.param1,
            param2: data.param2
        });
    };

    /**
     * Start an IO call.
     * @param {String} name
     * @param {String} domain
     * @param {String} system
     * @return {IO}
     */
    this.startIO = function(name, domain, system){
        var io = new IO({
            trxId: data.trxId,
            requestId: data.requestId,
            trxStartDate: this.startDate,
            name: name,
            domain: domain,
            system: system
        }, logPath);

        io.start();

        return io;
    };

};

util.inherits(Transaction, ProcessLogger);

exports.Transaction = Transaction;