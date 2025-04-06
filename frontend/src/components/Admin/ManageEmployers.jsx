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

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/AdministratorLogin");
  };

  return (
    <div className="applicantsdiv17">
      <div id="headerapplicants17">
        <img src={logo1} alt="Logo" className="logohome" />
        <div id="paradivapplicants17">
          <p id="jobdetailsapplicants17">Employers Registered</p>
        </div>
        <div id="paradiv257">
          <p id="logout" onClick={handleLogout}>Log out</p>
        </div>
      </div>

      <div className='bottomapplicants17'>
        <div className="applicant-listapplicants17">
          <hr className='bottomline'></hr>

          {employers.map((employer) => (
            <div className='applicant-cardapplicants17' key={employer._id}>
              <div id="jobName">
                <p id="employeename117">{employer.name}</p>
              </div>
              <div id="companyname">
                <p className='otherdata17'>{employer.age}</p>
              </div>
              <div id="salary">
                <p className='otherdata17'>{employer.gender}</p>
              </div>
              <div id="location">
                <p className='otherdata17'>{employer.email}</p>
              </div>
              <div id="vacancies">
                <p className='otherdata17'>{employer.phone}</p>
              </div>
              <div id="buttondiv127">
                <div id="buttondiv117">
                  <button id="viewbutton" onClick={() => handleDeleteClick(employer._id)}>
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

export default ManageEmployers;
