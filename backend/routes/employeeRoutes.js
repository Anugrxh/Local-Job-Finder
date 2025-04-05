const express = require('express');
const router = express.Router();
const { registerEmployee, loginEmployee, filterOptions } = require('../controllers/employeeController');

router.post('/register', registerEmployee);
router.post('/login', loginEmployee);
router.get('/filters', filterOptions);


module.exports = router;
