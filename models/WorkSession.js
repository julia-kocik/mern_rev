const mongoose = require('mongoose');

const worksessionSchema = new mongoose.Schema({
  name: String,
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  duration: { type: Number, required: true },
});

module.exports = mongoose.model('WorkSession', worksessionSchema);

