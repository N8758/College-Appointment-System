const express = require('express');
const {
  setAvailability,
  getAvailability,
  bookAppointment,
  cancelAppointment,
  getAppointments,
} = require('../controllers/appointmentController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to set professor availability
router.post('/availability', authenticate, setAvailability);

// Route to get professor availability
router.get('/availability/:professorId', authenticate, getAvailability);

// Route to book an appointment
router.post('/book', authenticate, bookAppointment);

// Route to cancel an appointment
router.delete('/cancel/:appointmentId', authenticate, cancelAppointment);

// Route to get all appointments for the logged-in user
router.get('/appointments', authenticate, getAppointments);

module.exports = router;
