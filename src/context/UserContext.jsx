import React, { createContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //const [user, setUser] = useState(null);

  //POST REQUEST FOR LOGIN
  const login = async (email, password) => {
    try {
      let resp = await axios.post('https://burgerqueen.barrenechea.cl/login', {
        email: email,
        password: password,
      });
      console.log(resp.data);
      localStorage.setItem('token', resp.data.token);
      resp = Navigate('/Chef');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <UserContext.Provider value={{ login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
