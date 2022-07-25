import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import OrderForm from '../components/OrderForm.jsx';
import CardMenu from '../components/CardMenu.jsx';

const Waiter = () => {
  return (
    <div>
      <Sidebar />
      <h1>Queen´s Road Cafe WAITER</h1>
      <p>Servers Name Input </p>
      <CardMenu />
      <OrderForm />
    </div>
  );
};

export default Waiter;
