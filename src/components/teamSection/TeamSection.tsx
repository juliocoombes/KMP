import React from 'react';

import contenido from '../../data/contenido';
import './TeamSection.css';

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-grid">
        {contenido.equipo.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div className="image-wrapper">
              <img src={member.imagen} alt={member.nombre} />
              <div className="overlay">
                <p>{member.descripcion}</p>
              </div>
            </div>
            <div className="team-info">
              <h3>{member.nombre}</h3>
              <p>{member.titulo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
