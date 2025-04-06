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

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/AdministratorLogin");
  };

  return (
    <div id="EmployeeHomediv18">
      <div id="header18">
        <img src={logo1} alt="Logo" className="logohome" />
        <div id="paradiv18">
          <p id="jobdetails18">Registered Jobs</p>
        </div>
        <div id="paradiv18">
          <p id="logout" onClick={handleLogout}>Log out</p>
        </div>
      </div>

      <div className="bottom18">
        <div className="applicant-list18">
          <hr className='bottomline' />
          {jobs.map((job) => (
            <div className='applicant-card18' key={job._id}>
              <div id="jobName18">
                <p id="jobname18">{job.title}</p>
              </div>
              <div id="desc">
                <p className='otherdata18'>{job.desc}</p>
              </div>
              <div id="companyname">
                <p className='otherdata18'>{job.company}</p>
              </div>
              <div id="sal18">
                <div id="salary11">
                  <p id="minsal18">{job.salarymin}</p>
                </div>
                <div id="salary18">
                  <p id="maxsal18">{job.salarymax}</p>
                </div>
              </div>
              <div id="quali">
                <p className='otherdata18'>{job.qualification}</p>
              </div>
              <div id="age15">
                <p className='otherdata18'>{job.age}</p>
              </div>
              <div id="vacancies">
                <p className='otherdata18'>{job.vacancies}</p>
              </div>
              <div id="shift">
                <p className='otherdata18'>{job.shift}</p>
              </div>
              <div id="address15">
                <p className='otherdata18'>{job.address}</p>
              </div>
              <div id="location">
                <p className='otherdata18'>{job.location}</p>
              </div>
              <div id="buttondiv18">
                <button id="interested" onClick={() => handleDeleteClick(job._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsList;
