import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import SelectionContext from '../context/Context';
import './CardMenu.scss';
 
const CardMenu = ({ category }) => {

  const {addDish} = useContext(SelectionContext);

  // useEffect(() => {
    
  // }
  // fetchMenu();
  // }, [])

  // const grabPlayerScores = async function () {
  //   let players = await getUsernames();
  //   for (i = 0; i = players.length; i++) {
  //     let data = await chessAPI.getPlayerStats(players[i]);
  //     console.log(data)
  //   }
  // }

  const fetchMenu = async () => {
    let res = await axios.get('https://burgerqueen.barrenechea.cl/menu');
    let data = await res.data;
    return data;
  }

  const filteredMenu = async () => {
    const data = await fetchMenu();
    data.filter((element) => {
     element.type === category;
  });
}

filteredMenu().then(console.log);

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
