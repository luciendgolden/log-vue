const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const logger = require('./config/logger');
const routes = require('./routes/router');

const app = express();

mongoose.connect('mongodb://localhost:27017/logbook');
const db = mongoose.connection;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/log-entries', routes);

/*
 * Database Connection
 */
db.on('error', (err) => {
  logger.error(`Error while connecting to DB: ${err.message}`);
});
db.once('open', () => {
  logger.info('DB connected successfully!');
});

/*
 * Error handling
 */
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404, 'Site not found'));
});

// error handler
app.use((err, req, res) => {
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT || 3000, () => {
  logger.info(`Example app listening on port ${process.env.PORT || 3000}`);
});

module.exports = app;
