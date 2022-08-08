import React, { useContext } from 'react';
import SelectionContext from '../context/Context.jsx';
//import Order from './Order.jsx';
import './CardChef.scss';

const ChefCard = () => {
  const { selected } = useContext(SelectionContext);
  return (
    <div className="cardchef-container">
      <div className="cardchef-items">
        <h4>Order #</h4>
        <p>Table:</p>
        <p>Client:</p>
        <ul className="cardchef-order-container">
          <li >
            <p>2</p>
            <p>semitas</p>
          </li>
        
        </ul>
        <div className="cardchef-btns">
          <button className="status-btn">Start</button>
          <button className="timer-btn">Timer</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
