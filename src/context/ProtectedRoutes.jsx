import React  from 'react';
import { Navigate } from 'react-router-dom';

// AUTH OBSERVER 
const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  //console.log(token);
  if (!token) return <Navigate to="/" />;
  return children;
};

export default ProtectedRoutes;
