const express = require('express');
const Driver = require('../model/driver');
const LogEntry = require('../model/logEntry');

const router = express.Router();

router.get('/drivers', (req, res) => {
  Driver.find({}).exec((error, drivers) => {
    if (error || !drivers) {
      res.render('error', {});
    } else {
      res.render('drivers', { drivers });
    }
  });
});

/**
 * creates a driver
 * @type {Driver} contains a first and lastname
 */
router.post('/driver', (req, res) => {
  const driver = new Driver(req.body);
  driver.save((error, result) => {
    if (error || !result) {
      res.render('error', {});
    } else {
      res.status(201).json(result);
    }
  });
});

router.get('/', (req, res) => {
  LogEntry.find({}, (error, logEntries) => {
    if (error || !logEntries) {
      res.render('error', {});
    } else {
      res.render('logEntries', { logEntries });
    }
  });
});

/**
* find one log entry
* @param  {[type]} req [description]
* @param  {[type]} res [description]
* @return {[type]}     [description]
*/
router.get('/:id', (req, res) => {
  LogEntry.findOne({
    _id: req.params.id,
  }, (error, logEntry) => {
    if (error || !logEntry) {
      res.render('error', {});
    } else {
      res.render('logEntry', { logEntry });
    }
  });
});

/**
 * creates a new logEntry
 * @type {LogEntry}
 */
router.post('/', (req, res) => {
  const logEntry = new LogEntry(req.body);
  logEntry.save((error, result) => {
    if (error || !result) {
      res.render('error', {});
    } else {
      res.status(201).json(result);
    }
  });
});

module.exports = router;
