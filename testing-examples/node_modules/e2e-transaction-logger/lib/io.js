/**
 * Author: cschmitt
 * Copyright: E2E Technologies Ltd
 */
"use strict";

var logger = require('./logger');

/**
 * Create an IO call
 * @param {Object} data
 *  @param {String} data.trxId
 *  @param {Number} data.requestId
 *  @param {Date} data.trxStartDate
 *  @param {String} data.name
 *  @param {String} data.domain
 *  @param {String} data.system
 * @param {String} logPath
 * @constructor
 */
var IO = function(data, logPath){

    /**
     * Start the io. Do the trace.
     */
    this.start = function(){
        var date = new Date();

        logger.logEntry(logPath,{
            datetime: date,
            trxId: data.trxId,
            requestId: data.requestId,
            name: data.name,
            elapsedTime: +date - data.trxStartDate,
            state: 'OK',
            domain: data.domain,
            logType: 'IO_ENTER',
            param1: null,
            param2: data.system
        });
    };

    /**
     * End the io. Do the trace.
     * @param {String|Boolean=} state 'OK' or true means success. Everything else means fail.
     */
    this.end = function(state){
        var date = new Date();

        logger.logEntry(logPath,{
            datetime: date,
            trxId: data.trxId,
            requestId: data.requestId,
            name: data.name,
            elapsedTime: +date - data.trxStartDate,
            state: (state !== undefined) ? state : 'OK',
            domain: data.domain,
            logType: 'IO_EXIT',
            param1: null,
            param2: data.system
        });

    };

};

exports.IO = IO;