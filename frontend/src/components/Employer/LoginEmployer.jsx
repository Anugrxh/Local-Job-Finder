import React, { useState } from 'react';
import './LoginEmployer.css';
import { useNavigate } from 'react-router-dom';

function LoginEmployer() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setErrorMessage("All fields are required.");
    } else {
      setErrorMessage(""); // Clear any existing error message
      alert("Login successful!");
      navigate("/EmployerHomePage"); // Redirect to the employer homepage
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
          <button id="submit21">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginEmployer;
