import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleMenuToggle = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <nav className={`container`}>
      <img src={logo} alt="Logo" className="logo" />
      
      <div className={`menu-icon ${isNavActive ? 'menu-open' : ''}`} onClick={handleMenuToggle}>
        &#9776; {/* Hamburger icon */}
      </div>

      <ul className={isNavActive ? 'nav-active' : ''}>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Service</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <button className="NavBar-btn"><span>Download CV</span></button>
    </nav>
  );
};

export default Navbar;
