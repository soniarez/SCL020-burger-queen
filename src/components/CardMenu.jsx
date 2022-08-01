import React, { useContext } from 'react';
import SelectionContext from '../context/Context';
import menu from '../data/menu.json';
import './CardMenu.scss';
 
const CardMenu = ({ category }) => {

  const {addDish} = useContext(SelectionContext);

  const filteredMenu = menu.menu.filter((element) => {
    return element.type === category;
  });

  return (
    <div className='cardmenu-container'>
      {filteredMenu.map((item, index) => (
        <div className="cardmenu-items" key={index} onClick={() => addDish(item)}>
          <img className='cardmenu-img'  src={item.img} alt="dish img" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.size}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CardMenu;
