
const express = require('express');
const router = express.Router();
const adminCon = require('../controllers/admincontroller');

router.post('/login', adminCon.login);
module.exports = router;