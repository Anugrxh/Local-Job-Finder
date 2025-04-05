import React, { useState } from 'react';
import './LoginEmployee.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginEmployee() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/employees/login", {
        email,
        password
      });

      if (response.data.message === "Login successful") {
        localStorage.setItem("employeeToken", response.data.token); // Store JWT token
        localStorage.setItem("employeeData", JSON.stringify(response.data.employee)); // Optional: store basic user info
        alert("Login successful!");
        setErrorMessage("");
        navigate('/EmployeeHomePage');
      } else {
        setErrorMessage(response.data);
      }
    } catch (error) {
      setErrorMessage("Server error: " + error.response.data);
    }
  };

  return (
    <div id="maincontainer">
      <div id='innercontainer'>
        <h1 id="loginHere">Login Here...</h1>
        <form id="jobForm1" onSubmit={handleSubmit}>
          <label htmlFor="email" id="name2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password" id="phone2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Enter password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errorMessage && <p style={{ color: "blue", margin: 0 }}>{errorMessage}</p>}
          <button id="submit2" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginEmployee;
