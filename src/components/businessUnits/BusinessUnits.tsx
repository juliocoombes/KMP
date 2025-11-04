import React from 'react';
import './BusinessUnits.css';
import contenido from '../../data/contenido';

export default function BusinessUnits() {
  const { asesoramiento, transaccional } = contenido.unidadesNegocio;

  return (
    <section className="business-section">
      <h2 className="section-title">{contenido.unidadesNegocio.titulo}</h2>

      <div className="business-grid">
        <div className="business-card">
          <h3>{asesoramiento.titulo}</h3>
          <p>{asesoramiento.descripcion}</p>
          <ul>
            {asesoramiento.items.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>

        <div className="business-card">
          <h3>{transaccional.titulo}</h3>
          <p>{transaccional.descripcion}</p>
          <ul>
            {transaccional.items.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
