const LogEntry = require('../model/logEntry');

module.exports = () => new Promise((resolve, reject) => {
  LogEntry.find({}).sort({ created: 'desc' }).exec((error, logEntries) => {
    if (error) return reject(error);
    return resolve({logEntries: logEntries});
  });
});
