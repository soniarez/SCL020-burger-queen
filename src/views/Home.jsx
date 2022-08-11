import React, { useState, useContext } from 'react';
import axios from 'axios';
import logo from '../assets/cafeLogo.png';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('https://burgerqueen.barrenechea.cl/login', {
        email,
        password,
      });
      const token = resp.data.token
      localStorage.setItem("token", token);
     
      // const role = resp.data.role;
      setAuth({ email, password, token });
      navigate('/Chef');
    } catch (err) {
      if (!err?.response) {
        console.log('No Server Response');
      } else if (err.response?.status === 400) {
        console.log('Missing Username or Password');
      } else if (err.response?.status === 401) {
        console.log('Unauthorized');
      } else {
        console.log('Login Failed');
      }
    }
  };

  return (
    <div className="home-container">
      <form className='home-container-form'>
        <img src={logo} alt="cafe logo" />
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btn-container">
          <button type="submit" onClick={handleSubmit} className="enter-btn">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
