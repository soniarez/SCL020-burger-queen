import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import OrderItem from '../components/OrderItem.jsx';

const Chef = () => {
  return (
    <div>
      <Sidebar />
      <h1>Queen´s Road Cafe CHEF</h1>
      <p>Servers input</p>
      <OrderItem />
    </div>
  );
};

export default Chef;
