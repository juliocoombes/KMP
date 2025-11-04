import React from 'react';
import './Footer.css';
import contenido from '../../data/contenido';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">{contenido.footer.texto}</p>
    </footer>
  );
}
