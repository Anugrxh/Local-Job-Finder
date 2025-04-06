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

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/AdministratorLogin");
  };

  return (
    <div className="applicantsdiv16">
      <div id="headerapplicants16">
        <img src={logo1} alt="Logo" className="logohome" />
        <div id="paradivapplicants16">
          <p id="jobdetailsapplicants16">Registered Employees</p>
        </div>
        <div id="paradiv257">
          <p id="logout" onClick={handleLogout}>Log out</p>
        </div>
      </div>

      <div className='bottomapplicants16'>
        <div className="applicant-listapplicants16">
          <hr className='bottomline'></hr>

          {employees.map((employee) => (
            <div className='applicant-cardapplicants16' key={employee._id}>
              <div id="jobName">
                <p id="employeename116">{employee.fullname}</p>
              </div>
              <div id="companyname">
                <p className='otherdata16'>{employee.age}</p>
              </div>
              <div id="salary">
                <p className='otherdata16'>{employee.gender}</p>
              </div>
              <div id="location">
                <p className='otherdata16'>{employee.qualification}</p>
              </div>
              <div id="vacancies">
                <p className='otherdata16'>{employee.phone}</p>
              </div>
              <div id="buttondiv126">
                <div id="buttondiv116">
                  <button id="viewbutton" onClick={() => handleDeleteClick(employee._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>  
      </div> 
    </div>
  );
}

export default ManageEmployee;
