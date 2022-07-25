import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import OrderForm from '../components/OrderForm.jsx';

const Waiter = () => {
  return (
    <div>
      <Sidebar />
      <h1>Queen´s Road Cafe WAITER</h1>
      <p>Servers Name Input </p>
      <OrderForm />
    </div>
  );
};

export default Waiter;
