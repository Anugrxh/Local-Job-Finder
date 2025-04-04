import React from 'react'
import './ViewApplicants.css';
import logo1 from "../../components/images/logo1.png";

function ViewApplicants() {
  return (
    <div className="applicantsdiv">
            <div id="headerapplicants">
                <img src={logo1} alt="Logo" className="logohome" />
                <div id="paradivapplicants">
                <p id="jobdetailsapplicants">Job Applicants</p>
                </div>
            </div>
             <div className='bottomapplicants'>
            <div className="applicant-listapplicants">
               <div className='applicant-cardapplicants'>
                  <div id="jobName">
                    <p id="employeename1">name</p>
                  </div>
                  <div id="companyname">
                    <p className='otherdata1'>age</p>
                  </div>
                  <div id="salary">
                    <p className='otherdata1'>gender</p>
                  </div>
                  <div id="location">
                    <p className='otherdata1'>qualification</p>
                  </div>
                  <div id="vacancies">
                    <p className='otherdata1'>phoneno</p>
                  </div>
                  <div id="buttondiv12">
                    <div id="buttondiv11">
                      <button id="viewbutton">Contact   </button>
                    </div>
                  </div>
               </div>
            </div>  
        </div> 
    </div>
  )
}

export default ViewApplicants
