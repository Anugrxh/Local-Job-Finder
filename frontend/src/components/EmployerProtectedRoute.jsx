import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const EmployerProtectedRoute = () => {
  const isEmployerAuthenticated = localStorage.getItem("employerToken");
  return isEmployerAuthenticated ? <Outlet /> : <Navigate to="/LoginEmployer" />;
};

export default EmployerProtectedRoute;
