const mongoose = require('mongoose');

const logEntrySchema = mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  purpose: {
    type: String,
    default: 'Aufsperrung',
    enum: ['Aufsperrung', 'Montage', 'Besichtigung', 'Behoerdenfahrt'],
  },
  note: String,
  kennzeichen: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
  },
  // "kilometer_gefahren" : "25",
  fahrt_beginn: {
    uhrzeit: {
      type: Date,
      default: Date.now,
    },
    kilometerstand: Number,
  },
  fahrt_ende: {
    uhrzeit: {
      type: Date,
      default: Date.now,
    },
    kilometerstand: Number,
  },
  addresses: [
    {
      street: String,
      city: String,
      state: String,
      zip: Number,
    },
  ],
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
