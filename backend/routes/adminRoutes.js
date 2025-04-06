const express = require('express');
const { adminLogin, getAdminOverview, getAllEmployees, deleteEmployee, getAllEmployers, deleteEmployer } = require('../controllers/adminController');
const router = express.Router();

router.post('/login', adminLogin)
router.get('/overview', getAdminOverview)
router.get("/employees", getAllEmployees);
router.delete("/employees/:id", deleteEmployee);
router.get("/employers", getAllEmployers);
router.delete("/employers/:id", deleteEmployer);


module.exports = router;