/**
 * Author: cschmitt
 * Copyright: E2E Technologies Ltd
 */
"use strict";

var path = require('path');
var fs = require('fs-extra');

var getDate = function(date){
    return ('0000'+date.getFullYear()).slice(-4) + '-' +
        ('00'+(date.getMonth()+1)).slice(-2) + '-' +
        ('00'+date.getDate()).slice(-2);
};

var getTime = function(date){
    return ('00'+date.getHours()).slice(-2) + ':' +
        ('00'+date.getMinutes()).slice(-2) + ':' +
        ('00'+date.getSeconds()).slice(-2);
};

var getTimezone = function(date){
    var timezoneOffset = date.getTimezoneOffset();
    var hours = Math.floor(Math.abs(timezoneOffset) / 60);
    var min = Math.abs(timezoneOffset) - hours * 60;

    return ((timezoneOffset > 0) ? '-' : '+') +
        ('00'+hours).slice(-2) +
        ('00'+min).slice(-2);

};

var getFilename = exports.getFilename = function(){
    var date = new Date();
    return 'transaction_' + getDate(date) + '.log';
};

exports.defaultPath = process.env.e2e__logPath || './logs';

/**
 * write the transaction log entry
 * @param {String} logPath
 * @param {Object} entry
 *   @param {Date} entry.datetime
 *   @param {String} entry.trxId
 *   @param {Number} entry.requestId
 *   @param {String} entry.name
 *   @param {Number} entry.elapsedTime
 *   @param {String|Boolean} entry.state
 *   @param {String} entry.domain
 *   @param {String} entry.logType
 *   @param {String=} entry.param1
 *   @param {String=} entry.param2
 * @param {Function=} callback
 */
exports.logEntry = function(logPath, entry, callback){
    var filename = getFilename();
    var fullName = path.resolve(logPath || exports.defaultPath, filename);
    var data = getDate(entry.datetime) + '\t' +
            getTime(entry.datetime) + '\t' +
            getTimezone(entry.datetime) + '\t' +
            entry.trxId.replace(/\t/g,' ') + '\t' +
            entry.requestId.toString().replace(/\t/g,' ') + '\t' +
            entry.name.replace(/\t/g,' ') + '\t' +
            entry.elapsedTime.toString().replace(/\t/g,' ') + '\t' +
            ((entry.state === 'OK' || entry.state === true) ? 'OK' : 'ERROR') + '\t' +
            entry.domain.replace(/\t/g,' ') + '\t' +
            entry.logType.replace(/\t/g,' ') + '\t' +
            (entry.param1 || '').replace(/\t/g,' ') + '\t' +
            (entry.param2 || '').replace(/\t/g,' ');

    data = data.replace(/\n/g,' ') + '\n';

    if(typeof callback !== 'function'){
        callback = function(){};
    }

    fs.createFileSync(fullName);
    fs.appendFileSync(fullName, data);
    callback();
};
