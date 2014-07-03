var koa = require('koa');
var jade = require('jade');
var path = require('path');

var app = module.exports = koa();

app.use(function * () {
	var filename = path.join(__dirname, 'homepage.jade');
	this.response.body = jade.renderFile(filename, {
		filename: path.join(__dirname, 'layout.jade')
	})
});
