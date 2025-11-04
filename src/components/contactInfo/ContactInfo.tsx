import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../contactSession/ContactSection.css';
import logo from '../../assets/cuaderno kmp.png';
import contenido from '../../data/contenido';


export default function ContactInfo() {
  const { contacto } = contenido;

  return (
    <section className="contact-info">
      <img src={logo} alt="Fondo" className="background-image" />
      <div className="content-overlay">
        <h2>{contacto.titulo}</h2>
        <p>Email: {contacto.email}</p>
        <p>Teléfono: {contacto.telefono}</p>
        <p>Horario: {contacto.horario}</p>
        <div className="social-icons">
          <a href={contacto.redes.facebook} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={contacto.redes.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href={contacto.redes.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
}

