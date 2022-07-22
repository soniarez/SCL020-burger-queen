import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import './OrderItem.scss';

const OrderItem = () => {
  return (
    <div className='orderitem-container'>
      <div className='orderitem-selection'>
        <input className="orderitem-input" type="text" placeholder="Item"></input>
        <FaPlus onClick={() => console.log('click-item')} />
        <input className="orderitem-input-q" type="text"></input>
        <FaMinus onClick={() => console.log('click-q')} />
        <p>7.50</p>
      </div>
      <div className='orderitem-delete'>
        <p>3.50</p>
        <FaTrash className="orderitem-deleteicon" onClick={() => console.log('click-trash')}/>
      </div>
    </div>
  );
};

export default OrderItem;