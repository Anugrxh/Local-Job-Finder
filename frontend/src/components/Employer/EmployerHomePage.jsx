


// const EmployerHomePage = () => {
//   // Mock applicant data (Replace with API fetch in the future)
//   const applicants = [
//     { id: 1, name: "John Doe",  phone: "9876543210", age: "25" },
//     { id: 2, name: "Jane Smith", phone: "9876509876", age: "21" },
//     { id: 3, name: "Michael Lee", phone: "8796541230", age: "29" },
//   ];

//   

//   return (
//     <body className="body4">
//       <div id="header1">
//          <img src={logo1} alt="Logo" className="logo" />
//          <h1  id="heading6">Job Applicants</h1>
//          {/* <button id="profileButton" ></button> */}
//          <img  id="profile" onClick={() =>navigate('./EmployerProfile')} />
//       </div>
//         <div className='bottom1'>
//         <div className="applicant-list">
//         {applicants.map((applicant) => (
//           <div key={applicant.id} className="applicant-card">
//             <h3>{applicant.name}</h3>
//             {/* <p><strong>Email:</strong> {applicant.email}</p> */}
//             <p><strong>Phone:</strong> {applicant.phone}</p>
//             <p><strong>Age:</strong> {applicant.age}</p>
//             <button className="contact-btn">Contact</button>
//           </div>
//         ))}
//       </div>  
//       </div> 
//     </body>
//   );
// };

// export default EmployerHomePage;

 import React from 'react';
 import './EmployerHomePage.css';
 import logo1 from "../../components/images/logo1.png";
 import { useNavigate } from 'react-router-dom';
 
 function EmployerHomePage() {

  const navigate=useNavigate();

   return (
     <div className="body4">
        <div id="header1">
                   <img src={logo1} alt="Logo" className="logohome" />
                   <div id="paradiv1">
                   <p id="jobdetails">Job Details</p>
                   </div>
                   <div id="paradiv2">
                   <button id="postjobs" onClick={()=>navigate('/JobAdd')}>Post Your Jobs</button>
                   </div>
         </div>
         <div className='bottom1'>
            <div className="applicant-list">
               <div className='applicant-card'>
                  <div id="jobName">
                    <p id="jobname1">job name</p>
                  </div>
                  <div id="companyname">
                    <p className='otherdata'>company name</p>
                  </div>
                  <div id="salary">
                    <p className='otherdata'>salary</p>
                  </div>
                  <div id="location">
                    <p className='otherdata'>location</p>
                  </div>
                  <div id="vacancies">
                    <p className='otherdata'>vacancies</p>
                  </div>
                  <div id="buttondiv">
                    <div id="buttondiv1">
                      <button id="viewbutton" onClick={()=>navigate('/ViewApplicants')}>view Applicants</button>
                    </div>
                    <div id="buttondiv2">
                      <button id="editbutton" onClick={()=>navigate('/EditJobDetails')}>Edit</button>
                    </div>
                    <div id="buttondiv3">
                      <button id="deletebutton">Delete</button>
                    </div>
                  </div>
               </div>
            </div>  
        </div> 
    </div>
   )
 }
 
 export default EmployerHomePage
 