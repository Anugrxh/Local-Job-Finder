import React, { useState } from "react";
import "./AdministratorLogin.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AdministratorLogin() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    if (!username || !password) {
      setErrorMessage("All fields are required.");
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)
    ) {
      alert(
        "Password must be at least 8 characters long and include at least one special character and one number."
      );
    } else {
      setErrorMessage("");
      navigate("/AdministratorHome");
    }
  };

  return (
    <div id="maincontainerad">
      <div id="innercontainerad">
        <h1 id="loginHeread">Login Here...</h1>
        <form id="jobForm1ad" onSubmit={handleSubmit}>
          <label htmlFor="username" id="username2">
            Username:
          </label>
          <input
            type="text"
            id="username3"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="password" id="password1">
            Password:
          </label>
          <input
            type="text"
            id="password2"
            name="password"
            placeholder="password"
            value={formData.password2}
            onChange={handleChange}
            required
          />
          {errorMessage && (
            <p style={{ color: "blue", margin: 0 }}>{errorMessage}</p>
          )}
          <Link to="/AdministratorHome">
            <button id="submit2ad">Submit</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AdministratorLogin;
