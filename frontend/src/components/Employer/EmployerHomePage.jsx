import React, { useEffect, useState } from 'react';
import './EmployerHomePage.css';
import logo1 from "../../components/images/logo1.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmployerHomePage() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const employerId = JSON.parse(localStorage.getItem("employerData")).id
        console.log(employerId)
        const response = await axios.get(`http://localhost:5000/api/jobs/employer/${employerId}`);
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`);
      setJobs(jobs.filter(job => job._id !== id));
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div className="body4">
      <div id="header1">
        <img src={logo1} alt="Logo" className="logohome" />
        <div id="paradiv1">
          <p id="jobdetails">Job Details</p>
        </div>
        <div id="paradiv2">
          <button id="postjobs" onClick={() => navigate('/JobAdd')}>Post Your Jobs</button>
        </div>
      </div>

      <div className='bottom1'>
        <div className="applicant-list">
          {jobs.map(job => (
            <div className='applicant-card' key={job._id}>
              <div id="jobName">
                <p id="jobname1">{job.title}</p>
              </div>
              <div id="companyname">
                <p className='otherdata'>{job.company}</p>
              </div>
              <div id="salary">
                <p className='otherdata'>Salary: {job.minSalary} - {job.maxSalary}</p>
              </div>
              <div id="location">
                <p className='otherdata'>{job.location}</p>
              </div>
              <div id="vacancies">
                <p className='otherdata'>Vaccancies: {job.vacancies}</p>
              </div>
              <div id="buttondiv">
                <div id="buttondiv1">
                  <button id="viewbutton" onClick={() => navigate(`/ViewApplicants/${job._id}`, { state: { jobId: job._id } })}>View Applicants</button>
                </div>
                <div id="buttondiv2">
                  <button id="editbutton" onClick={() => navigate(`/EditJobDetails/${job._id}`, { state: { job } })}>Edit</button>
                </div>
                <div id="buttondiv3">
                  <button id="deletebutton" onClick={() => handleDelete(job._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>  
      </div> 
    </div>
  );
}

export default EmployerHomePage;
