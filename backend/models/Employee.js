const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, unique: true, required: true },
  phone: String,
  age: Number,
  gender: String,
  qualification: String,
  password: String, // hashed
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', employeeSchema);
