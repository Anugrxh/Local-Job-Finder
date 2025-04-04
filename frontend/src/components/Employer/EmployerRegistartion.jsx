import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './EmployerRegistration.css';
import axios from 'axios';

function EmployerRegistration(){
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: '',
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, phone, age, gender } = formData;
  
    if (!name || !phone || !age || !gender) {
      setErrorMessage("All fields are required.");
    } else if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
    } else if (parseInt(age) < 18) {
      alert("You must be at least 18 years old to proceed!");
    } else {
      try {
        setErrorMessage(""); // Clear any existing error message
  
        // Send data to the backend
        const response = await axios.post("http://localhost:3001/employer/register", {
          name,
          phone,
          age,
          gender,
        });
  
        if (response.data === "Employer registered successfully") {
          alert("Registration successful!");
          navigate('/EmployerHomePage'); // Redirect to the next page
        } else {
          alert("Registration failed: " + response.data);
        }
      } catch (error) {
        alert("Error: " + error.message);
      }
    }
  };
  
    

  return (
    <div id="body11">
    <div className="container11">
      <h1 className="heading11">QUICK HIRE</h1>
      <form id="jobForm11" onSubmit={handleSubmit}>
        <label htmlFor="name" className='name11'>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone" className='phone11'>Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder='phone'
          value={formData.phone}
          onChange={handleChange}
          required
        />
         <label htmlFor="age" className='age11'>Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          placeholder='age'
          value={formData.age}
          onChange={handleChange}
          required
          min='19'
        />
        <label htmlFor="gender" className='gender11'>Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br></br>
         <button type="submit" id="submit11">Submit</button> 
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <br></br>
      <label className="alreadyLogin1" onClick={() =>navigate('/LoginEmployer')} >Already registered?Click Here</label>
    </div>
    </div>
  );
}

export default EmployerRegistration;