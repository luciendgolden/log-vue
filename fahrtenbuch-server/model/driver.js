const mongoose = require('mongoose');

const driverSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
