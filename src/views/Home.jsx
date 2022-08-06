import React from 'react';
import logo from '../assets/cafeLogo.png';
import chefIcon from '../assets/chefIcon.png';
import waiterIcon from '../assets/waiterIcon.png';
import SigninForm from "../components/SignInForm.jsx"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="cafe logo" />
      {/* <input type="text" placeholder="Server´s name" /> */}
      <SigninForm />
      <div className="btn-container">
        <Link to="/Chef" className='toView' >
            <img className="main-icons" src={chefIcon} alt="chef icon" />
        </Link>

        <Link to="/Waiter" className='toView' >
            <img className="main-icons" src={waiterIcon} alt="waiter icon" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
