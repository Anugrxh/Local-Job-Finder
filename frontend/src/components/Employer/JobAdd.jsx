import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './JobAdd.css'

function JobDetails() {

  const [formData,setFormData]=useState({post:'',minsal:'',maxsal:'',qualification:'',age:'',vacancies:'',shift:''})
  const handleChange=(e)=>{const{name,value}=e.target;
  setFormData({...formData,[name]:value});
  };

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const {post,minsal,maxsal,qualification,age,vacancies,shift } = formData;
  
    if (!post || !minsal || !age || !maxsal || !qualification || !vacancies || !shift) {
      setErrorMessage("All fields are required.");
    } else if (parseInt(age)<18) {
      alert("You must be at least 18 years old to proceed!");
    } else if (isNaN(minsal) || isNaN(maxsal)) {
      alert("Salary must be a number.");
    }else if( isNaN(vacancies)){
      alert("Number of vacancies must be a number.")
    }else {
      setErrorMessage(""); // Clear any existing error message
      navigate('/JobAdd/ShopDetails'); // Absolute path - correct

      //navigate('./ShopDetails'); // Redirect to the next page
    }
    };

  return (
    <div id="body2">
    <div id="container4" >
      <h1 className="heading4">QUICK HIRE</h1>
      <label id="label1" >About the Job</label>
      <form id="jobForm2" onSubmit={handleSubmit} >
      <br></br>
        <label htmlFor="post" className='label2'>Select Job Role*</label>
         {/* <select id="input1" name="post" p value={formData.post} onChange={handleChange} required/> */}
         <select name="post" placeholder='Enter post title' id='input1' value={formData.post || ''} onChange={handleChange}>
            <option value='electrician'>Electrician</option>
            <option value='plumber'>Plumber</option>
            <option value='cleaner' >Cleaning Staff</option>
            <option value='receptionist' >Receptionist</option>
            <option value='deliveryboy'>Delivery Partner</option>
            <option value='packing'>Packing Assistant</option>
            <option value='promoter'>Promoter</option>
            <option value='StoreKeeper'>Store Keeper</option>
            <option value='cashier'>Cashier</option>
            <option value='Sales'>Sales Assistent</option>
            <option value='chef'>Chef</option>
            <option value='security'>Security</option>
            <option value='customersupport'>Customer Support</option>
            <option value='floormanager'>Floor Manager</option>
            <option value='social'>Social Media Assistant</option>
         </select>  
         <br></br>
         <label className='label2'>Job Description*</label>
          <input type='text' placeholder='About the job'  id='inputljob'  required/>
          <label className='label2'>Monthly Income</label>
         <input type="text" id='input2' name="minsal" placeholder='Enter min salary' value={formData.minsal} onChange={handleChange} required/>
         <br></br>
         <input type="text" id='input3' name="maxsal" placeholder='Enter max salary' value={formData.maxsal} onChange={handleChange} required/>
         <br></br>
         <label htmlFor='qualification' className='label2'>Required Qualification*</label>
         <select name="qualification" id='input4' value={formData.qualification || ''} onChange={handleChange} required>
            <option value='pg'>Post Graduate</option>
            <option value='ug'>Under Graduate</option>
            <option value='diploma' >Diploma</option>
            <option value='plustwo' >Higher Secondary</option>
            <option value='sslc'>Hight School</option>
         </select>   
           <br></br>
            <label className='label2'>Job Shift*</label>
          <div className='radio-group' style={{ display: 'flex', gap: '10px' }}>
            <label htmlFor='day'>
              <input type='radio' id='day' name='shift' value='day' checked={formData.shift === "day"} onChange={handleChange} /> Day Shift
            </label>
            <label htmlFor='night'>
              <input type='radio' id='night' name='shift' value='night' checked={formData.shift === "night"} onChange={handleChange} /> Night Shift
            </label>
            <label htmlFor='any'>
              <input type='radio' id='any' name='shift' value='any' checked={formData.shift === "any"} onChange={handleChange} /> Any Shift
            </label>
          </div>
          <br></br>
            <label className='label2'>Minimum Age Required*</label>
          <input type='text' placeholder='Enter min age' name='age' id='input5' value={formData.age} onChange={handleChange} required/>
          <br></br>
          <label className='label2'>Number of Vacancies*</label>
          <input type='text' placeholder='vacancies' name='vacancies' id='input6' value={formData.vacancies} onChange={handleChange} required/>
          <br></br>
          
          <button className="nextButton">Next</button> 
       </form>
    </div>
    </div>  
  )
}
export default JobDetails 

