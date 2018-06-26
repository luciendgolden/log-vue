const express = require('express');
const Driver = require('../model/driver');
const LogEntry = require('../model/logEntry');

const router = express.Router();

router.get('/drivers', (req, res) => {
  Driver.find({}).exec((error, drivers) => {
    if (error || !drivers) {
      console.error(error);
      res.send(500);
    } else {
      res.json({ drivers });
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
      console.error(error);
      res.send(500);
    } else {
      res.status(201).json(result);
    }
  });
});

/**
 * find all log entries
 * @type {[type]}
 */
router.get('/logEntries', (req, res) => {
  LogEntry.find({}).exec((error, logEntries) => {
    if (error || !logEntries) {
      console.error(error);
      res.send(500);
    } else {
      res.json({ logEntries });
    }
  });
});

/**
* find one log entry
* @param  {[type]} req [description]
* @param  {[type]} res [description]
* @return {[type]}     [description]
*/
router.get('/logEntries/:id', (req, res) => {
  LogEntry.findOne({
    _id: req.params.id,
  }, (error, logEntry) => {
    if (error || !logEntry) {
      console.error(error);
      res.send(500);
    } else {
      res.json({ logEntry });
    }
  });
});

/**
 * creates a new logEntry
 * @type {LogEntry}
 */
router.post('/logEntry', (req, res) => {
  const logEntry = new LogEntry(req.body);
  logEntry.save((error, result) => {
    if (error || !result) {
      console.error(error);
      res.send(500);
    } else {
      res.status(201).json(result);
    }
  });
});

module.exports = router;
