import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import OrderForm from '../components/OrderForm.jsx';
import CardMenu from '../components/CardMenu.jsx';

const Waiter = () => {
  const [category, setCategory] = useState('breakfast');

  return (
    <div className="waiter-container">
      <Sidebar />
      <div className="waiter-middle">
        <h1>Queen's Road Cafe</h1>
        <ul className="waiter-category">
          <li onClick={() => setCategory('breakfast')}>Breakfast</li>
          <li onClick={() => setCategory('lunch')}>Lunch & All Day</li>
          <li onClick={() => setCategory('sides')}>On the Side</li>
          <li onClick={() => setCategory('drinks')}>Drinks</li>
          <li onClick={() => setCategory('sweets')}>Sweet Tooth</li>
        </ul>
        <CardMenu category={category} />
      </div>
      <OrderForm />
    </div>
  );
};

export default Waiter;
