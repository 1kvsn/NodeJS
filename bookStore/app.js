var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var authController = require('./controllers/authController');
var passport = require('passport');

var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books');
var formRouter = require('./routes/form');
var authorRouter = require('./routes/author');
var userRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var apiRouter = require('./routes/api/api');

var app = express();
// Importing the model. After creating a model, app.js needs to be aware of it.

require('./module/passport');
require('./models/Book');
require('./models/Author');
require('./models/User');

// Importing Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true }, (err) => {
  (err) ? console.log(err) : console.log('mongoose connected');
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'dkjhgdfkjghdfhgdfkhghf',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

// Passport authentication middleware. Comes after session middleware.
app.use(passport.initialize());
app.use(passport.session());



app.use(express.static(path.join(__dirname, 'public')));

app.use(authController.sessions);
app.use(authController.authorSessions);


//The below are not rendering the ejs files. They are merely specifying the routes at which we want to handle stuff.
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/books', booksRouter);
app.use('/form', formRouter);
app.use('/authors', authorRouter);
app.use('/users', userRouter);
// app.use('/cart', cartRouter);
app.use('/api/v1', apiRouter);

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
