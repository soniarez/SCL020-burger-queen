import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import CardChef from '../components/CardChef.jsx';

const Chef = () => {
  return (
    <div className="chef-container">
      <Sidebar />
      <div className="chef-middle">
        <h1>Queen's Road Cafe</h1>
        <ul className="chef-category">
          <li>Ready</li>
        </ul>
        <CardChef status={'completed'} />
      </div>
    </div>
  );
};

export default Chef;
