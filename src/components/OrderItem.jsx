import  React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import CardMenu from './CardMenu.jsx';
import menuB from '../data/menu.js';
import './OrderForm.scss';

const OrderItem = () => {

  const [count, setCount] = useState(1);
  const [quantity, setQuantity] = useState(1);
  
  const menu = menuB.breakfast[0];
  let q = 2;
  let total = menu.price*q;

  const handleAddOne =  () => {
    if(quantity) {
      setCount(count + parseInt(quantity,10))
      console.log(quantity)
    }
    
  }

  const handleSubsOne = () => {
    if(quantity) {
      setCount(count - parseInt(quantity,10))
      console.log(quantity)
    }
    
  }

  const handleOnChange = (e) => {
    setQuantity(e.target.value);
  }


  return (
    <div className='orderitem-container'>
      <div className='orderitem-selection'>
        <input className="orderitem-input" type="text" placeholder="Item"></input>
        <FaPlus onClick={handleAddOne}/>
        <input className="orderitem-input-q" type="text" value={count}  onChange={handleOnChange}></input>
        <FaMinus onClick={handleSubsOne}/>
        <p>{total}</p>
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
        <FaTrash className="orderitem-deleteicon" onClick={() => console.log('click-trash')}/>
      </div>
    </div>
  );
};

export default OrderItem;