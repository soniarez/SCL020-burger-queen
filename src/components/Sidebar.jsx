import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/homeIcon.png';
import chefIcon from '../assets/chefIcon.png';
import waiterIcon from '../assets/waiterIcon.png';
import darkModeIcon from '../assets/darkModeIcon.png';
import logoutIcon from '../assets/logoutIcon.png';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-ul">
        <li className="sidebar-li">
          <Link to="/">
            <img className="sidebar-icons" src={homeIcon} alt="home icon" />
          </Link>
        </li>
        <li className="sidebar-li">
          <Link to="/Chef">
            <img className="sidebar-icons" src={chefIcon} alt="chef icon" />
          </Link>
        </li>
        <li className="sidebar-li">
          <Link to="/ChefReady">
            <img className="sidebar-icons" src={chefIcon} alt="chef icon" />
          </Link>
        </li>
        <li className="sidebar-li">
          <Link to="/Waiter">
            <img className="sidebar-icons" src={waiterIcon} alt="waiter icon" />
          </Link>
        </li>
        <div className='sidebar-li-end'>
        <li className="sidebar-li">
          <Link to="/">
            <img
              className="sidebar-icons"
              src={darkModeIcon}
              alt="dark mode icon"
            />
          </Link>
        </li>
        <li className="sidebar-li">
          <Link to="/">
            <img
              className="sidebar-icons"
              src={logoutIcon}
              alt="logout icon"
            />
          </Link>
        </li>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
