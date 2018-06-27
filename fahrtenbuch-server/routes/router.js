const express = require('express');
const Driver = require('../model/driver');
const LogEntry = require('../model/logEntry');
const path = require('path');

const router = express.Router();

router.get('/driver', (req, res) => {
  Driver.find({}).exec((error, drivers) => {
    if (error) return res.send(500, { error });
    return res.json({ drivers });
  });
});

/**
 * Gives one driver by id
 * @type {Driver}
 */
router.get('/driver/:id', (req, res) => {
  Driver.findOne({
    _id: req.params.id,
  }, (error, driver) => {
    if (error) return res.send(500, { error });
    return res.json({ driver });
  });
});

/**
 * creates a driver
 * @type {Driver} contains a first and lastname
 */
router.post('/driver', (req, res) => {
  const driver = new Driver(req.body);
  driver.save((error, result) => {
    if (error) return res.send(500, { error });
    return res.status(201).json(result);
  });
});

/**
 * update one driver entry
 * @type {[Driver]}
 */
router.put('/driver/:id', (req, res) => {
  Driver.findByIdAndUpdate(req.params.id, req.body, (error) => {
    if (error) return res.send(500, { error });
    return res.send({ success: true });
  });
});

/**
 * delete one driver entry
 * @type {[Driver]}
 */
router.delete('/driver/:id', (req, res) => {
  Driver.remove({
    _id: req.params.id,
  }, (error) => {
    if (error) return res.send(500, { error });
    return res.send({ success: true });
  });
});


/**
 * find all log entries
 * @type {[type]}
 */
router.get('/logEntry', (req, res) => {
  LogEntry.find({}).sort({ created: 'desc' }).exec((error, logEntries) => {
    if (error) return res.send(500, { error });
    return res.json({ logEntries });
  });
});

/**
* find one log entry
* @param  {[type]} req [description]
* @param  {[type]} res [description]
* @return {[type]}     [description]
*/
router.get('/logEntry/:id', (req, res) => {
  LogEntry.findOne({
    _id: req.params.id,
  }, (error, logEntry) => {
    if (error) return res.send(500, { error });
    return res.json({ logEntry });
  });
});

/**
 * creates a new logEntry
 * @type {LogEntry}
 */
router.post('/logEntry', (req, res) => {
  const logEntry = new LogEntry(req.body);
  logEntry.save((error, result) => {
    if (error) return res.send(500, { error });
    return res.status(201).json(result);
  });
});

/**
 * update one logEntry
 * @type {[LogEntry]}
 */
router.put('/logEntry/:id', (req, res) => {
  LogEntry.findByIdAndUpdate(req.params.id, req.body, (error) => {
    if (error) return res.send(500, { error });
    return res.send({ success: true });
  });
});

/**
 * delete one Logentry
 * @type {[LogEntry]}
 */
router.delete('/logEntry/:id', (req, res) => {
  LogEntry.remove({
    _id: req.params.id,
  }, (error) => {
    if (error) return res.send(500, { error });
    return res.send({ success: true });
  });
});

/**
 * download pdf file
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
router.get('/pdf', (res, next) => {
  
  const filePath = path.join(__dirname, 'files', 'logbook.pdf');

  res.download(filePath, (err) => {
    if (!err) return; // file sent
    if (err && err.status !== 404) next(err); // non-404 error
    // file for download not found
    res.statusCode = 404;
    res.send('Cant find that file, sorry!');
  });
});

module.exports = router;
