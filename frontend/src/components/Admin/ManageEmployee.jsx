import React, { useEffect, useState } from 'react';
import './ManageEmployee.css';
import { useNavigate } from "react-router-dom";
import logo1 from "../../components/images/logo1.png";
import axios from "axios";

function ManageEmployee() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/employees/${id}`);
      alert("The employee has been deleted!");
      fetchEmployees(); // Refresh the list
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const handleGoBack = () => {
    navigate("/AdministratorHome");
  };

  return (
    <div className="manage-employees-container">
      <header className="manage-employees-header">
        <img src={logo1} alt="Logo" className="header-logo" />
        <h1 className="header-title">Registered Employees</h1>
        <button className="header-go-back-button" onClick={handleGoBack}>Go Back</button>
      </header>

      <main className="manage-employees-content">
        <div className="employees-list">
          <hr className="list-divider" />
          {employees.map((employee) => (
            <div className="employee-card" key={employee._id}>
              <div className="employee-details">
                <p className="employee-name">
                  {employee.fullname}
                </p>
                <p className="employee-detail-item">
                  <span className="employee-detail-label">Age:</span> {employee.age}
                </p>
                <p className="employee-detail-item">
                  <span className="employee-detail-label">Gender:</span> {employee.gender}
                </p>
                <p className="employee-detail-item">
                  <span className="employee-detail-label">Qualification:</span> {employee.qualification}
                </p>
                <p className="employee-detail-item">
                  <span className="employee-detail-label">Phone:</span> {employee.phone}
                </p>
              </div>
              <div className="employee-actions">
                <button className="delete-button" onClick={() => handleDeleteClick(employee._id)}>
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

export default ManageEmployee;