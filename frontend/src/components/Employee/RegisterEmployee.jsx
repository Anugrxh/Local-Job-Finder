import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './RegisterEmployee.css';

function RegisterEmployee() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    qualification: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  // Function to validate password
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    return passwordRegex.test(password);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, phone, age, gender, qualification, password } = formData;

    // Field validations
    if (!fullname || !email || !phone || !age || !gender || !qualification || !password) {
      setErrorMessage("All fields are required.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }
    if (parseInt(age) < 18) {
      setErrorMessage("You must be at least 18 years old to proceed!");
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a digit, and a special character.");
      return;
    }

    fetch('http://localhost:5000/api/employees/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'Registration successful') {
          alert(data.message);
          navigate('/LoginEmployee');
        } else {
          setErrorMessage(data.message || 'Something went wrong');
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage('Server error. Try again later.');
      });
  };

  return (
    <div id="body1">
      <div className="container1">
        <h1 className="heading1">QUICK HIRE</h1>
        <form id="jobForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder='Full Name'
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder='Phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            id="age"
            name="age"
            placeholder='Age'
            value={formData.age}
            onChange={handleChange}
            required
            min='18'
          />
          <label htmlFor="gender" className='gender1'>Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="qualification" className='quali1'>Qualification:</label>
          <select id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="highschool">High School</option>
            <option value="higherSec">Higher Secondary</option>
            <option value="graduate">Graduate</option>
            <option value="postgraduate">Post Graduate</option>
          </select>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" id="submit1">Submit</button> 
        </form><br /> <br /><br /> <br />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label className="alreadyLogin" onClick={() => navigate('/LoginEmployee')}>Already registered? Click Here</label>
      </div>
    </div>
  );
}

export default RegisterEmployee;
