import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const [isLoggedin, setIsLoggedin] = useState(false);
  console.log(isLoggedin, "is logged in?")

  let headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  //POST REQUEST FOR LOGIN
  return (
    <AuthContext.Provider value={{ headers, setIsLoggedin}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
