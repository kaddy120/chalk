const cors = require('cors');
const createError = require('http-errors');
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');
const config = require('./config/passport');

require('./db');

const app = express();

// configure Express
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const sess = {
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl:
      process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017',
    ttl: 14 * 24 * 60 * 60, // = 14 days. Default
  }),
};
if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
  sess.cookie.secure = true;
} else {
  console.log('Not in production');
}
app.use(session(sess));
app.set('view engine', 'ejs');
app.use(methodOverride());

config(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/index'));
app.use('/auth/', require('./routes/auth'));

app.use('/users/', require('./routes/users'));
app.use('/employees/', require('./routes/employees'));

app.delete('/articles/:articleId/comment', (req, res, next) => {
  const { articleId } = req.params;
  const comments = [];
  res.json(comments);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log(req);
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error pag
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
