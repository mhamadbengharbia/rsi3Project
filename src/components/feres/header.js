import React from 'react';
import logo from '../img/logo.png';
import './header.css';
function Header() {
  return (
    <div>
      
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Features</a></li>
          <li><a href="#about">Operations</a></li>
          <li><a href="#contact">Testimonials</a></li>
          <li><a href="#contact"><button>Open account</button></a></li>
        </ul>
       </nav>
    </div>
  );
}

export default Header;
