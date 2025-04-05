const express = require('express');
const router = express.Router();
const { registerEmployer, loginEmployer } = require('../controllers/employerController');

router.post('/register', registerEmployer);
router.post('/login', loginEmployer);

module.exports = router;
