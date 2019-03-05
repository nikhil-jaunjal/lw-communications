const express = require('express');
const router = express.Router();
const lwUser = require('../controllers/lw-userController');
router.get('/tenant/:email', lwUser.getProperty);
router.get('/property/:id', lwUser.getPmProperty);

module.exports = router;    


