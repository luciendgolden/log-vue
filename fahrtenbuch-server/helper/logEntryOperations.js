const LogEntry = require('../model/logEntry');

module.exports.findAll = callback => LogEntry.find({}).sort({ created: 'desc' }).exec((error, logEntries) => {
  if (error) return callback({ error });
  return callback({ logEntries });
});
