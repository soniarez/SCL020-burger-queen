import React, { useContext, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import SelectionContext from '../context/Context';
import './OrderForm.scss';

const OrderItem = () => {
  const [count, setCount] = useState(1);

  const { selected } = useContext(SelectionContext);

  const handleAddOne = () => {
    setCount(count + 1);
  };

  const handleSubsOne = () => {
    setCount(count - 1);
  };

  return (
    <div className="orderitem-container">
      {selected.map((dish) => (
          <><div className="orderitem-selection">
          <input
            className="orderitem-input"
            type="text"
            placeholder="Item"
            value={dish.title}
          ></input>
          <FaPlus onClick={handleAddOne} />
          <input
            className="orderitem-input-q"
            type="text"
            min="1"
            value={count}
          ></input>
          <FaMinus onClick={handleSubsOne} />
          <p>{dish.price * count}</p>
        </div><div className="orderitem-delete">
            <select className="orderitem-size">
              <option value="" disabled selected>
                Size
              </option>
              <option value="standard">ST</option>
              <option value="small">SM</option>
              <option value="large">LG</option>
            </select>
            <p>{dish.price}</p>
            <FaTrash className="orderitem-deleteicon" />
          </div></>
      ))}
    </div>
  );
};

export default OrderItem;
