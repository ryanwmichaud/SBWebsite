import './Global.css';
import './components/Navbar.css'
import Home from './pages/Home';
import AboutSean from './pages/AboutSean'
import SeansRecord from './pages/SeansRecord'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/aboutsean" element={<AboutSean></AboutSean>} />
        <Route path="/seansrecord" element={<SeansRecord></SeansRecord>} />
        <Route path="*" render={() => <h1>404 Not Found</h1>} />
      </Routes>

  </Router>
  );
}

export default App;
