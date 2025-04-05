const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  minSalary: {
    type: Number,
    required: true,
  },
  maxSalary: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
    enum: ['pg', 'ug', 'diploma', 'plustwo', 'sslc'],
  },
  age: {
    type: Number,
    required: true,
  },
  vacancies: {
    type: Number,
    required: true,
  },
  shift: {
    type: String,
    required: true,
    enum: ['day', 'night', 'any'],
  },
  company: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  employer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employer', // Assuming you have an Employer model
    required: true,
  },
  interested: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
}, {
  timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
