import React from 'react';
import OrderItem from './OrderItem.jsx';
import './OrderForm.scss';

const OrderForm = ({dish}) => {
  return (
    <form className="orderform">
      <h2>Order #572192</h2>
      <select className="orderform-tables">
        <option value="table-1">Table 1</option>
        <option value="table-2">Table 2</option>
        <option value="table-3">Table 3</option>
        <option value="table-4">Table 4</option>
        <option value="table-5">Table 5</option>
        <option value="table-6">Table 6</option>
        <option value="table-7">Table 7</option>
        <option value="table-8">Table 8</option>
        <option value="table-9">Table 9</option>
        <option value="table-10">Table 10</option>
      </select>
      <input
        type="text"
        className="orderform-client"
        placeholder="Client Name"
      ></input>
      <div className="orderform-details">
        <p className="orderform-details1">Item</p>
        <p className="orderform-details2">Qty</p>
        <p className="orderform-details3">Total</p>
      </div>
      <div className="oderform-orderitem-container">
       <OrderItem selection={dish}/>
      </div>
      <div className="orderform-payment-details">
        <p>Sub Total:</p>
        <p>Tip:</p>
        <p>Total:</p>
      </div>
      <button className='orderform-btn' type="submit">Send</button>
    </form>
  );
};

export default OrderForm;
