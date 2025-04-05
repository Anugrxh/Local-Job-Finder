const express = require('express');
const router = express.Router();
const { registerEmployer, loginEmployer, contactEmployee } = require('../controllers/employerController');

router.post('/register', registerEmployer);
router.post('/login', loginEmployer);
router.post('/contact-employee', contactEmployee)

module.exports = router;
