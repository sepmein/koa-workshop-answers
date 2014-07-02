
var koa = require('koa');

var app = module.exports = koa();

app.use(function* (next) {
	if(this.request.path !== '/') return yield next;

	this.body = 'hello world';
});

app.use(function* (next) {
	if(this.request.path !== '/404') return yield next;

	this.body = 'page not found';
});

app.use(function* (next) {
	if(this.request.path !== '/500') return yield next;

	this.body = 'internal server error';
});
