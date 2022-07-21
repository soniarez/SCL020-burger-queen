import React from 'react';
import logo from '../assets/cafeLogo.png';
import chef from '../assets/chef.png';
import waiter from '../assets/waiter.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="cafe logo" />
      <input type="text" placeholder="Server´s name" />
      <div className="btn-container">
        <button>
          <Link to="/Chef">
            <img className="main-icons" src={chef} alt="chef icon" />
          </Link>
        </button>
        <button>
          <Link to="/Waiter">
            <img className="main-icons" src={waiter} alt="waiter icon" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
