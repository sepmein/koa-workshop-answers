var koa = require('koa');

var app = module.exports = koa();

app.use(function * () {
	if (this.request.is('application/json')) {
		
		//response type is implicitly setted by koa
		this.body = {
			message: 'hi!'
		};
	} else {
		this.response.type = 'text/plain';
		this.body = 'ok';
	}
})