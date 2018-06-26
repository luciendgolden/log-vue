const mongoose = require('mongoose');

const driverSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: String,
  last_name: String,
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
