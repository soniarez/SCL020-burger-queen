import React, { useContext } from 'react';
import SelectionContext from '../context/Context.jsx';
import Order from './Order.jsx';
import './CardChef.scss';

const ChefCard = () => {

    const {selected} = useContext(SelectionContext);
  return (
    <div className="cardchef-container">
      <h2>Order#7281</h2>
      <p>Client</p>
      <p>Table</p>
      <div className="cardchef-items">
        {selected.map((item) => (
          <Order key={item.id} prop={selected.item}/>
        ))}
      </div>
    </div>
  );
};

export default ChefCard;
