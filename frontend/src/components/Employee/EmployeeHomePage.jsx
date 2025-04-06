import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./EmployeeHomePage.css";
import logo1 from "../../components/images/logo1.png";

const EmployeeHomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    jobLocation: "",
    salaryRange: "",
  });
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [employeeName, setEmployeeName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
    fetchFilterOptions();
    fetchEmployeeName();
  }, []);

  const fetchEmployeeName = () => {
    const employeeData = JSON.parse(localStorage.getItem("employeeData"));
    if (employeeData && employeeData.name) {
      setEmployeeName(employeeData.name);
    }
  };

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs");
      setJobs(res.data);
      setFilteredJobs(res.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const fetchFilterOptions = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/employees/filters"
      );
      setCategories(res.data.categories);
      setLocations(res.data.locations);
    } catch (err) {
      console.error("Error fetching filter options:", err);
    }
  };

  const handleInterestClick = async (jobId) => {
    const employeeData = JSON.parse(localStorage.getItem("employeeData"));
    const employeeId = employeeData?.id;

    try {
      const res = await axios.post("http://localhost:5000/api/jobs/interest", {
        jobId,
        employeeId,
      });

      if (res.status === 200) {
        alert("Interest marked successfully!");
      } else {
        alert(res.data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while marking interest.");
    }
  };

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const applyFilters = () => {
    let filtered = [...jobs];

    if (filters.category && filters.category !== "") {
      filtered = filtered.filter((job) =>
        job.title
          .trim()
          .toLowerCase()
          .includes(filters.category.trim().toLowerCase())
      );
    }

    if (filters.jobLocation && filters.jobLocation !== "") {
      filtered = filtered.filter(
        (job) =>
          job.location.trim().toLowerCase() ===
          filters.jobLocation.trim().toLowerCase()
      );
    }

    if (filters.salaryRange && filters.salaryRange !== "") {
      const salary = parseInt(filters.salaryRange, 10);

      filtered = filtered.filter((job) => {
        const jobMin = parseInt(job.minSalary?.replace(/₹|,/g, ""), 10);
        return !isNaN(jobMin) && jobMin >= salary;
      });
    }

    setFilteredJobs(filtered);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("employeeToken");
      localStorage.removeItem("employeeData");
      navigate("/Home");
    }
  };

  return (
    <div id="EmployeeHomediv">
      <div id="header15">
        <img src={logo1} alt="Logo" className="logohome" />
        <div id="paradiv15">
          <p id="jobdetails15">Job Details</p>
        </div>
        <div id="paradiv25">
          <p id="logout" onClick={handleLogout}>
            Log out
          </p>
        </div>
      </div>

      <div className="job-listing-container">
        <div className="job-filters">
          <h2 className="employee-greeting">Hello, {employeeName}!</h2>
          <select id="category" onChange={handleFilterChange}>
            <option value="">All Jobs</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select id="jobLocation" onChange={handleFilterChange}>
            <option value="">All Places</option>
            {locations.map((loc, idx) => (
              <option key={idx} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <button className="filter-button" onClick={applyFilters}>
            Filter
          </button>
        </div>

        <div className="job-list">
          {filteredJobs.length === 0 ? (
            <p style={{ marginTop: "20px" }}>No jobs found.</p>
          ) : (
            filteredJobs.map((job, index) => (
              <div className="job-card" key={index}>
                <div className="job-title">
                  <p>Job : {job.title}</p>
                </div>
                <div className="job-details">
                  <p className="job">Description</p>
                  <p> {job.jobDescription}</p>
                </div>
                <div className="job-details">
                  <p> Company Name : {job.company}</p>
                </div>
                <div className="salary-range">
                  <div className="min-salary">
                    <p>Minimum Salary : Rs : {job.minSalary}/-</p>
                  </div>
                  <div className="max-salary">
                    <p>Maximum Salary : Rs : {job.maxSalary}/-</p>
                  </div>
                </div>
                <div className="job-details">
                  <p>Qualification : {job.qualification.toUpperCase()}</p>
                </div>
                <div className="job-details">
                  <p>Minimum Age : {job.age}</p>
                </div>
                <div className="job-details">
                  <p>Number of Vacancies : {job.vacancies}</p>
                </div>
                <div className="job-details">
                  <p>Shift : {job.shift}</p>
                </div>
                <div className="job-details">
                  <p>Company Address : {job.address}</p>
                </div>
                <div className="job-details">
                  <p>Job Location : {job.location}</p>
                </div>
                <div className="job-actions">
                  <div className="action-button-container">
                    <button
                      className="interested-button"
                      onClick={() => handleInterestClick(job._id)}
                    >
                      Interested
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeHomePage;
