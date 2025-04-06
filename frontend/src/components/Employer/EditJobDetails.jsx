import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './JobAdd.css';

function Edit() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    minSalary: '',
    maxSalary: '',
    qualification: '',
    age: '',
    vacancies: '',
    shift: '',
    company: '',
    address: '',
    location: '',
    phone: '',
    whatsapp: '',
    jobDescription: '',
  });

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/jobs/${jobId}`);
        if (!response.ok) throw new Error("Failed to fetch job data");
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };
    fetchJobData();
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      title,
      minSalary,
      maxSalary,
      qualification,
      age,
      vacancies,
      shift,
      company,
      address,
      location,
      phone,
      whatsapp,
      jobDescription,
    } = formData;

    if (
      !title || !minSalary || !maxSalary || !qualification || !age ||
      !vacancies || !shift || !company || !address || !location ||
      !phone || !whatsapp || !jobDescription
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (parseInt(age) < 18) {
      alert("You must be at least 18 years old to proceed!");
      return;
    }

    if (isNaN(minSalary) || isNaN(maxSalary)) {
      alert("Salary must be a number.");
      return;
    }

    if (isNaN(vacancies)) {
      alert("Number of vacancies must be a number.");
      return;
    }

    setErrorMessage("");

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.id;

      const response = await fetch(`http://localhost:5000/api/jobs/${jobId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, userId }),
      });

      if (response.ok) {
        alert("Job updated successfully!");
        navigate('/EmployerHomePage');
      } else {
        alert("Failed to update job.");
      }
    } catch (error) {
      console.error("Error updating job:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="job-details-container">
      <div className="job-details-form">
        <h1 className="job-details-heading">Edit Job Details</h1>
        <label className="job-details-label">About the Job</label>
        <form onSubmit={handleSubmit} className="job-details-form-content">

          <label htmlFor="title" className="job-details-input-label">Select Job Role*</label>
          <select name="title" className="job-details-input" value={formData.title || ''} onChange={handleChange} required>
            <option value="">Select Role</option>
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
          </select>

          <label className="job-details-input-label">Job Description*</label>
          <input type='text' placeholder='About the job' name="jobDescription" value={formData.jobDescription} onChange={handleChange} className="job-details-input" required />

          <label className="job-details-input-label">Monthly Income</label>
          <div className="salary-input-group">
            <input type="text" name="minSalary" placeholder='Min Salary' value={formData.minSalary} onChange={handleChange} className="job-details-input salary-input" required />
            <input type="text" name="maxSalary" placeholder='Max Salary' value={formData.maxSalary} onChange={handleChange} className="job-details-input salary-input" required />
          </div>

          <label htmlFor='qualification' className="job-details-input-label">Required Qualification*</label>
          <select name="qualification" className="job-details-input" value={formData.qualification || ''} onChange={handleChange} required>
            <option value="">Select Qualification</option>
            <option value='pg'>Post Graduate</option>
            <option value='ug'>Under Graduate</option>
            <option value='diploma'>Diploma</option>
            <option value='plustwo'>Higher Secondary</option>
            <option value='sslc'>High School</option>
          </select>

          <label className="job-details-input-label">Job Shift*</label>
          <select name="shift" className="job-details-input" value={formData.shift || ''} onChange={handleChange} required>
            <option value="">Select Shift</option>
            <option value='day'>Day Shift</option>
            <option value='night'>Night Shift</option>
            <option value='any'>Any Shift</option>
          </select>

          <label className="job-details-input-label">Minimum Age Required*</label>
          <input type='text' placeholder='Enter min age' name='age' className="job-details-input" value={formData.age} onChange={handleChange} required />

          <label className="job-details-input-label">Number of Vacancies*</label>
          <input type='text' placeholder='vacancies' name='vacancies' className="job-details-input" value={formData.vacancies} onChange={handleChange} required />

          <label className="job-details-label">About the Shop</label>

          <label htmlFor="company" className="job-details-input-label">Company Name*</label>
          <input type="text" name="company" placeholder="Enter shop name" className="job-details-input" value={formData.company} onChange={handleChange} required />

          <label className="job-details-input-label">Address*</label>
          <input type="text" name="address" placeholder="address" className="job-details-input" value={formData.address} onChange={handleChange} required />

          <label className="job-details-input-label">Job Location*</label>
          <input type="text" name="location" placeholder="location" className="job-details-input" value={formData.location} onChange={handleChange} required />

          <label className="job-details-label">Contact Details</label>

          <label className="job-details-input-label">Phone Number*</label>
          <input type="tel" name="phone" placeholder="Enter phone number" className="job-details-input" value={formData.phone} onChange={handleChange} required />

          <label className="job-details-input-label">WhatsApp Number*</label>
          <input type="tel" name="whatsapp" placeholder="Enter WhatsApp number" className="job-details-input" value={formData.whatsapp} onChange={handleChange} required />

          <button type="submit" className="job-details-submit-button">Update</button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Edit;
