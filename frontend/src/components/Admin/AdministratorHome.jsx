import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdministratorHome.css";
import axios from "axios";

const AdministratorHome = () => {
  const navigate = useNavigate();
  const [overview, setOverview] = useState({
    totalJobs: 0,
    totalEmployees: 0,
    totalEmployers: 0,
  });

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/AdministratorLogin");
  };

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/overview");
        console.log(res.data)
        setOverview(res.data);
      } catch (error) {
        console.error("Failed to fetch overview:", error);
      }
    };

    fetchOverview();
  }, [navigate]);

  return (
    <div className="admin-dashboard11">
      <header className="admin-header11">
        <h1 id="headeradmin">Administrator Dashboard</h1>
        <button className="admin-logout-btn" onClick={handleLogout}>
          logout
        </button>
      </header>

      <div className="dashboard-grid">
        {/* Overview Section */}
        <div className="card stats-card">
          <h2>Overview</h2>
          <p>
            <strong>Total Jobs:</strong> {overview.totalJobs}
          </p>
          <p>
            <strong>Registered Employees:</strong> {overview.totalEmployees}
          </p>
          <p>
            <strong>Registered Employers:</strong> {overview.totalEmployers}
          </p>
        </div>

        {/* User Management Section */}
        <div className="card">
          <h2>User Management</h2>
          <button className="btn11" onClick={() => navigate("/ManageEmployee")}>
            Manage Employees
          </button>
          <button className="btn11" onClick={() => navigate("/ManageEmployers")}>
            Manage Employers
          </button>
        </div>

        {/* Job Postings Section */}
        <div className="card">
          <h2>Job Postings</h2>
          <button className="btn11" onClick={() => navigate("/JobsList")}>
            View All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdministratorHome;
