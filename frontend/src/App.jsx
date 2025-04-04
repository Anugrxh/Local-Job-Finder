import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HOME_UI/Home";
import SelectRole from "./components/HOME_UI/SelectRole";
import RegisterEmployee from "./components/Employee/RegisterEmployee";
import EmployerRegistration from "./components/Employer/EmployerRegistartion";
import LoginEmployee from "./components/Employee/LoginEmployee";
import LoginEmployer from "./components/Employer/LoginEmployer";
import EmployeeHomePage from "./components/Employee/EmployeeHomePage";
import JobAdd from "./components/Employer/JobAdd";
import ShopDetails from "./components/ShopDetails";
import EmployerHomePage from "./components/Employer/EmployerHomePage";
import AdministratorLogin from"./components/Admin/AdministratorLogin";
import AdministratorHome from "./components/Admin/AdministratorHome"
import ViewApplicants from"./components/Employer/ViewApplicants";
import EditJobDetails from"./components/Employer/EditJobDetails";
import ManageEmployee from"./components/Admin/ManageEmployee";
import ManageEmployers from "./components/Admin/ManageEmployers"
import JobsList from "./components/Admin/JobsList"

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SelectRole" element={<SelectRole/>}></Route>
        <Route path="/RegisterEmployee" element={<RegisterEmployee />} />
        <Route path="/EmployerRegistration" element={<EmployerRegistration />} />
        <Route path="/LoginEmployee" element={<LoginEmployee />} />
        <Route path="/LoginEmployer" element={<LoginEmployer />} />
        <Route path="/EmployeeHomePage" element={<EmployeeHomePage />} />
        <Route path="/JobAdd" element={<JobAdd />} />
        <Route path="/JobAdd/ShopDetails" element={<ShopDetails />} />
        <Route path="/EmployerHomePage" element={<EmployerHomePage />} />
        
        

        <Route path="/AdministratorLogin" element={< AdministratorLogin/>} />
        <Route path="/AdministratorHome" element={< AdministratorHome/>} />
        <Route path="/ViewApplicants" element={< ViewApplicants/>} />
        <Route path="/EditJobDetails" element={< EditJobDetails/>} />
        <Route path="/Home" element={< Home/>} />
        <Route path="/ManageEmployee" element={< ManageEmployee/>} />
        <Route path="/ManageEmployers" element={< ManageEmployers/>} />
        <Route path="/JobsList" element={< JobsList/>} />
      </Routes>
    </Router>
  );
}

export default App;