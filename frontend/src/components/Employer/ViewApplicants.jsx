import React, { useEffect, useState } from "react";
import "./ViewApplicants.css";
import logo1 from "../../components/images/logo1.png";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom"; // assuming jobId is in URL


function ViewApplicants() {
  const { jobId } = useParams(); // URL should have /view-applicants/:jobId
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInterestedApplicants = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${jobId}/interested-employees`);
        setApplicants(response.data);
      } catch (error) {
        console.error("Error fetching interested applicants:", error);
      }
    };

    fetchInterestedApplicants();
  }, [jobId]);

  const handleContact = async (employeeId, jobId) => {
    try {
      const res = await axios.post("http://localhost:5000/api/employer/contact-employee", {
        userId: employeeId,
        jobId: jobId,
      });
  
      if (res.status === 200) {
        alert("Contact email sent successfully!");
      } else {
        alert("Failed to contact employee!");
      }
    } catch (error) {
      console.error("Error contacting employee:", error);
      alert("Something went wrong while trying to contact the employee.");
    }
  };
  const handleGoBack = () => {
    navigate('/EmployerHomePage'); // Navigate to /EmployerHomePage
  };
  

  return (
    <div className="applicantsdiv">
      <div id="headerapplicants">
        <img src={logo1} alt="Logo" className="logohome" />
        <div id="paradivapplicants">
          <p id="jobdetailsapplicants">Job Applicants</p>
        </div>
      </div>

      <div className="bottomapplicants">
        <div className="applicant-listapplicants">
         
          {applicants.map((applicant, index) => (
            <div className="applicant-cardapplicants" key={index}>
              <div id="jobName">
                <p id="employeename1">Full Name : {applicant.fullname}</p>
              </div>
              <div id="companyname">
                <p className="otherdata1">Age :{applicant.age}</p>
              </div>
              <div id="salary">
                <p className="otherdata1">Gender : {applicant.gender}</p>
              </div>
              <div id="locatio">
                <p className="otherdata1">Qualification : {applicant.qualification}</p>
              </div>
              <div id="vacancies">
                <p className="otherdata1">Phone Number :{applicant.phone}</p>
              </div>
              <div id="buttondiv12">
                <div id="buttondiv11">
                  <button className="viewbutton" onClick={() => handleContact(applicant._id, jobId)}>Contact</button>
                  <button className="viewbutton" onClick={handleGoBack}>go back</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewApplicants;
