// authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config');

const authenticateAdmin = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.admin = decoded;
    next();
  } catch (ex) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = authenticateAdmin;
