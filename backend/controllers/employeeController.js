const Employee = require('../models/Employee');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken')

const registerEmployee = async (req, res) => {
  try {
    const { fullname, email, phone, age, gender, qualification, password } = req.body;

    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployee = new Employee({
      fullname,
      email,
      phone,
      age,
      gender,
      qualification,
      password: hashedPassword,
    });

    await newEmployee.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const loginEmployee = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const employee = await Employee.findOne({ email });
      if (!employee) {
        return res.status(404).send("Employee not found");
      }
  
      const isMatch = await bcrypt.compare(password, employee.password);
      if (!isMatch) {
        return res.status(401).send("Invalid password");
      }

      const token = jwt.sign({ id: employee._id }, "your_jwt_secret", { expiresIn: "3d" });

      res.status(200).json({
        message: "Login successful",
        token,
        employee: {
          id: employee._id,
          name: employee.fullname,
          email: employee.email
        }
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  };

module.exports = { registerEmployee, loginEmployee };
