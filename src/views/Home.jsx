import React, { useState, useContext } from 'react';
import axios from 'axios';
import logo from '../assets/CafeLogo.png';
import macaron from '../assets/macaron.png';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Home.scss';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setIsLoggedin } = useContext(AuthContext);

  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);

  const handleSubmit = async e => {
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
        MySwal.fire({
          title: <strong>Something happend!</strong>,
          icon: 'warning',
        });
      } else if (err.response?.status === 400) {
        MySwal.fire({
          title: <strong>Something went wrong, try again!</strong>,
          icon: 'error',
        });
      } else if (err.response?.status === 401) {
        MySwal.fire({
          title: <strong>You don't have access!</strong>,
          icon: 'error',
        });
      } else {
        MySwal.fire({
          title: <strong>Login failed, try again!</strong>,
          icon: 'warning',
        });
      }
    }
  };

  return (
    <div className="home-container">
      <form className="home-container-form">
        <img src={logo} alt="cafe logo" />
        <input
          required
          className="input-login"
          value={email}
          type="email"
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          required
          className="input-login"
          value={password}
          type="password"
          placeholder="Enter your password"
          onChange={e => setPassword(e.target.value)}
        />
        <div className="button-container">
          <button type="submit" onClick={handleSubmit} className="enter-btn">
            Sign in
          </button>
          <img
            onClick={handleSubmit}
            src={macaron}
            alt="macaron animation"
            className="shake-chunk"
          />
        </div>
      </form>
    </div>
  );
};

export default Home;
