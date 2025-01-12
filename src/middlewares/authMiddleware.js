const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Authentication token missing' });
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key'); // Replace with your actual secret key
    req.user = decoded;  // Attach user info to the request
    next();
  } catch (error) {
    return res.status(400).json({ error: 'Invalid token' });
  }
};

module.exports = { authenticate };
