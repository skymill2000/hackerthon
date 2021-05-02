var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var middleAuth = require('./lib/auth');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let mainRouter = require('./routes/main');
let apiRouter = require('./routes/wooriApi');
let cors = require('cors');
var app = express();
app.set('jwt-secret', "N1u2l3l4a5n6s7w8e9r0K!O@R#N");
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/main', mainRouter);
app.use('/api', apiRouter);

module.exports = app;
