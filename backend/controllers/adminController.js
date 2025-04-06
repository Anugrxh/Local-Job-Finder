const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const Job = require("../models/Job");
const Employee = require("../models/Employee");
const Employer = require("../models/Employer");

dotenv.config()

const adminLogin = async(req, res) =>{
    const { username, password } = req.body;

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (username === adminUsername && password === adminPassword) {

        const token = jwt.sign({ id: adminUsername }, "your_jwt_secret", { expiresIn: "1d" });

        res.status(200).json({ message: "Login successful" , token});
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
}

// Admin Overview Controller
const getAdminOverview = async (req, res) => {
    try {
      const totalJobs = await Job.countDocuments();
      const totalEmployees = await Employee.countDocuments();
      const totalEmployers = await Employer.countDocuments();
  
      res.status(200).json({
        totalJobs,
        totalEmployees,
        totalEmployers,
      });
    } catch (err) {
      console.error("Error fetching admin overview:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: "Error fetching employees" });
  }
};

// Delete employee
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting employee" });
  }
};

// Get all employers
const getAllEmployers = async (req, res) => {
    try {
      const employers = await Employer.find();
      res.status(200).json(employers);
    } catch (err) {
      res.status(500).json({ message: "Error fetching employers" });
    }
  };
  
  // Delete employer by ID
  const deleteEmployer = async (req, res) => {
    try {
      const { id } = req.params;
      await Employer.findByIdAndDelete(id);
      res.status(200).json({ message: "Employer deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting employer" });
    }
  };

module.exports = { adminLogin, getAdminOverview, getAllEmployees, deleteEmployee, getAllEmployers, deleteEmployer }