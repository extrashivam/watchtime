const jwt = require('jsonwebtoken');
const config = require('../config');

// Hardcoded admin credentials for demonstration purposes
const hardcodedAdmin = {
  username: 'admin',
  password: '$2b$10$1H9tJ6Xg7G/Vd4.8VNmRBeqfOhz4PYvXU7gG5TpyNocuFPOC9HwLO', 
};

const adminController = {
  login: (req, res) => {
    try {
      const { username, password } = req.body;

      // Check if the provided credentials match the hardcoded admin credentials
      if (username === hardcodedAdmin.username && password === hardcodedAdmin.password) {
        // Generate and return a JWT token
        const token = jwt.sign({ username: hardcodedAdmin.username }, config.jwtSecret, {
          expiresIn: '1h', // Token expires in 1 hour
        });

        return res.status(200).json({token: token, expiresIn:'1h' });
      } else {
        return res.status(401).json({ message: 'Invalid username or password.' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  },
};

module.exports = adminController;
