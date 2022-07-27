import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import OrderForm from '../components/OrderForm.jsx';
import CardMenu from '../components/CardMenu.jsx';

const Waiter = () => {
const [ menu, setMenu ]  = useState("breakfast");
const [ dish, setDish ] = useState('');



  return (
    <div className='waiter-container'>
      <Sidebar />
      <div className='waiter-middle'>
      <h1>Queen´s Road Cafe WAITER</h1>
      <ul className='waiter-category'>
        <li onClick={() => setMenu("breakfast")}>Breakfast</li>
        <li onClick={() => setMenu("lunch")}>Lunch & All Day</li>
        <li onClick={() => setMenu("sides")}>On the Side</li>
        <li onClick={() => setMenu("drinks")}>Drinks</li>
        <li onClick={() => setMenu("sweets")}>Sweet Tooth</li>
      </ul>
      <CardMenu category={menu} onClick={() => setDish(dish)}/>
      </div>
      <OrderForm dish={dish}/>
    </div>
  );
};

export default Waiter;
