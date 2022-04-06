var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const stripe = require("stripe")("sk_test_51KlTVCSEe80oi2Y60SrHbsyYEvSz8E6dwEqA62Li48HlEvfBlT2fCC2Cslm7TIpqo1yfvFYk6qGDR8bbAH0oUaZ900AReO0qh8")
const uuid = require("uuid")
// var authorise = require("./Module/authModule");
var registerRouter = require("./routes/reg");
var mongo=require('./connection')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var matchRouter = require('./routes/matchday');
var chickenbucketRouter =require('./routes/chickenbucket')
var briyanibucketRouter = require('./routes/briyanibucket')
var cors = require('cors')

mongo.connect()
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
  
app.use(cors())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/auth",registerRouter)
app.use('/matchday',matchRouter)
app.use('/chickenbucket',chickenbucketRouter)
app.use('/briyanibucket',briyanibucketRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.get('/', function (req, res) {
  res.send('Api running');
})


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
