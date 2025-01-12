const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointmentRoutes');
const authRoutes = require('./routes/authRoutes');
const { authenticate } = require('./middlewares/authMiddleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);  // Auth routes for user login, signup
app.use('/api', authenticate, appointmentRoutes);  // Appointment routes with authentication

module.exports = app;
