const Employer = require('../models/Employer');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv');
const Job = require('../models/Job');
const nodemailer = require('nodemailer')
// const twilio = require('twilio');


dotenv.config()

// const client = new twilio(accountSid, authToken);

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Outlook, or custom SMTP
  auth: {
    user: process.env.EMAIL, // Replace with your email
    pass: process.env.EMAIL_PASSWORD, // Replace with your email password or app password
  },
});

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

const contactEmployee = async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    // Populate the interested employees
    const job = await Job.findById(jobId).populate("interested", "fullname email phone");

    if (!job) return res.status(404).json({ message: "Job not found" });

    // Find the specific employee from the interested list
    const employee = job.interested.find(emp => emp._id.toString() === userId);

    if (!employee) {
      return res.status(400).json({ message: "Employee is not interested in this job" });
    }

    const mailOptions = {
      from: "your_email@gmail.com",
      to: employee.email,
      subject: "Application Shortlisted",
      html: `
        <p>Hi ${employee.fullname},</p>
        <p>Your application for ${job.title} at ${job.company} has been shortlisted.</p><br/>
        <p>For further movements please contact the following</p>
        <p>Call: ${job.phone} <br/> Whatsapp: ${job.whatsapp} </p>
      `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).json({ error: "Failed to send email!" });
      } else {
        console.log("Email sent:", info.response);
        return res.json({
          message: "Contact email sent successfully!",
        });
      }
    });

     // Removed SMS logic and the console.log("SMS sent:", sms.sid); because sms logic is commented out.

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};


module.exports = { registerEmployer, loginEmployer, contactEmployee };
