import React, { useState } from 'react';
import './LoginEmployer.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginEmployer() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

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
      const response = await axios.post("http://localhost:5000/api/employer/login", {
        email,
        password
      });

      if (response.data.message === "Login successful") {
        localStorage.setItem("employerToken", response.data.token); // Store JWT token
        localStorage.setItem("employerData", JSON.stringify(response.data.employer));
        alert("Login successful!");
        setErrorMessage("");
        navigate("/EmployerHomePage");
      } else {
        setErrorMessage(response.data || "Invalid credentials.");
      }
    } catch (error) {
      setErrorMessage("Server error: " + error.response.data)
    }
  };

  return (
    <div id="maincontainer12">
      <div id='innercontainer12'>
        <h1 id="loginHere12">Login Here...</h1>
        <form id="jobForm12" onSubmit={handleSubmit}>
          <label htmlFor="email31" id="email21">Email:</label>
          <input
            type="email"
            id="email31"
            name="email"
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password31" id="password21">Password:</label>
          <input
            type="password"
            id="password31"
            name="password"
            placeholder='Enter your password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errorMessage && <p style={{ color: "blue", margin: 0 }}>{errorMessage}</p>}
          <button id="submit21" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginEmployer;
