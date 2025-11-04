import React from 'react';
import './Navbar.css'; 
import logo from "../../assets/KMP2.png"; // Adjust the path as necessary
import { useState } from 'react';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href='/'><img src={logo} alt="Logo" className="navbar-logo" /></a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`navbar-right ${menuAbierto ? 'active' : ''}`}>
         <span className="close-menu" onClick={toggleMenu}>&times;</span>
        <a href="/services">Servicios</a>
      
        <a href="/aboutUs" className="navbar-divider">Nosotros</a>
        <a href="https://wa.link/..." className="cta-button">Contactar</a>
      </div>
    </nav>
  );
}
