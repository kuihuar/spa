/*
 * app.js - Simple connect server
*/

/*jslint         node    : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global */

/*var 
connectHello, server
http = require('http'),
connect = require('connect'),
app = connect(),
bodyText = 'Hello Connect!';
connectHello = function(request, response, next){
	response.setHeader('content-length', bodyText.length);
	response.end(bodyText);
}
app
.use(connect.logger())
.use(connectHello);
server = http.createServer(app);
server.listen(3000);
console.log('listening on port %d', server.address().port);
*/

//----------BEGIN MODULE SCOPE VARIABLES----------
'use strict';
var http = require('http'),
express = require('express'),
routes = require('./lib/routes'),
app = express(),
server = http.createServer(app);
//----------BEGIN SERVER CONFIGRAGION------------
app.configure(function(){
	//app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	//app.use(express.basicAuth('user', 'spa'));
	app.use(express.static(__dirname + '/public' ));
	app.use(app.router);
});
app.configure('development', function(){
	app.use(express.logger());
	app.use( express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}) );
});
app.configure('production', function(){
	app.use(express.errorHandler());
});
routes.configRoutes(app, server);
//--------------END SERVER CONFIGRAGION-----------

//-------------BEGIN START SERVER-------------------
server.listen(3000);
/*console.log(
	'Express server listening on port %d in %s mode',
	server.address().port, app.settings.env
);*/
//---------------END START SERVER-------------------
