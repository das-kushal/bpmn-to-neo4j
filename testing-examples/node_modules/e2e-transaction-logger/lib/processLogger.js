/**
 * Author: cschmitt
 * Copyright: E2E Technologies Ltd
 */
"use strict";

var logger = require('./logger');

/**
 * Create a process logger.
 * @param {String=} logPath
 * @param {Number=} requestId
 * @param {Date=} startDate
 * @constructor
 */
var ProcessLogger = function(logPath, requestId, startDate, trxId){

    this.startDate = startDate || new Date();

    /**
     * Start a process. Do the trace.
     * @param {String} processName
     * @param {String} processId
     * @param {String} eventName
     */
    this.processStart = function(processName, processId, eventName){
        var date = new Date();

        logger.logEntry(logPath,{
            datetime: date,
            trxId: trxId,
            requestId: requestId,
            name: 'Process Start',
            elapsedTime: +date - this.startDate,
            state: 'OK',
            domain: 'PROCESS_START',
            logType: 'CUSTOM',
            param1: processName + '::' + processId,
            param2: eventName
        });
    };

    /**
     * End a process. Do the trace.
     * @param {String} processName
     * @param {String} processId
     * @param {String} eventName
     */
    this.processEnd = function(processName, processId, eventName){
        var date = new Date();

        logger.logEntry(logPath,{
            datetime: date,
            trxId: trxId,
            requestId: requestId,
            name: 'Process End',
            elapsedTime: +date - this.startDate,
            state: 'OK',
            domain: 'PROCESS_END',
            logType: 'CUSTOM',
            param1: processName + '::' + processId,
            param2: eventName
        });
    };

    /**
     * Start a process state. Do the trace.
     * @param {String} processName
     * @param {String} processId
     * @param {String} stateName
     */
    this.processStateStart = function(processName, processId, stateName){
        var date = new Date();

        logger.logEntry(logPath,{
            datetime: date,
            trxId: trxId,
            requestId: requestId,
            name: 'Process State Start',
            elapsedTime: +date - this.startDate,
            state: 'OK',
            domain: 'PROCESS_STATE_START',
            logType: 'CUSTOM',
            param1: processName + '::' + processId,
            param2: stateName
        });
    };

    /**
     * End a process state. Do the trace.
     * @param {String} processName
     * @param {String} processId
     * @param {String} stateName
     */
    this.processStateEnd = function(processName, processId, stateName){
        var date = new Date();

        logger.logEntry(logPath,{
            datetime: date,
            trxId: trxId,
            requestId: requestId,
            name: 'Process State End',
            elapsedTime: +date - this.startDate,
            state: 'OK',
            domain: 'PROCESS_STATE_END',
            logType: 'CUSTOM',
            param1: processName + '::' + processId,
            param2: stateName
        });
    };

    /**
     * Trace a process choice.
     * @param {String} processName
     * @param {String} processId
     * @param {String} gateway
     * @param {String} choice
     */
    this.processChoice = function(processName, processId, gateway, choice){
        var date = new Date();

        logger.logEntry(logPath,{
            datetime: date,
            trxId: trxId,
            requestId: requestId,
            name: 'Process Choice',
            elapsedTime: +date - this.startDate,
            state: 'OK',
            domain: 'PROCESS_CHOICE',
            logType: 'CUSTOM',
            param1: processName + '::' + processId,
            param2: gateway + '::' + choice
        });
    };

    /**
     * Trace a process event.
     * @param {String} processName
     * @param {String} processId
     * @param {String} eventName
     */
    this.processEvent = function(processName, processId, eventName){
        var date = new Date();

        logger.logEntry(logPath,{
            datetime: date,
            trxId: trxId,
            requestId: requestId,
            name: 'Process Event',
            elapsedTime: +date - this.startDate,
            state: 'OK',
            domain: 'PROCESS_EVENT',
            logType: 'CUSTOM',
            param1: processName + '::' + processId,
            param2: eventName
        });
    };

    /**
     * Trace a process string value.
     * @param {String} processName
     * @param {String} processId
     * @param {String} key
     * @param {String} value
     */
    this.processValueString = function(processName, processId, key, value){
        var date = new Date();

        logger.logEntry(logPath,{
            datetime: date,
            trxId: trxId,
            requestId: requestId,
            name: 'Process String',
            elapsedTime: +date - this.startDate,
            state: 'OK',
            domain: 'PROCESS_STRING',
            logType: 'CUSTOM',
            param1: processName + '::' + processId,
            param2: key + '::' + value
        });
    };

    /**
     * Trace a process float value.
     * @param {String} processName
     * @param {String} processId
     * @param {String} key
     * @param {Number} value
     */
    this.processValueFloat = function(processName, processId, key, value){
        var date = new Date();

        logger.logEntry(logPath,{
            datetime: date,
            trxId: trxId,
            requestId: requestId,
            name: 'Process Float',
            elapsedTime: +date - this.startDate,
            state: 'OK',
            domain: 'PROCESS_FLOAT',
            logType: 'CUSTOM',
            param1: processName + '::' + processId,
            param2: key + '::' + value
        });
    };

    /**
     * Trace a process datetime value.
     * @param {String} processName
     * @param {String} processId
     * @param {String} key
     * @param {Date} value
     */
    this.processValueDateTime = function(processName, processId, key, value){
        var date = new Date();

        logger.logEntry(logPath,{
            datetime: date,
            trxId: trxId,
            requestId: requestId,
            name: 'Process Datetime',
            elapsedTime: +date - this.startDate,
            state: 'OK',
            domain: 'PROCESS_DATETIME',
            logType: 'CUSTOM',
            param1: processName + '::' + processId,
            param2: key + '::' + Math.floor(+value/1000)
        });
    };

};

module.exports = new ProcessLogger();
module.exports.ProcessLogger = ProcessLogger;