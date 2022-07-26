import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import OrderForm from '../components/OrderForm.jsx';
import CardMenu from '../components/CardMenu.jsx';
import menuData from '../data/menu.js';


const Waiter = () => {
  
const [menu, setMenu] = useState(menuData);

const getBreakfast = () => {
  setMenu(menuData.breakfast);
};

CardMenu(menu);

  return (
    <div className='waiter-container'>
      <Sidebar />
      <div className='waiter-middle'>
      <h1>Queen´s Road Cafe WAITER</h1>
      <ul className='waiter-category'>
        <li onClick={ getBreakfast }>Breakfast</li>
        <li>Lunch & All Day</li>
        <li>On the Side</li>
        <li>Drinks</li>
        <li>Sweet Tooth</li>
      </ul>
      <CardMenu />
      </div>
      <OrderForm />
    </div>
  );
};

export default Waiter;
