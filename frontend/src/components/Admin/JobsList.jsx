import React from "react";
import { useNavigate } from "react-router-dom";
import "./JobsList.css";
import logo1 from "../../components/images/logo1.png";

const JobsList= () => {

  const job1 = {
    title: "Software Engineer",
    desc:"simple but not easy",
    company: "TechCorp Pvt Ltd",
    salarymin: "₹50,000",
    salarymax:" ₹70,000",
    qualification: "IT",
    age:19,
    vacancies: 5,
    shift:"night",
    address:"kannur",
    location: "Bangalore, India"
  };


  const navigate = useNavigate();
  const handleDeleteClick = () => {
    alert("The job has been deleted!");
  };

  return (
   <div id="EmployeeHomediv18">
       <div id="header18">
            <img src={logo1} alt="Logo" className="logohome" />
            <div id="paradiv18">
            <p id="jobdetails18">Registered Jobs</p>
            </div>
            <div id="paradiv18">
            <p id="logout" onClick={()=>navigate('/Home')}>Log out</p>
             </div>
         </div>
         <div className='bottom18'>
            <div className="applicant-list18">
            <hr className='bottomline'></hr>
               <div className='applicant-card18'>
                  <div id="jobName18">
                    <p id="jobname18">{job1.title}</p>
                  </div>
                  <div id="desc">
                    <p className='otherdata18'>{job1.desc}</p>
                  </div>
                  <div id="companyname">
                    <p className='otherdata18'>{job1.company}</p>
                  </div>
                  <div id="sal18">
                  <div id="salary11">
                    <p id="minsal18">{job1.salarymin}</p>
                    </div>
                    <div id="salary18">
                    <p id="maxsal18">{job1.salarymax}</p>
                  </div>
                  </div>
                  <div id="quali">
                    <p className='otherdata18'>{job1.qualification}</p>
                  </div>
                  <div id="age15">
                    <p className='otherdata18'>{job1.age}</p>
                  </div>
                  <div id="vacancies">
                    <p className='otherdata18'>{job1.vacancies}</p>
                  </div>
                  <div id="shift">
                    <p className='otherdata18'>{job1.shift}</p>
                  </div>
                  <div id="address15">
                    <p className='otherdata18'>{job1.address}</p>
                  </div>
                  <div id="location">
                    <p className='otherdata18'>{job1.location}</p>
                  </div>
                  <div id="buttondiv18">
                    <div id="buttondiv18">
                      <button id="interested" onClick={handleDeleteClick}>Delete</button>
                    </div>
                  </div>
               </div>
            </div>  
        </div> 
   </div>
  );
};

export default JobsList;