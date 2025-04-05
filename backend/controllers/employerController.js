const Employer = require('../models/Employer');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const registerEmployer = async (req, res) => {
  try {
    const { name, email, phone, age, gender, password } = req.body;

    const existingEmployer = await Employer.findOne({ email });
    if (existingEmployer) {
      return res.status(400).send('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployer = new Employer({
      name,
      email,
      phone,
      age,
      gender,
      password: hashedPassword
    });

    await newEmployer.save();
    res.status(201).send('Employer registered successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

const loginEmployer = async (req, res) => {
  try {
    const { email, password } = req.body;

    const employer = await Employer.findOne({ email });
    if (!employer) {
      return res.status(401).send('Invalid email');
    }

    const isMatch = await bcrypt.compare(password, employer.password);
    if (!isMatch) {
      return res.status(401).send('Invalid password');
    }

    const token = jwt.sign({ id: employer._id }, "your_jwt_secret", { expiresIn: "3d" });

    res.status(200).json({
      message: "Login successful",
      token,
      employer: {
        id: employer._id,
        name: employer.name,
        email: employer.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

module.exports = { registerEmployer, loginEmployer };
