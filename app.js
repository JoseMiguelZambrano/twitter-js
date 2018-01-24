const express = require( 'express' );
const app = express();
const morgan = require('morgan');

app.use(function (req, res, next) {
    console.log(req.url)
    next();
})
app.use('/special/:id', function(req, res, next){
    console.log('haz llegado a un lugar especial');
    next()
})

app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }))










app.listen(3000)