/* import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const ProtectedRoutes = ({ children }) => {
  const { auth, setAuth } = useContext(AuthContext);

  setAuth(auth);
  console.log(auth);
  if (!auth) return <Navigate to="/" />;
  console.log(auth)
  return <>{children}</>;
};

export default ProtectedRoutes; */

/* import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) return <Navigate to="/" />;
  return <>{children}</>;
};
 */
