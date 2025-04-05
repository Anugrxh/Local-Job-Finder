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
    location: "",
    salaryRange: "",
  });
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
    fetchFilterOptions();
  }, []);

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
      const res = await axios.get("http://localhost:5000/api/employees/filters");
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

    if (filters.category) {
      filtered = filtered.filter((job) => job.qualification === filters.category);
    }

    if (filters.location) {
      filtered = filtered.filter((job) => job.location === filters.location);
    }

    if (filters.salaryRange) {
      const [min, max] = filters.salaryRange.replace(/₹|,/g, "").split(" - ").map(Number);
      filtered = filtered.filter((job) => {
        const jobMin = Number(job.minSalary?.replace(/₹|,/g, ""));
        const jobMax = Number(job.maxSalary?.replace(/₹|,/g, ""));
        return jobMin >= min && jobMax <= max;
      });
    }

    setFilteredJobs(filtered);
  };

  return (
    <div id="EmployeeHomediv">
      <div id="header15">
        <img src={logo1} alt="Logo" className="logohome" />
        <div id="paradiv15">
          <p id="jobdetails15">Job Details</p>
        </div>
        <div id="paradiv25">
          <p
            id="logout"
            onClick={() => {
              localStorage.removeItem("employeeToken");
              localStorage.removeItem("employeeData");
              navigate("/Home");
            }}
          >
            Log out
          </p>
        </div>
      </div>

      <div className="bottom15">
        <div className="applicant-list15">
          <div className="filters" style={{ display: "flex", gap: "10px" }}>
            <select id="category" onChange={handleFilterChange}>
              <option value="">Job Category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select id="location" onChange={handleFilterChange}>
              <option value="">Place</option>
              {locations.map((loc, idx) => (
                <option key={idx} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            <select id="salaryRange" onChange={handleFilterChange}>
              <option value="">Salary</option>
              <option value="₹30000 - ₹50000">₹10,000 - ₹20,000</option>
              <option value="₹30000 - ₹50000">₹20,000 - ₹30,000</option>
              <option value="₹30000 - ₹50000">₹30,000 - ₹40,000</option>
              <option value="₹40000 - ₹60000">₹50,000 - ₹60,000</option>
              <option value="₹50000 - ₹70000">₹60,000 - ₹70,000</option>
              <option value="₹50000 - ₹70000">₹70,000 - ₹80,000</option>
            </select>

            <button className="filter-btn" onClick={applyFilters}>
              Filter
            </button>
          </div>

          {filteredJobs.length === 0 ? (
            <p style={{ marginTop: "20px" }}>No jobs found.</p>
          ) : (
            filteredJobs.map((job, index) => (
              <div className="applicant-card15" key={index}>
                <div id="jobName">
                  <p id="jobname15">{job.title}</p>
                </div>
                <div id="desc">
                  <p className="otherdata">{job.desc}</p>
                </div>
                <div id="companyname">
                  <p className="otherdata">{job.company}</p>
                </div>
                <div id="sal">
                  <div id="salary15">
                    <p id="minsal">{job.minSalary}</p>
                  </div>
                  <div id="salary25">
                    <p id="maxsal">{job.maxSalary}</p>
                  </div>
                </div>
                <div id="quali">
                  <p className="otherdata">{job.qualification}</p>
                </div>
                <div id="age15">
                  <p className="otherdata">{job.age}</p>
                </div>
                <div id="vacancies">
                  <p className="otherdata">{job.vacancies}</p>
                </div>
                <div id="shift">
                  <p className="otherdata">{job.shift}</p>
                </div>
                <div id="address15">
                  <p className="otherdata">{job.address}</p>
                </div>
                <div id="location">
                  <p className="otherdata">{job.location}</p>
                </div>
                <div id="buttondiv152">
                  <div id="buttondiv25">
                    <button id="interested" onClick={() => handleInterestClick(job._id)}>
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
