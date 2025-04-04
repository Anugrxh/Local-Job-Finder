import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShopDetails.css";

function ShopDetails() {
  const [formData, setFormData] = useState({
    sname: "",
    address: "",
    location: "",
    phone: "",
    wphone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const { sname, address, phone, location, wphone } = formData;

    if (!sname || !address || !phone || !location || !wphone) {
      setErrorMessage("All fields are required.");
    } else if (isNaN(phone) || isNaN(wphone)) {
      alert("Phone number must be a number.");
    } else if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
    } else if (!/^\d{10}$/.test(wphone)) {
      alert("Phone number must be exactly 10 digits.");
    } else {
      setErrorMessage(""); // Clear any existing error message
      navigate("/ShopDetails/EmployerHomePage");
    }
  };
  return (
    <div className="body3">
      <div id="container5" style={{ textAlign: "left" }}>
        <h1 className="heading5">QUICK HIRE</h1>
        <label className="label3">About the Shop</label>
        <form id="jobForm3" onSubmit={handleSubmit}>
          <br></br>
          <label htmlFor="name1" className="label4">
            Company Name*
          </label>
          <input
            type="text"
            id="sname"
            name="sname"
            placeholder="Enter shop name"
            value={formData.sname}
            onChange={handleChange}
            required
          />
          <br></br>
          <label className="label4">Address*</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <br></br>
          <label className="label4">Job Location*</label>
          <input
            type="text"
            id="location"
            placeholder="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <br></br>
          <label className="label3">Contact Details</label>
          <br></br>
          <label className="label4">Phone Number*</label>
          <input
            type="tel"
            id="phone1"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <br></br>
          <label className="label4">WhatsApp Number*</label>
          <input
            type="tel"
            id="wphone"
            name="wphone"
            placeholder="Enter WhatsApp number"
            value={formData.wphone}
            onChange={handleChange}
            required
          />
          <br></br>
          <button className="buttonSubmit2">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ShopDetails;
