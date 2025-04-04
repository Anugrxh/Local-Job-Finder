import React from 'react'
import './ManageEmployee.css';
import { useNavigate } from "react-router-dom";
import logo1 from "../../components/images/logo1.png";

function ManageEmployee() {

    const navigate=useNavigate();
    const handleDeleteClick = () => {
        alert("The Employee has been Deleted!");
      };

  return (
    <div className="applicantsdiv16">
            <div id="headerapplicants16">
                <img src={logo1} alt="Logo" className="logohome" />
                <div id="paradivapplicants16">
                <p id="jobdetailsapplicants16">Registered Employees</p>
                </div>
                <div id="paradiv257">
                    <p id="logout" onClick={()=>navigate('/Home')}>Log out</p>
                </div>
            </div>
             <div className='bottomapplicants16'>
            <div className="applicant-listapplicants16">
            <hr className='bottomline'></hr>
               <div className='applicant-cardapplicants16'>
                  <div id="jobName">
                    <p id="employeename116">name</p>
                  </div>
                  <div id="companyname">
                    <p className='otherdata16'>age</p>
                  </div>
                  <div id="salary">
                    <p className='otherdata16'>gender</p>
                  </div>
                  <div id="location">
                    <p className='otherdata16'>qualification</p>
                  </div>
                  <div id="vacancies">
                    <p className='otherdata16'>phoneno</p>
                  </div>
                  <div id="buttondiv126">
                    <div id="buttondiv116">
                      <button id="viewbutton" onClick={handleDeleteClick}>Delete   </button>
                    </div>
                  </div>
               </div>
            </div>  
        </div> 
    </div>
  )
}

export default ManageEmployee