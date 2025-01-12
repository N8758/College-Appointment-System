const express = require('express');
const app = require('./app');  // Assuming 'app.js' is where routes are defined
const { connectDB } = require('./config/db');

const PORT = process.env.PORT || 5000;

connectDB();  // Connect to MongoDB

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
