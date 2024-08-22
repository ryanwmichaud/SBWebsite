import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenuOpen = () => {
        setMobileMenuOpen(!mobileMenuOpen)
        console.log("f")
    };

  return (
    <nav className="navbar">
        <div className='navbar-content'>
            <div className="navbar-logo-container">
                <Link className='navbar-logo' to="/">
                    <img src="./logo.png" alt="Sean Brennan State Rep Logo" className='navbar-logo-image'/>
                </Link>
            </div>
           
            <div className='navbar-link-container'>
                <Link className="navbar-link" to={"/"}>HOME</Link>
                <Link className="navbar-link" to={"/aboutsean"}>ABOUT SEAN</Link>
                <Link className="navbar-link" to={"/seansrecord"}>SEAN'S RECORD</Link>
                <button className="navbar-link" onClick={toggleMobileMenuOpen}>MORE</button>

            </div>
            

            <button className="mobile-menu-open-button" onClick={toggleMobileMenuOpen}>
                ☰
            </button>
            <div className={`mobile-menu${mobileMenuOpen ? '-open' : '-closed'}`}>
                <button className="mobile-menu-close-button" onClick={toggleMobileMenuOpen}>×</button>
                
                <div className='mobile-menu-navbar-link-container'>
                    <Link className="mobile-menu-navbar-link" to={"/"}>HOME</Link>
                    <Link className="mobile-menu-navbar-link" to={"/aboutsean"}>ABOUT SEAN</Link>
                    <Link className="mobile-menu-navbar-link" to={"/seansrecord"}>SEAN'S RECORD</Link>
                    <Link className="mobile-menu-navbar-link" to={"/issues"}>ISSUES</Link>
                    <Link className="mobile-menu-navbar-link" to={"/endorsements"}>ENDORSEMENTS</Link>
                    <Link className="mobile-menu-navbar-link" to={"/district14map"}>DISTRICT 14 MAP</Link>
                    <Link className="mobile-menu-navbar-link" to={"/contact"}>CONTACT</Link>
                </div>

            </div>

        </div>
    </nav>
  );
}

export default Navbar;
