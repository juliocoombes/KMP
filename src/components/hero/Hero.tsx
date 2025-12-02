
import './Hero.css';
import contenido from '../../data/contenido';
import heroBackground from '../../assets/Imagen de WhatsApp 2025-07-09 a las 13.37.27_3bd0fa63.jpg'; // Adjust the path as necessary
const { titulo, descripcion, cta } = contenido.hero;

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackground})` }}
    >
      <div className="container">
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
        <a href={cta.link}>{cta.texto}</a>
      </div>
    </section>
  );
}
