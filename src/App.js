
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Wallet from './Pages/Connect';


// import AppContext from './Contexts/context';



function App() {
  return (
    <Router>
          <Routes>
              <Route path="/" element={<Wallet/>} />
          </Routes>
    </Router>
  );
}

export default App;