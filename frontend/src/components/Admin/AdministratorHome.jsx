import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdministratorHome.css";
import { Link } from "react-router-dom";

const AdministratorHome = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard11">
      <header className="admin-header11">
        <h1 id="headeradmin">Administrator Dashboard</h1>
        <Link to="/AdministratorLogin">
          <button className="admin-logout-btn">logout</button>
        </Link>
      </header>

      <div className="dashboard-grid">
        {/* Overview Section */}
        <div className="card stats-card">
          <h2>Overview</h2>
          <p>
            <strong>Total Jobs:</strong> 120
          </p>
          <p>
            <strong>Registered Employees:</strong> 300
          </p>
          <p>
            <strong>Registered Employers:</strong> 50
          </p>
        </div>
        {/* User Management Section */}
        <div className="card">
          <h2>User Management</h2>
          <button className="btn11" onClick={() => navigate("/ManageEmployee")}>
            Manage Employees
          </button>
          <button
            className="btn11"
            onClick={() => navigate("/ManageEmployers")}
          >
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
