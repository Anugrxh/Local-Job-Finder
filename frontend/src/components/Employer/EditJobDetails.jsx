import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './EditJobDetails.css';

function Edit() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  
  // State for form data
  const [formData, setFormData] = useState({
    post: "Software Engineer",
    minsal: "1000",
    maxsal: "1300",
    qualification: "high school",
    age: "19",
    vacancies: "13",
    shopName: "Gopikas shop",
    address: "abcdef",
    jobLocation: "kannur",
    phone: "9446439630",
    whatsapp: "9446439630"
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { post, minsal, maxsal, qualification, age, vacancies, shopName, address, jobLocation, phone, whatsapp } = formData;

    if (!post || !minsal || !maxsal || !qualification || !age || !vacancies || !shopName || !address || !jobLocation || !phone || !whatsapp) {
      setErrorMessage("All fields are required.");
    } else if (parseInt(age) < 18) {
      alert("You must be at least 18 years old to proceed!");
    } else if (isNaN(minsal) || isNaN(maxsal) || isNaN(vacancies)) {
      alert("Salary and vacancies must be numbers.");
    } else {
      setErrorMessage("");
      navigate('/EmployerHomePage'); // Redirect to Job Details page after saving
    }
  };

  return (
    <div id="bodyedit">
      <div id="container44">
        <h1 className="heading44">EDIT JOB DETAILS</h1>
        <label className="label34">Edit the Job Details Below</label>
        <form id="jobForm24" onSubmit={handleSubmit}>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <br></br>
          <label className='label24'>Job Role</label>
          <input  id="editinput" type="text" name="post" value={formData.post} onChange={handleChange} />
          <br></br>
          <label className='label24'>Monthly Income</label>
          <input id="editinput" type="text" name="minsal" value={formData.minsal} onChange={handleChange} placeholder="Min Salary" />
          <input id="editinput" type="text" name="maxsal" value={formData.maxsal} onChange={handleChange} placeholder="Max Salary" />
          <br></br>
          <label htmlFor='qualification' className='label24'>Qualification</label>
          <input id="editinput" type="text" name="qualification" value={formData.qualification} onChange={handleChange} />
          <br></br>
          <label className='label24'>Minimum Age</label>
          <input id="editinput" type="number" name="age" value={formData.age} onChange={handleChange} />
          <br></br>
          <label className='label24'>Vacancies Available</label>
          <input id="editinput" type="text" name="vacancies" value={formData.vacancies} onChange={handleChange} />
          <br></br>
          <label className='label34'>About the Shop</label>
          <br></br>
          <label className='label24'>Shop Name</label>
          <input id="editinput" type="text" name="shopName" value={formData.shopName} onChange={handleChange} />
          <br></br>
          <label className='label24'>Address</label>
          <input id="editinput" type="text" name="address" value={formData.address} onChange={handleChange} />
          <br></br>
          <label className='label24'>Job Location</label>
          <input id="editinput" type="text" name="jobLocation" value={formData.jobLocation} onChange={handleChange} />
          <br></br>
          <label className='label34'>Contact Details</label>
          <br></br>
          <label className='label24'>Phone Number</label>
          <input id="editinput" type="text" name="phone" value={formData.phone} onChange={handleChange} />
          <br></br>
          <label className='label24'>WhatsApp Number</label>
          <input id="editinput" type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
          <br></br>
          <br />
          <button id="savechanges" type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
