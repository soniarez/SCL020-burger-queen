import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import axios from 'axios';
import './CardChef.scss';

const ChefCard = ({ status }) => {
  const [orderApi, setOrderApi] = useState(null);

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
    const timer = setInterval(() => {
      getOrder();
    }, 15 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  //FETCHING ORDERS
  const fetchOrder = async () => {
    try {
      let res = await axios.get('https://burgerqueen.barrenechea.cl/orders', {
        params: { status, includeItems: true },
      });
      let data = await res.data;

      return data;
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
  };

  // PUT REQUEST
  const UpdateOrderStatus = async id => {
    try {
      const res = await axios.put(
        'https://burgerqueen.barrenechea.cl/orders/' + id,
        {
          status: 'completed',
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE REQUEST
/*   const deleteOrder = id => {
    setOrderApi(orderApi.orders.filter(item => item.id !== id));
  };
 */

  return (
    <div className="cardchef-container">
      {orderApi ? (
        orderApi.orders.map(item => (
          <div className="cardchef-items" key={item.id}>
            <h2>Order # {item.id}</h2>
            <p>Table: {item.table}</p>
            <p>Client: {item.customer}</p>
            <ul className="cardchef-order-container">
              {item.items.map(el => (
                <li key={el.status}>
                  <p>{el.count}</p>
                  <p>{el.menuItem.title}</p>
                </li>
              ))}
            </ul>
            {status === 'pending' ? (
              <Timer onClick={() => UpdateOrderStatus(item.id)} />
            ) : (
              <button
                className="status-btn"
                // onClick={()=>deleteOrder(item.id)}
                style={{ backgroundColor: '#41ABB5' }}
              >
                Ready
              </button>
            )}
          </div>
        ))
      ) : (
        <p>Data is loading...</p>
      )}
    </div>
  );
};

export default ChefCard;
