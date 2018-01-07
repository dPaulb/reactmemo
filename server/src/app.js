
// mongodb 설정
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// session 설정
import session from 'express-session';

// routes 설정
import api from './routes';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var app = express();

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
  console.log('connected to mongo db');
});
mongoose.connect('mongodb://127.0.0.1:27017/memo');

app.use(session({
  secret : 'memo',
  resave : false,
  saveUninitialized : true
}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', express.static(__dirname + '/../../build'));
app.use('/api', api);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../../build', 'index.html'));
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
