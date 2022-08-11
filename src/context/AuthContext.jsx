import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  let headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  //POST REQUEST FOR LOGIN
  return (
    <AuthContext.Provider value={{ auth, setAuth, headers }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
