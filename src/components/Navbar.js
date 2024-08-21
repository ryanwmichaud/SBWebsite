import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenuOpen = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

  return (
    <nav className="navbar">
        <div className='navbar-content'>
            <div className="navbar-logo-container">
                <Link className='navbar-logo' to="/">Brennan For Ohio</Link>
            </div>
           
            <div className='navbar-link-container'>
                <Link className="navbar-link" to={"/"}>HOME</Link>
                <Link className="navbar-link" to={"/aboutsean"}>ABOUT SEAN</Link>
                <Link className="navbar-link" to={"/seansrecord"}>SEAN'S RECORD</Link>
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
                </div>

            </div>

        </div>
    </nav>
  );
}

export default Navbar;
