import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import SelectionContext from '../context/Context';
import './CardMenu.scss';

const CardMenu = ({ category }) => {
  const [menu, setMenu] = useState([]);

  const { addDish } = useContext(SelectionContext);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const menuFromApi = await fetchMenu();
        //console.log(menuFromApi, 'menufrom api');
        setMenu(menuFromApi);
      } catch (err) {
        console.log(err, 'error getting data');
      }
    };
    getMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      let res = await axios.get('https://burgerqueen.barrenechea.cl/menu');
      let data = await res.data;

      return data;
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
  };

  const handlingCategory = () => {
    let data = menu;
    //console.log(data, "data in for loop")
    let arrMenu = [];
    //console.log(data.length, "soy menu object in data");
    if (data.length != 0) {
      for (let i = 0; i < data.menu.length; i++) {
        if (data.menu[i].type === category) {
          arrMenu.push(data.menu[i]);
        }
      }
    }
    //console.log(arrMenu, 'menu filtrado');
    return arrMenu;
  };

  const filteredMenu = handlingCategory();

  return (
    <div className="cardmenu-container">
      {menu &&
        filteredMenu.map((item) => (
          <div
            className="cardmenu-items"
            key={item.id}
            onClick={() => addDish(item)}
          >
            <img className="cardmenu-img" src={item.img} alt="dish img" />
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
