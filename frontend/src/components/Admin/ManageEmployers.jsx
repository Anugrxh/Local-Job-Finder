import React, { useEffect, useState } from 'react';
import './ManageEmployers.css';
import { useNavigate } from "react-router-dom";
import logo1 from "../../components/images/logo1.png";
import axios from "axios";

function ManageEmployers() {
  const [employers, setEmployers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployers();
  }, []);

  const fetchEmployers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/employers");
      setEmployers(response.data);
    } catch (error) {
      console.error("Error fetching employers:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/employers/${id}`);
      alert("The employer has been deleted!");
      fetchEmployers(); // Refresh the list
    } catch (error) {
      console.error("Error deleting employer:", error);
    }
  };

  const handleGoBack = () => {
    navigate("/AdministratorHome");
  };

  return (
    <div className="manage-employers-container">
      <header className="manage-employers-header">
        <img src={logo1} alt="Logo" className="header-logo" />
        <h1 className="header-title">Registered Employers</h1>
        <button className="header-go-back-button" onClick={handleGoBack}>Go Back</button>
      </header>

      <main className="manage-employers-content">
        <div className="employers-list">
          <hr className="list-divider" />
          {employers.map((employer) => (
            <div className="employer-card" key={employer._id}>
              <div className="employer-details">
                <p className="employer-name">
                  {employer.name}
                </p>
                <p className="employer-detail-item">
                  <span className="employer-detail-label">Age:</span> {employer.age}
                </p>
                <p className="employer-detail-item">
                  <span className="employer-detail-label">Gender:</span> {employer.gender}
                </p>
                <p className="employer-detail-item">
                  <span className="employer-detail-label">Email:</span> {employer.email}
                </p>
                <p className="employer-detail-item">
                  <span className="employer-detail-label">Phone:</span> {employer.phone}
                </p>
              </div>
              <div className="employer-actions">
                <button className="delete-button" onClick={() => handleDeleteClick(employer._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ManageEmployers;