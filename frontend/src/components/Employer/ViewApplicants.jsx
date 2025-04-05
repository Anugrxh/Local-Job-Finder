import React, { useEffect, useState } from "react";
import "./ViewApplicants.css";
import logo1 from "../../components/images/logo1.png";
import axios from "axios";
import { useParams } from "react-router-dom"; // assuming jobId is in URL

function ViewApplicants() {
  const { jobId } = useParams(); // URL should have /view-applicants/:jobId
  const [applicants, setApplicants] = useState([]);

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
                <p id="employeename1">{applicant.fullname}</p>
              </div>
              <div id="companyname">
                <p className="otherdata1">{applicant.age}</p>
              </div>
              <div id="salary">
                <p className="otherdata1">{applicant.gender}</p>
              </div>
              <div id="location">
                <p className="otherdata1">{applicant.qualification}</p>
              </div>
              <div id="vacancies">
                <p className="otherdata1">{applicant.phone}</p>
              </div>
              <div id="buttondiv12">
                <div id="buttondiv11">
                  <button id="viewbutton">Contact</button>
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
