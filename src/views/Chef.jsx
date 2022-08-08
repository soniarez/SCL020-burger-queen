import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import CardChef from '../components/CardChef.jsx';

const Chef = () => {
  
    return (
      <div className='chef-container'>
        <Sidebar />
        <div className='chef-middle'>
        <h1>Queen's Road Cafe</h1>
        <ul className='chef-category'>
          <li>Cooking</li>
          <li>Ready</li>
        </ul>
        <h2>Dishes Status: {/*status*/}</h2>
        <CardChef />
        </div>
      </div>
    );
  };
  
  export default Chef;
