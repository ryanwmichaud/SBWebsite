import './Global.css';
import './components/Navbar.css'
import './components/Footer.css'
import './pages/pages.css'

import Home from './pages/Home';
import AboutSean from './pages/AboutSean'
import SeansRecord from './pages/SeansRecord'
import Issues from './pages/Issues';
import Endorsements from './pages/Endorsements';
import District14Map from './pages/District14Map';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*
export const GlobalContext  = createContext()

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  )

}
*/


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/aboutsean" element={<AboutSean></AboutSean>} />
        <Route path="/seansrecord" element={<SeansRecord></SeansRecord>} />
        <Route path="/issues" element={<Issues></Issues>} />
        <Route path="/endorsements" element={<Endorsements></Endorsements>} />
        <Route path="/district14map" element={<District14Map></District14Map>} />
        <Route path="/contact" element={<Contact></Contact>} />

        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>

  </Router>
  );
}

export default App;
