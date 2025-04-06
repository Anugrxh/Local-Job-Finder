import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
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
import AdministratorLogin from "./components/Admin/AdministratorLogin";
import AdministratorHome from "./components/Admin/AdministratorHome";
import ViewApplicants from "./components/Employer/ViewApplicants";
import EditJobDetails from "./components/Employer/EditJobDetails";
import ManageEmployee from "./components/Admin/ManageEmployee";
import ManageEmployers from "./components/Admin/ManageEmployers";
import JobsList from "./components/Admin/JobsList";

// Protected Routes
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import EmployeeProtectedRoute from "./components/EmployeeProtectedRoute";
import EmployerProtectedRoute from "./components/EmployerProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/SelectRole" element={<SelectRole />} />
        <Route path="/RegisterEmployee" element={<RegisterEmployee />} />
        <Route path="/EmployerRegistration" element={<EmployerRegistration />} />
        <Route path="/LoginEmployee" element={<LoginEmployee />} />
        <Route path="/LoginEmployer" element={<LoginEmployer />} />
        <Route path="/AdministratorLogin" element={<AdministratorLogin />} />
        <Route path="/Home" element={<Home />} />

        {/* Employee Protected Routes */}
        <Route element={<EmployeeProtectedRoute />}>
          <Route path="/EmployeeHomePage" element={<EmployeeHomePage />} />
        </Route>

        {/* Employer Protected Routes */}
        <Route element={<EmployerProtectedRoute />}>
          <Route path="/EmployerHomePage" element={<EmployerHomePage />} />
          <Route path="/JobAdd" element={<JobAdd />} />
          <Route path="/JobAdd/ShopDetails" element={<ShopDetails />} />
          <Route path="/ViewApplicants/:jobId" element={<ViewApplicants />} />
          <Route path="/EditJobDetails/:jobId" element={<EditJobDetails />} />
        </Route>

        {/* Admin Protected Routes */}
        <Route element={<AdminProtectedRoute />}>
          <Route path="/AdministratorHome" element={<AdministratorHome />} />
          <Route path="/ManageEmployee" element={<ManageEmployee />} />
          <Route path="/ManageEmployers" element={<ManageEmployers />} />
          <Route path="/JobsList" element={<JobsList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
