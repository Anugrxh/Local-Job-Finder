import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const EmployeeProtectedRoute = () => {
  const isEmployeeAuthenticated = localStorage.getItem("employeeToken");
  return isEmployeeAuthenticated ? <Outlet /> : <Navigate to="/LoginEmployee" />;
};

export default EmployeeProtectedRoute;
