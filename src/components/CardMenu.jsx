import React, { useState } from 'react';
import menu from '../data/menu.js';
import './CardMenu.scss';
 
const CardMenu = (category) => {
//  console.log(m, "im m in CardMenu")
 
 // const [menuB, setMenuB] = useState(menu[m.m]) 
console.log(category)

  return (
    <div className='cardmenu-container'>
      {menu[category.category].map(item => (
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
