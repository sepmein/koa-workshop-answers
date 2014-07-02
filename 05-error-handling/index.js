
var koa = require('koa');

var app = module.exports = koa();

app.use(function* errorHandler(next) {
  try {
    yield next;
  } catch (err) {
    // your error handling logic goes here
    this.status = 500;
    this.body = 'internal server error';
    app.emit('error', err, this);
  }
});

app.use(function* () {
  throw new Error('boom!');
});
