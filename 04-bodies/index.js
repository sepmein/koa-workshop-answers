var fs = require('fs');
var koa = require('koa');

var app = module.exports = koa();

//Bonus require 01-co stat function to get Content-Length

var stat = require('../01-co/index').stat;


/**
 * Create the `GET /stream` route that streams this file.
 * In node.js, the current file is available as a variable `__filename`.
 */

app.use(function * (next) {
	if (this.request.path !== '/stream') return yield * next;

	this.response.type = 'application/javascript';
	this.response.body = fs.createReadStream(__filename);
	this.response.length = (yield stat(__filename)).size;
});

/**
 * Create the `GET /json` route that sends `{message:'hello world'}`.
 */

app.use(function * (next) {
	if (this.request.path !== '/json') return yield * next;

	this.response.body = {
		message: 'hello world'
	};
});
