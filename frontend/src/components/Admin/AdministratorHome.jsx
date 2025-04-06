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
        console.log(res.data);
        setOverview(res.data);
      } catch (error) {
        console.error("Failed to fetch overview:", error);
      }
    };

    fetchOverview();
  }, [navigate]);

  return (
    <div className="admin-dashboard-container">
      <header className="admin-dashboard-header">
        <h1 className="admin-dashboard-title">Administrator Dashboard</h1>
        <button className="admin-logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="admin-dashboard-content">
        <section className="admin-dashboard-overview">
          <h2 className="section-title">Overview</h2>
          <div className="overview-stats-big">
            <div className="stat-item-big animate-stat-big">
              <span className="stat-value-big">{overview.totalJobs}</span>
              <span className="stat-label-big">Total Jobs</span>
            </div>
            <div className="stat-item-big animate-stat-big">
              <span className="stat-value-big">{overview.totalEmployees}</span>
              <span className="stat-label-big">Registered Employees</span>
            </div>
            <div className="stat-item-big animate-stat-big">
              <span className="stat-value-big">{overview.totalEmployers}</span>
              <span className="stat-label-big">Registered Employers</span>
            </div>
          </div>
        </section>

        <section className="admin-dashboard-management">
          <h2 className="section-title">User Management</h2>
          <div className="management-actions">
            <button
              className="management-button"
              onClick={() => navigate("/ManageEmployee")}
            >
              Manage Employees
            </button>
            <button
              className="management-button"
              onClick={() => navigate("/ManageEmployers")}
            >
              Manage Employers
            </button>
          </div>
        </section>

        <section className="admin-dashboard-jobs">
          <h2 className="section-title">Job Postings</h2>
          <div className="jobs-actions">
            <button
              className="jobs-button"
              onClick={() => navigate("/JobsList")}
            >
              View All Jobs
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdministratorHome;