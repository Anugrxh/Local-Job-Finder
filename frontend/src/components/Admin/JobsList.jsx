import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./JobsList.css";
import logo1 from "../../components/images/logo1.png";

const JobsList = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/jobs");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`);
      alert("The job has been deleted!");
      fetchJobs(); // refresh the job list
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const handleGoBack = () => {
    navigate("/AdministratorHome");
  };

  return (
    <div className="job-listing-container">
      <header className="job-listing-header">
        <img src={logo1} alt="Logo" className="listing-header-logo" />
        <h1 className="listing-header-title">Registered Jobs</h1>
        <button className="listing-go-back-button" onClick={handleGoBack}>Go Back</button>
      </header>

      <main className="job-listing-content">
        <div className="job-listing">
          <hr className="listing-divider" />
          {jobs.map((job) => (
            <div className="job-item" key={job._id}>
              <div className="job-info">
                <p className="job-title">{job.title}</p>
                <p className="job-details-item">
                  <span className="details-label">Company:</span> {job.company}
                </p>
                <p className="job-details-item">
                  <span className="details-label">Salary Min:</span> {job.minSalary}
                </p>
                <p className="job-details-item">
                  <span className="details-label">Salary Max:</span> {job.maxSalary}
                </p>
                <p className="job-details-item">
                  <span className="details-label">Qualification:</span> {job.qualification}
                </p>
                <p className="job-details-item">
                  <span className="details-label">Age:</span> {job.age}
                </p>
                <p className="job-details-item">
                  <span className="details-label">Vacancies:</span> {job.vacancies}
                </p>
                <p className="job-details-item">
                  <span className="details-label">Shift:</span> {job.shift}
                </p>
                <p className="job-details-item">
                  <span className="details-label">Address:</span> {job.address}
                </p>
                <p className="job-details-item">
                  <span className="details-label">Location:</span> {job.location}
                </p>
                <p className="job-details-item">
                  <span className="details-label">Description:</span> {job.jobDescription}
                </p>
              </div>
              <div className="job-actions-area">
                <button className="delete-listing-button" onClick={() => handleDeleteClick(job._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JobsList;