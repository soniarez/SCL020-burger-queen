import React from 'react';
import menuB from '../data/menuB.js';

const CardMenu = () => {

    const menu = menuB.breakfast[0];

    const listItems = menu.map((items) => 
      <li key="menu.id">{items}</li>
    );

    return (
        <ul className="card-menu">{listItems}</ul>
    )
}

export default CardMenu;

/* <img />
            <p className="card-menu-description"></p>
            <p className="card-menu-price"></p> */