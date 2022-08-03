import React from 'react';
import './CardChef.scss';

const Order = ({prop}) => {
  return (
      <div className="cardchef-items">
            <p>{prop.count}</p>
            <p>{prop.item}</p>
      </div>
  );
};

export default Order;