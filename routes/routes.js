// routes/index.js
const express = require('express');
const router = express.Router();
const ticketRoutes = require('./ticketRoutes');
const adminRoutes = require('./adminRoutes');

router.use('/tickets', ticketRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
