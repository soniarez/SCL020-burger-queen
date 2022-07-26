import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import OrderForm from '../components/OrderForm.jsx';
import CardMenu from '../components/CardMenu.jsx';

const Waiter = () => {
  return (
    <div className='waiter-container'>
      <Sidebar />
      <div className='waiter-middle'>
      <h1>Queen´s Road Cafe WAITER</h1>
      <p>Servers Name Input </p>
      <CardMenu />
      </div>
      <OrderForm />
    </div>
  );
};

export default Waiter;
