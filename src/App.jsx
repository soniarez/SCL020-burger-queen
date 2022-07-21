import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from "./views/Home.jsx";


function App() {

  return (
    <Router>
      <div className="container">
        <Home />
      </div>
    </Router>
  );
}

export default App;