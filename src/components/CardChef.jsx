import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardChef.scss';

const ChefCard = () => {
 
  const [orderApi, setOrderApi] = useState(null);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const orderFromApi = await fetchOrder();
        //console.log(menuFromApi, 'menufrom api');
        //console.log(orderFromApi, "soy datita")
        setOrderApi(orderFromApi);
      } catch (err) {
        console.log(err, 'error getting data');
      }
    };
    getOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      let res = await axios.get(
        'https://burgerqueen.barrenechea.cl/orders?status=pending&includeItems=true'
      );
      let data = await res.data;

      return data;
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
  };

  //const dataApi = orderApi ? console.log(orderApi.orders[0].id) : console.log("error")

  return (
    <div className="cardchef-container">
      {orderApi &&
        orderApi.orders.map(item => (
          <div className="cardchef-items" key={item.id}>
            <h2>Order # {item.id}</h2>
            <p>Table: {item.table}</p>
            <p>Client: {item.customer}</p>
            <ul className="cardchef-order-container">
              {item.items.map((el) => (
                <li key={el.status}>
                <p>{el.count}</p>
                <p>{el.menuItem.title}</p>
              </li>
              ))}
            
            </ul>
            <div className="cardchef-btns">
              <button className="status-btn">Start</button>
              <button className="timer-btn">Timer</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ChefCard;
