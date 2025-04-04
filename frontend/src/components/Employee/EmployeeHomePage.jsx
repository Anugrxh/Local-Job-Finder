import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeHomePage.css";
import logo1 from "../../components/images/logo1.png";

const EmployeeHomePage = () => {
  const job1 = {
    title: "Software Engineer",
    desc: "simple but not easy",
    company: "TechCorp Pvt Ltd",
    salarymin: "₹50,000",
    salarymax: " ₹70,000",
    qualification: "IT",
    age: 19,
    vacancies: 5,
    shift: "night",
    address: "kannur",
    location: "Bangalore, India",
  };

  const navigate = useNavigate();
  const handleInterestClick = () => {
    alert("Your request has been sent!");
  };

  return (
    <div id="EmployeeHomediv">
      <div id="header15">
        <img src={logo1} alt="Logo" className="logohome" />
        <div id="paradiv15">
          <p id="jobdetails15">Job Details</p>
        </div>
        <div id="paradiv25">
          <p id="logout" onClick={() => navigate("/Home")}>
            Log out
          </p>
        </div>
      </div>
      <div className="bottom15">
        <div className="applicant-list15">
          <div className="filters">
            <select id="firstselect">
              <option value="">Job Category</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
            </select>

            <select id="secondselect">
              <option value="">Place</option>
              <option value="Bangalore, India">Bangalore</option>
              <option value="Mumbai, India">Mumbai</option>
              <option value="Delhi, India">Delhi</option>
            </select>

            <select id="Thirdselect">
              <option value="">Salary</option>
              <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
              <option value="₹40,000 - ₹60,000">₹40,000 - ₹60,000</option>
              <option value="₹50,000 - ₹70,000">₹50,000 - ₹70,000</option>
            </select>

            <button className="filter-btn">Filter</button>
          </div>

          <div className="applicant-card15">
            <div id="jobName">
              <p id="jobname15">{job1.title}</p>
            </div>
            <div id="desc">
              <p className="otherdata">{job1.desc}</p>
            </div>
            <div id="companyname">
              <p className="otherdata">{job1.company}</p>
            </div>
            <div id="sal">
              <div id="salary15">
                <p id="minsal">{job1.salarymin}</p>
              </div>
              <div id="salary25">
                <p id="maxsal">{job1.salarymax}</p>
              </div>
            </div>
            <div id="quali">
              <p className="otherdata">{job1.qualification}</p>
            </div>
            <div id="age15">
              <p className="otherdata">{job1.age}</p>
            </div>
            <div id="vacancies">
              <p className="otherdata">{job1.vacancies}</p>
            </div>
            <div id="shift">
              <p className="otherdata">{job1.shift}</p>
            </div>
            <div id="address15">
              <p className="otherdata">{job1.address}</p>
            </div>
            <div id="location">
              <p className="otherdata">{job1.location}</p>
            </div>
            <div id="buttondiv152">
              <div id="buttondiv25">
                <button id="interested" onClick={handleInterestClick}>
                  Interested
                </button>
              </div>
            </div>
          </div>

          <div className="applicant-card15">
            <div id="jobName">
              <p id="jobname15">{job1.title}</p>
            </div>
            <div id="desc">
              <p className="otherdata">{job1.desc}</p>
            </div>
            <div id="companyname">
              <p className="otherdata">{job1.company}</p>
            </div>
            <div id="sal">
              <div id="salary15">
                <p id="minsal">{job1.salarymin}</p>
              </div>
              <div id="salary25">
                <p id="maxsal">{job1.salarymax}</p>
              </div>
            </div>
            <div id="quali">
              <p className="otherdata">{job1.qualification}</p>
            </div>
            <div id="age15">
              <p className="otherdata">{job1.age}</p>
            </div>
            <div id="vacancies">
              <p className="otherdata">{job1.vacancies}</p>
            </div>
            <div id="shift">
              <p className="otherdata">{job1.shift}</p>
            </div>
            <div id="address15">
              <p className="otherdata">{job1.address}</p>
            </div>
            <div id="location">
              <p className="otherdata">{job1.location}</p>
            </div>
            <div id="buttondiv152">
              <div id="buttondiv25">
                <button id="interested" onClick={handleInterestClick}>
                  Interested
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmployeeHomePage;
