import React, { useState } from 'react';
import './LoginEmployee.css';
import { Link } from 'react-router-dom';

function LoginEmployee() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { name, phone } = formData;
  
    if (!name || !phone) {
      setErrorMessage("All fields are required.");
      return;
    } else if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }
  
    alert("Login successful!");
    setErrorMessage("");
  };

  return (
    <div id="maincontainer">
      <div id='innercontainer'>
        <h1 id="loginHere">Login Here...</h1>
        <form id="jobForm1" onSubmit={handleSubmit}>
          <label htmlFor="name3" id="name2">Email:</label>
          <input
            type="email"
            id="name3"
            name="name"
            placeholder='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone3" id="phone2">Password:</label>
          <input
            type="text"
            id="phone3"
            name="phone"
            placeholder='phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errorMessage && <p style={{ color: "blue", margin: 0 }}>{errorMessage}</p>}
          <Link to="/EmployeeHomePage">
            <button id="submit2" type="submit">Submit</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginEmployee;
