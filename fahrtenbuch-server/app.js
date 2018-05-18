const express = require('express');
// Create HTTP errors for Express, Koa, Connect, etc. with ease.
const createError = require('http-errors');
/**
 * Parse incoming request bodies in a middleware before your handlers
 * available under the req.body property.
 */
const bodyParser = require('body-parser');
/**
 * Backend has to be able to interact with the frontend
 * enables to build an API that can be reached from any
 * browser in the world and not only through the JavaScript files
 *
 * Cross-origin resource sharing (CORS) allows AJAX requests to skip the
 * Same-origin policy and access resources from remote hosts.
 */
const cors = require('cors');
// HTTP request logger middleware for node.js
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/vehicles', (req, res) => {
  res.send([{
    id: 1,
    title: 'Hello World!',
    description: 'fahrtenbuch-server',
  }]);
});

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

app.listen(process.env.PORT || 8081);

module.exports = app;
