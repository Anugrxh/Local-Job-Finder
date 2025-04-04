import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo1 from "../../components/images/logo1.png";
import homebg from "../../components/images/homebg.jpg";

function Home() {
  const featuresSectionRef = useRef(null);
  const HomeSectionRef = useRef(null);
  const navigate = useNavigate();
  const SigninSectionRef = useRef(null);
  const ContactSectionRef = useRef(null);

  const scrollToFeatures = () => {
    if (featuresSectionRef.current) {
      featuresSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = () => {
    if (HomeSectionRef.current) {
      HomeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSignin = () => {
    if (SigninSectionRef.current) {
      SigninSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (ContactSectionRef.current) {
      ContactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div id="homeBody">
        <div id="homeheader">
          <img src={logo1} alt="Logo" className="logohome" />
          <div id="paradiv">
            <p className="homepara1" onClick={scrollToHome}>
              Home
            </p>
            <p className="homepara" onClick={scrollToFeatures}>
              Features
            </p>
            <p className="homepara" onClick={() => navigate("/SelectRole")}>
              Sign up
            </p>
            <p className="homepara" onClick={scrollToSignin}>
              Sign in
            </p>
            <p className="homepara" onClick={scrollToContact}>
              Contact
            </p>
          </div>
        </div>
        <div ref={HomeSectionRef} id="homediv">
          <p id="topheading">Higher Smart, Get Hired Faster-With Quick Hire!</p>
          <p id="bottompara">Trusted by local businesses and job seekers</p>
          <div id="bgdiv">
            <img src={homebg} alt="homebg" className="bghome" />
          </div>
          <div ref={featuresSectionRef} id="featuresdiv">
            <div id="leftfeatures"></div>
            <div id="rightfeatures">
              <p id="featurespara">Why Choose Quick Hire?</p>
              <p id="featurespara1">
                QuickHire simplifies local job searching and hiring. Job seekers
                easily find opportunities nearby, while employers quickly
                connect with skilled professionals. With seamless job posting,
                smart filters, and an intuitive platform, we make hiring fast,
                efficient, and hassle-free.
              </p>
            </div>
          </div>
          <div ref={SigninSectionRef} id="signindiv">
            <p id="signinpara">
              Select your role to access the right features for you
            </p>
            <p id="signinpara1">Who are you?</p>
            <button
              id="employeebutton"
              onClick={() => navigate("/LoginEmployee")}
            >
              Sign in as Employee
            </button>
            <button
              id="employerbutton"
              onClick={() => navigate("/LoginEmployer")}
            >
              Sign in as Employer
            </button>
            <p id="signinpara2">Not registered yet?</p>
            <p id="signinpara3">Are you an Administrator?</p>
            <button
              id="createbutton"
              onClick={() => navigate("/AdministratorLogin")}
            >
              Login Here
            </button>
          </div>
          <div id="contactdiv">
            <p id="contact" ref={ContactSectionRef}>
              Contact Us:
            </p>
            <p className="contactpara">Email: support@quickhire.com</p>
            <p className="contactpara">Phone: +91 9876543210</p>

            <form id="contactForm">
              <input
                type="text"
                placeholder="Your Name"
                className="contactInput"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="contactInput"
                required
              />
              <textarea
                placeholder="Your Message"
                className="contactTextarea"
                required
              ></textarea>
              <button type="submit" id="contactButton">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
