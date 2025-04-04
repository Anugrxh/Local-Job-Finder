import React from 'react'
import './ManageEmployers.css';
import { useNavigate } from "react-router-dom";
import logo1 from "../../components/images/logo1.png";

function ManageEmployers() {


    const navigate=useNavigate();
    const handleDeleteClick = () => {
        alert("The Employee has been Deleted!");
      };

  return (
    <div className="applicantsdiv17">
            <div id="headerapplicants17">
                <img src={logo1} alt="Logo" className="logohome" />
                <div id="paradivapplicants17">
                <p id="jobdetailsapplicants17">Employers Registered</p>
                </div>
                <div id="paradiv257">
                    <p id="logout" onClick={()=>navigate('/Home')}>Log out</p>
                </div>
            </div>
             <div className='bottomapplicants17'>
            <div className="applicant-listapplicants17">
            <hr className='bottomline'></hr>
               <div className='applicant-cardapplicants17'>
                  <div id="jobName">
                    <p id="employeename117">name</p>
                  </div>
                  <div id="companyname">
                    <p className='otherdata17'>age</p>
                  </div>
                  <div id="salary">
                    <p className='otherdata17'>gender</p>
                  </div>
                  <div id="location">
                    <p className='otherdata17'>qualification</p>
                  </div>
                  <div id="vacancies">
                    <p className='otherdata17'>phoneno</p>
                  </div>
                  <div id="buttondiv127">
                    <div id="buttondiv117">
                      <button id="viewbutton" onClick={handleDeleteClick}>Delete   </button>
                    </div>
                  </div>
               </div>
            </div>  
        </div> 
    </div>
  )
}

export default ManageEmployers