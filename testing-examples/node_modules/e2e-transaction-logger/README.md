[![E2E logo](docs/e2ebridge-logo.png)](http://e2ebridge.com)


# E2E transaction logger #


Having structured logs of running services is always important in productions. E2E transaction log files contain all the information about interactions on your server. That information is divided into transactions which represent the client calls (http) and io calls which represent the back end access made by your server (DB, file system ...).

On another level you can also trace business processes using the same library and the same files. That allows to relate the business data level with the service level.

These files can then be parsed and loaded into DB to be used in Dashboards showing very informative system, operating and business views and reports of your services.


## Quick Example

	var http = require('http');
	var transactionLogger = require('e2e-transaction-logger');

	// create an http server
	http.createServer(function (req, res) {
	
	    // start the transaction when a request arrives
	    var trx = transactionLogger.startTransaction('Hello World');
	
	    res.writeHead(200, {'Content-Type': 'text/plain'});
	    res.end('Hello World\n');
	
	    // end the transaction when the response is sent
	    trx.end('OK');
	
	}).listen(3000, '127.0.0.1');
	


## Installing

    npm install e2e-transaction-logger

## Documentation

### TransactionLogger

A transaction logger allows to start transactions.

#### TransactionLogger.constructor(logPath)

You can create your own transaction logger using the constructor.

__Arguments__

* logPath - The path where the log files will be written.

__Example__

	var TransactionLogger = require('e2e-transaction-logger').TransactionLogger;

	var myTransactionLogger = new TransactionLogger('my/custom/log/path');

---

#### TransactionLogger.startTransaction(name)

Trace the start of a transaction and return a Transaction object.

__Arguments__

* name - The name of the transaction

__Example__

	var trx = transactionLogger.startTransaction('MyTransaction');

---

### processLogger

An object of type ProcessLogger.

### ProcessLogger

A process logger allows to trace processes.

__Example__

	transactionLogger.processLogger.processStart('ProcessName', 'processId', 'StartEventName');

---

#### ProcessLogger.constructor(logPath)

You can create your own process logger using the constructor.

__Arguments__

* logPath - The path where the log files will be written.

__Example__

	var myProcessLogger = new transactionLogger.ProcessLogger('my/custom/log/path');

---

#### ProcessLogger.processStart(processName, processId, eventName)

Trace the start of a process.

__Arguments__

* processName - The name of the process
* processId - The process id.
* eventName - The start event name.

__Example__

	processLogger.processStart('ProcessName', 'processId', 'StartEventName');

---

#### ProcessLogger.processEnd(processName, processId, eventName)

Trace the end of a process.

__Arguments__

* processName - The name of the process
* processId - The process id.
* eventName - The end event name.

__Example__

	processLogger.processEnd('ProcessName', 'processId', 'EndEventName');

---

#### ProcessLogger.processStateStart(processName, processId, stateName)

Trace the start of a state.

__Arguments__

* processName - The name of the process
* processId - The process id.
* stateName - The state name.

__Example__

	processLogger.processStateStart('ProcessName', 'processId', 'StateName');

---

#### ProcessLogger.processStateEnd(processName, processId, stateName)

Trace the end of a state.

__Arguments__

* processName - The name of the process
* processId - The process id.
* stateName - The state name.

__Example__

	processLogger.processStateEnd('ProcessName', 'processId', 'StateName');

---

#### ProcessLogger.processChoice(processName, processId, gateway, choice)

Trace a choice.

__Arguments__

* processName - The name of the process
* processId - The process id.
* gateway - The gateway name.
* choice - The choice name.

__Example__

	processLogger.processChoice('ProcessName', 'processId', 'Gateway', 'Choice');

---

#### ProcessLogger.processEvent(processName, processId, eventName)

Trace an event.

__Arguments__

* processName - The name of the process
* processId - The process id.
* eventName - The event name.

__Example__

	processLogger.processEvent('ProcessName', 'processId', 'EventName');

---

#### ProcessLogger.processValueString(processName, processId,  key, value)

Trace a value of a String type.

__Arguments__

* processName - The name of the process
* processId - The process id.
* key - The key.
* value - The value.

__Example__

	processLogger.processValueString('ProcessName', 'processId', 'Key', 'MyValue');

---

#### ProcessLogger.processValueFloat(processName, processId,  key, value)

Trace a value of a Float type.

__Arguments__

* processName - The name of the process
* processId - The process id.
* key - The key.
* value - The value.

__Example__

	processLogger.processValueFloat('ProcessName', 'processId', 'Key', 123.456);

---

#### ProcessLogger.processValueDateTime(processName, processId,  key, value)

Trace a value of a Date type.

__Arguments__

* processName - The name of the process
* processId - The process id.
* key - The key.
* value - The value.

__Example__

	processLogger.processValueDateTime('ProcessName', 'processId', 'Key', new Date());

---

### Transaction

A Transaction object is returned by the startTransaction method of a TransactionLogger. It is then used to trace what happens inside the transaction using startIO or any ProcessLogger method. Using transactions to trace processes instead of a ProcessLogger directly allows you to correlate the process steps and ios of these transactions.

#### Transaction.end(state)

Trace the end of a transaction

__Arguments__

* state - The state of the transaction. It can be true or 'OK' for a success, false or 'ERROR' for a failed. Default: 'OK'

__Example__

	var trx = transactionLogger.startTransaction('MyTransaction');
	
	// do some things

	trx.end();

---

#### Transaction.startIO(name, domain, system)

Trace the start of an IO call and return an IO object.

__Arguments__

* name - the name of the IO call
* domain - the domain of the IO call
* system - the system of the IO call

__Example__

	var io = trx.startIO('SELECT Users','SQL','oracle/XE');

---

### IO

An IO object is returned by the startIO method of a Transaction. It is then used to trace the end of the io call.

#### IO.end(state)

Trace the end of an io call

__Arguments__

* state - The state of the io. It can be true or 'OK' for a success, false or 'ERROR' for a failed. Default: 'OK'

__Example__

	var io = trx.startIO('Read','FILE','HelloWorld.txt');

    fs.readFile(__dirname + '/resource/HelloWorld.html',function(err, data){
        io.end();
    });

---

### transactionLoggerMiddleware(options)

A function that returns a middleware which can be used with express. It will automatically start a transaction when a request arrives and end it when the response is sent. The Transaction object will be available in the request object as trx.

__Arguments__

* options - object
	* logPath - The path where the log files will be written.
	* name - The name that should be given to the transactions. Can be a function taking the request and result as parameter and returning the name. If it is a string some special replacement variables can be used: {METHOD}, {URL}, {URL_PATH}, {URL_PATHNAME}, {URL_QUERY}, {URL_ORIGINAL_PART}, {ORIGINAL_URL}. By default the name will be the method and the url of the request ('{METHOD} {URL}').


__Example__

	
	var express = require('express');
	var fs = require('fs');
	var transactionLoggerMiddleware = require('e2e-transaction-logger').transactionLoggerMiddleware;

	var app = express();

	app.use(transactionLoggerMiddleware());

	app.get('/hello.html', function(req, res){
	    var io = req.trx.startIO('Read','FILE','HelloWorld.html');
	
	    fs.readFile(__dirname + '/resource/HelloWorld.html',function(err, data){
	        if(err){
	            io.end('ERROR');	
	            res.send(503, err);	// the status code define if the transaction failed or succeed. >= 400 it failed
	            return;
	        }
	
	        io.end();
	        res.set('Content-Type', 'text/html');
	        res.send(data);
	    });
	});

---
