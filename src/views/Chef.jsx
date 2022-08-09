import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import CardChef from '../components/CardChef.jsx';

const Chef = () => {
  const [status, setStatus] = useState('pending');

  return (
    <div className="chef-container">
      <Sidebar />
      <div className="chef-middle">
        <h1>Queen's Road Cafe</h1>
        <ul className="chef-category">
          <li onClick={() => setStatus("pending")}>Cooking</li>
          <li onClick={() => setStatus("completed")}>Ready</li>
        </ul>
        <CardChef status={status} />
      </div>
    </div>
  );
};

export default Chef;
