import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.scss';
import Home from './views/Home.jsx';
import Waiter from './views/Waiter.jsx';
import Chef from './views/Chef.jsx';
import ChefReady from './views/ChefReady.jsx';
import { SelectionProvider } from './context/Context.jsx';
import { UserProvider } from "./context/UserContext.jsx"

function App() {
  return (
    <UserProvider>
      <SelectionProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Waiter" element={<Waiter />} />
            <Route path="/Chef" element={<Chef />} />
            <Route path="/ChefReady" element={<ChefReady />} />
          </Routes>
        </Router>
      </SelectionProvider>
    </UserProvider>
  );
}

export default App;
