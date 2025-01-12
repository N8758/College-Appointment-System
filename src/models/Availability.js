const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  slots: [String],  // Available time slots
});

module.exports = mongoose.model('Availability', availabilitySchema);
