import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardChef.scss';

const ChefCard = () => {
  const [orderApi, setOrderApi] = useState(null);
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const Timer = () => {
    useEffect(() => {
      let intervalId;

      if (isActive) {
        intervalId = setInterval(() => {
          const secondCounter = counter % 60;
          const minuteCounter = Math.floor(counter / 60);

          const computedSecond =
            String(secondCounter).length === 1
              ? `0${secondCounter}`
              : secondCounter;
          const computedMinute =
            String(minuteCounter).length === 1
              ? `0${minuteCounter}`
              : minuteCounter;

          setSecond(computedSecond);
          setMinute(computedMinute);

          setCounter((counter) => counter + 1);
        }, 1000);
      }

      return () => clearInterval(intervalId);
    }, [isActive, counter]);

    return (
      <div className="cardchef-btns">
        <button onClick={() => setIsActive(!isActive)} className="status-btn">
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button className="status-btn">
          <span className="minute">{minute}</span>
          <span>:</span>
          <span className="second">{second}</span>
        </button>
      </div>
    );
  };

  const timer = Timer();

  useEffect(() => {
    const getOrder = async () => {
      try {
        const orderFromApi = await fetchOrder();
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
      {orderApi ? (
        orderApi.orders.map((item) => (
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
            {timer}
          </div>
        ))
      ) : (
        <p>Data is loading...</p>
      )}
    </div>
  );
};

export default ChefCard;
