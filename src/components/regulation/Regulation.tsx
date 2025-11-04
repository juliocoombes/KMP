import React from 'react';
import contenido from '../../data/contenido';
import './Regulation.css'; 
import cnvLogo from '../../assets/CNV.png'; 
export default function Regulation() {
  const { regulacion } = contenido;

  return (
    <section className="regulation-section"> 
      <h2>{regulacion.titulo}</h2> 
      <p>{regulacion.descripcion}</p> 
      <img src={cnvLogo} alt="CNV" /> 
    </section>
  );
}
