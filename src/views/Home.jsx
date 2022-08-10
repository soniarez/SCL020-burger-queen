import React, {useState} from 'react';
import logo from '../assets/cafeLogo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div className="home-container">
      <img src={logo} alt="cafe logo" />
      <input type="email" placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input type="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} value={password} />
      <div className="btn-container">
        <Link to="/Chef" className="toView">
          <button className='enter-btn'>Enter</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
