import  React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import menuB from '../data/menu.js';
import './OrderForm.scss';

const OrderItem = () => {

  const [count, setCount] = useState(1);
  
  const menu = menuB.breakfast[0];

  const handleAddOne =  () => {
      setCount(count + 1)    
  };

  const handleSubsOne = () => {
      setCount(count - 1)
  };

  return (
    <div className='orderitem-container'>
      <div className='orderitem-selection'>
        <input className="orderitem-input" type="text" placeholder="Item"></input>
        <FaPlus onClick={handleAddOne}/>
        <input className="orderitem-input-q" type="text" min="1" value={count} ></input>
        <FaMinus onClick={handleSubsOne}/>
        <p>{menu.price*count}</p>
      </div>
      <div className='orderitem-delete'>
        <p>Size:
        <select className='orderitem-size'>
        <option value="standard">ST</option>
        <option value="small">SM</option>
        <option value="large">LG</option>
        </select>
        </p>
        <p>{menu.price}</p>
        <FaTrash className="orderitem-deleteicon" />
      </div>
    </div>
  );
};

export default OrderItem;