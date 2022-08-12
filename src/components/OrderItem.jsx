import React, { useContext, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import SelectionContext from '../context/Context';
import './OrderForm.scss';

const OrderItem = ({ selection }) => {
  const { addDish, removeDish, deleteDish } = useContext(SelectionContext);

  return (
    <div className="orderitem-container">
      <div className="orderitem-selection">
        <input
          className="orderitem-input"
          type="text"
          placeholder="Item"
          value={selection.title}
        ></input>
        <FaPlus onClick={() => addDish(selection)} />
        <input
          className="orderitem-input-q"
          type="text"
          value={selection.count}
        ></input>
        <FaMinus onChange={selection.count === 0 ? deleteDish(selection.id) : selection.count} onClick={() => removeDish(selection)} />
        <p>${selection.price * selection.count}</p>
      </div>
      <div className="orderitem-delete">
        <select className="orderitem-size">
          <option value="" disabled selected>
            Size
          </option>
          <option value="small">SM</option>
          <option value="large">LG</option>
        </select>
        <p>${selection.price}</p>
        <FaTrash
          onClick={() => deleteDish(selection.id)}
          className="orderitem-deleteicon"
        />
      </div>
    </div>
  );
};

export default OrderItem;
