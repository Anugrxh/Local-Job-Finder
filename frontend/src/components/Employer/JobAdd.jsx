import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './JobAdd.css';
import axios from 'axios';

function JobDetails() {
  const [formData, setFormData] = useState({
    post: '',
    postOther: '',
    minsal: '',
    maxsal: '',
    qualification: '',
    age: '',
    vacancies: '',
    shift: '',
    sname: '',
    address: '',
    location: '',
    phone: '',
    wphone: '',
    jobDescription: '',
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      post, postOther, minsal, maxsal, qualification, age, vacancies, shift,
      sname, address, location, phone, wphone, jobDescription,
    } = formData;

    if (
      !post || (post === 'Other' && !postOther) || !minsal || !maxsal || !qualification || !age || !vacancies || !shift ||
      !sname || !address || !location || !phone || !wphone || !jobDescription
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (parseInt(age) < 18) {
      alert("You must be at least 18 years old to proceed!");
      return;
    }

    if (isNaN(minsal) || isNaN(maxsal)) {
      alert("Salary must be a number.");
      return;
    }

    if (isNaN(vacancies)) {
      alert("Number of vacancies must be a number.");
      return;
    }

    try {
      setErrorMessage('');

      const employer = JSON.parse(localStorage.getItem('employerData'));
      const employerId = employer?.id;

      const jobData = {
        title: post === 'Other' ? postOther : post,
        minSalary: minsal,
        maxSalary: maxsal,
        qualification,
        age,
        vacancies,
        shift,
        company: sname,
        address,
        location,
        phone,
        whatsapp: wphone,
        jobDescription,
        employer: employerId,
      };

      await axios.post("http://localhost:5000/api/jobs", jobData);

      alert("Job posted successfully!");
      navigate('/EmployerHomePage');
    } catch (error) {
      console.error("Error posting job:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="job-details-container">
      <div className="job-details-form">
        <h1 className="job-details-heading">QUICK HIRE</h1>
        <label className="job-details-label">About the Job</label>
        <form onSubmit={handleSubmit} className="job-details-form-content">

          <label htmlFor="post" className="job-details-input-label">Select Job Role*</label>
          <select name="post" className="job-details-input" value={formData.post} onChange={handleChange} required>
            <option value="">Select Job Role</option>
            <option value='electrician'>Electrician</option>
            <option value='plumber'>Plumber</option>
            <option value='cleaner'>Cleaning Staff</option>
            <option value='receptionist'>Receptionist</option>
            <option value='deliveryboy'>Delivery Partner</option>
            <option value='packing'>Packing Assistant</option>
            <option value='promoter'>Promoter</option>
            <option value='StoreKeeper'>Store Keeper</option>
            <option value='cashier'>Cashier</option>
            <option value='Sales'>Sales Assistant</option>
            <option value='chef'>Chef</option>
            <option value='security'>Security</option>
            <option value='customersupport'>Customer Support</option>
            <option value='floormanager'>Floor Manager</option>
            <option value='social'>Social Media Assistant</option>
            <option value='Other'>Other</option>
          </select>

          {formData.post === 'Other' && (
            <input
              type='text'
              placeholder='Enter job role'
              name='postOther'
              className="job-details-input"
              value={formData.postOther}
              onChange={handleChange}
              required
            />
          )}

          <label className="job-details-input-label">Job Description*</label>
          <input
            type='text'
            placeholder='About the job'
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className="job-details-input"
            required
          />

          <label className="job-details-input-label">Monthly Income</label>
          <div className="salary-input-group">
            <input
              type="text"
              name="minsal"
              placeholder='Min Salary'
              value={formData.minsal}
              onChange={handleChange}
              className="job-details-input salary-input"
              required
            />
            <input
              type="text"
              name="maxsal"
              placeholder='Max Salary'
              value={formData.maxsal}
              onChange={handleChange}
              className="job-details-input salary-input"
              required
            />
          </div>

          <label htmlFor='qualification' className="job-details-input-label">Required Qualification*</label>
          <select name="qualification" className="job-details-input" value={formData.qualification} onChange={handleChange} required>
            <option value="">Select Qualification</option>
            <option value='pg'>Post Graduate</option>
            <option value='ug'>Under Graduate</option>
            <option value='diploma'>Diploma</option>
            <option value='plustwo'>Higher Secondary</option>
            <option value='sslc'>High School</option>
          </select>

          <label className="job-details-input-label">Job Shift*</label>
          <select name="shift" className="job-details-input" value={formData.shift} onChange={handleChange} required>
            <option value="">Select Shift</option>
            <option value='day'>Day Shift</option>
            <option value='night'>Night Shift</option>
            <option value='any'>Any Shift</option>
          </select>

          <label className="job-details-input-label">Minimum Age Required*</label>
          <input
            type='text'
            placeholder='Enter min age'
            name='age'
            className="job-details-input"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <label className="job-details-input-label">Number of Vacancies*</label>
          <input
            type='text'
            placeholder='Vacancies'
            name='vacancies'
            className="job-details-input"
            value={formData.vacancies}
            onChange={handleChange}
            required
          />

          <label className="job-details-label">About the Shop</label>

          <label className="job-details-input-label">Company Name*</label>
          <input
            type="text"
            name="sname"
            placeholder="Enter company name"
            className="job-details-input"
            value={formData.sname}
            onChange={handleChange}
            required
          />

          <label className="job-details-input-label">Address*</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="job-details-input"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label className="job-details-input-label">Job Location*</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="job-details-input"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label className="job-details-label">Contact Details</label>

          <label className="job-details-input-label">Phone Number*</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            className="job-details-input"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label className="job-details-input-label">WhatsApp Number*</label>
          <input
            type="tel"
            name="wphone"
            placeholder="Enter WhatsApp number"
            className="job-details-input"
            value={formData.wphone}
            onChange={handleChange}
            required
          />

          <button type="submit" className="job-details-submit-button">Submit</button>
        </form>
        {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default JobDetails;