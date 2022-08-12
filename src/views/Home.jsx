import React, { useState, useContext } from 'react';
import axios from 'axios';
import logo from '../assets/cafeLogo.png';
import macaron from '../assets/macaron.png';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import jwt_decode from 'jwt-decode';
import swal from 'sweetalert';
import './Home.scss';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setIsLoggedin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        'https://burgerqueen.barrenechea.cl/login',
        {
          email,
          password,
        }
      );
      const token = resp.data.token;
      const role = jwt_decode(token).role;
      localStorage.setItem('token', token);
      setIsLoggedin(true);
      if (role === 'chef') {
        navigate('/Chef');
      }
      if (role === 'waiter') {
        navigate('/Waiter');
      }
    } catch (err) {
      if (!err?.response) {
        swal('Sorry! Something went wrong');
      } else if (err.response?.status === 400) {
        swal('Missing Username or Password');
      } else if (err.response?.status === 401) {
        swal("You don't have access");
      } else {
        swal('Login failed, try again');
      }
    }
  };

  return (
    <div className="home-container">
      <form className="home-container-form">
        <img src={logo} alt="cafe logo" />
        <input
          className="input-login"
          value={email}
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-login"
          value={password}
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='button-container'>
          <button type="submit" onClick={handleSubmit} className="enter-btn">
            Sign in
          </button>
          <img onClick={handleSubmit} src={macaron} alt="macaron animation" className="shake-hard" />
        </div>
      </form>
    </div>
  );
};

export default Home;
