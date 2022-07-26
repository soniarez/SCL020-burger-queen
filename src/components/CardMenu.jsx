import React from 'react';
import menu from '../data/menu.js';
import './CardMenu.scss';
 
const CardMenu = () => {

  const menuB = menu.breakfast;

  return (
    <div className='cardmenu-container'>
      {menuB.map(item => (
        <div className="cardmenu-items" key={item.id}>
          <img className='cardmenu-img'  src={item.img} alt="dish img" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.size}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CardMenu;
