const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timeSlot: String,
  status: { type: String, default: 'scheduled' },  // Could be 'scheduled', 'canceled', etc.
});

module.exports = mongoose.model('Appointment', appointmentSchema);
