/**
 * Author: cschmitt
 * Copyright: E2E Technologies Ltd
 */
"use strict";

var TransactionLogger = require('./transactionLogger').TransactionLogger;

/**
 *
 * @param {Object=} options
 *  @param {String} options.logPath
 *  @param {String|Function} options.name
 *  @param {String|Function} options.domain
 *  @param {String|Function} options.type
 *  @param {String|Function} options.trxId
 * @returns {Function}
 */
exports.transactionLogger = function(options){
    options = options || {};
    var trxLogger = new TransactionLogger(options.logPath);
    var name = function(req){
        return req.method + ' ' + req.url;
    };
    var trxId = function(){
        return null;
    };
    var domain = function(){
        return 'INTERFACE';
    };
    var type = function(){
        return 'SERVICE';
    };

    if(options.name){
        if(typeof options.name === 'function'){
            name = options.name;
        }else{
            name = function(req){
                var urlOriginalPart = req.originalUrl.substr(0, req.originalUrl.length - req._parsedUrl.path.length);

                return options.name
                    .replace(/\{METHOD\}/g, req.method )
                    .replace(/\{URL\}/g, req.url )
                    .replace(/\{URL_PATH\}/g, req._parsedUrl.path )
                    .replace(/\{URL_PATHNAME\}/g, req._parsedUrl.pathname )
                    .replace(/\{URL_QUERY\}/g, req._parsedUrl.query )
                    .replace(/\{URL_ORIGINAL_PART\}/g, urlOriginalPart )
                    .replace(/\{ORIGINAL_URL\}/g, req.originalUrl );
            };
        }
    }

    if(options.trxId){
        if(typeof options.trxId === 'function'){
            trxId = options.trxId;
        }else{
            trxId = function(){
                return options.trxId;
            };
        }
    }

    if(options.domain){
        if(typeof options.domain === 'function'){
            domain = options.domain;
        }else{
            domain = function(){
                return options.domain;
            };
        }
    }

    if(options.type){
        if(typeof options.type === 'function'){
            type = options.type;
        }else{
            type = function(){
                return options.type;
            };
        }
    }

    return function(req, res, next){
        var trx;
        var end = res.end;

        if(!req.trx){
            trx = req.trx = trxLogger.startTransaction(name.call(this, req, res),domain.call(this, req, res),type.call(this, req, res),trxId.call(this, req, res));
            res.end = function(){
                end.apply(this,arguments);

                if(res.statusCode >= 400){
                    trx.end('ERROR');
                }else{
                    trx.end('OK');
                }
            };
        }

        next();
    };
};