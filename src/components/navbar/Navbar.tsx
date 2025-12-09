import './Navbar.css';
import contenido from '../../data/contenido';
import logo from "../../assets/KMP2.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { cta } = contenido.hero;

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`navbar-right ${menuAbierto ? 'active' : ''}`}>
        <span className="close-menu" onClick={toggleMenu}>&times;</span>

        <Link to="/services">Servicios</Link>

        <Link to="/aboutUs" className="navbar-divider">Nosotros</Link>

        {/* CTA puede quedar como <a> porque apunta a un link externo o ancla */}
        <a href={cta.link} className="cta-button">
          Contactar
        </a>
      </div>
    </nav>
  );
}
