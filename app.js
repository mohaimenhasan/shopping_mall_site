require('dotenv').config();
var createError = require('http-errors');
var cors = require('cors');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

// API routers
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var storeRouter = require('./routes/store');
var app = express();

// react routes
app.use(express.static(path.join(__dirname, "client", "build")));
// react root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// MongoDB SetUp:
let dev_url = 'mongodb+srv://admin:admin@testcluster1-wsjqz.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGO_URI || dev_url;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/stores', storeRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
