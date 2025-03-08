import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RedirectToHome = ({ isAuthenticated }) => {
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default RedirectToHome;
