import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminProtectedRoute = () => {
  const isAdminAuthenticated = localStorage.getItem("adminToken");
  return isAdminAuthenticated ? <Outlet /> : <Navigate to="/AdministratorLogin" />;
};

export default AdminProtectedRoute;
