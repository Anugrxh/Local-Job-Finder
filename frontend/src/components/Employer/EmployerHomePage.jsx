import React, { useEffect, useState } from 'react';
import './EmployerHomePage.css';
import logo1 from "../../components/images/logo1.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmployerHomePage() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [employerName, setEmployerName] = useState('');
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const employerData = JSON.parse(localStorage.getItem("employerData"));
        const employerId = employerData.id;
        const name = employerData.name;
        setEmployerName(name);

        console.log(employerId);
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

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("employerData");
    localStorage.removeItem("employerToken");
    navigate("/");
    setShowLogoutConfirmation(false);
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false);
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
          <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="bottom-container">
        <div className="job-list-container">
          <h2 className="employer-greeting">Hello, {employerName}</h2>
          {jobs.map((job) => (
            <div className="job-card" key={job._id}>
              <div className="job-name">
                <p className="job-name-text">Job Name : {job.title}</p>
              </div>
              <div className="company-name">
                <p className="job-details">Company : {job.company}</p>
              </div>
              <div className="salary-details">
                <p className="job-details">Salary Minimum: {job.minSalary}</p>
                <p className="job-details">Salary Maximum: {job.maxSalary}</p>
              </div>
              <div className="location-details">
                <p className="job-details">Location : {job.location}</p>
              </div>
              <div className="vacancy-details">
                <p className="job-details">Vacancies: {job.vacancies}</p>
              </div>
              <div className="job-actions">
                <button
                  className="action-button view-applicants"
                  onClick={() =>
                    navigate(`/ViewApplicants/${job._id}`, { state: { jobId: job._id } })
                  }
                >
                  View Applicants
                </button>
                <button
                  className="action-button edit-job"
                  onClick={() => navigate(`/EditJobDetails/${job._id}`, { state: { job } })}
                >
                  Edit
                </button>
                <button
                  className="action-button delete-job"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showLogoutConfirmation && (
        <div className="logout-confirmation">
          <p>Are you sure you want to logout?</p>
          <button onClick={confirmLogout}>Yes</button>
          <button onClick={cancelLogout}>No</button>
        </div>
      )}
    </div>
  );
}

export default EmployerHomePage;