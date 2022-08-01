import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.scss';
import Home from './views/Home.jsx';
import Waiter from './views/Waiter.jsx';
import Chef from './views/Chef.jsx';
import Incomming from './views/Incomming.jsx';
import Ready from './views/Ready.jsx';
import { SelectionProvider } from './context/Context.jsx';

function App() {
  return (
    <SelectionProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Waiter" element={<Waiter />} />
        <Route path="/Chef" element={<Chef />} />
        <Route path="/Incomming" element={<Incomming />} />
        <Route path="/Ready" element={<Ready />} />
      </Routes>
    </Router>
    </SelectionProvider>
  );
}

export default App;
