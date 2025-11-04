
import './Alliances.css';
import balanz from '../../assets/balanz.png';
import oip from '../../assets/OIP.jpeg';
import contenido from '../../data/contenido';
import pershing from '../../assets/pershing.png';
import stonex from '../../assets/stonex.png';
import balanzi from '../../assets/balanzi.png';

const logos = [balanz, oip, pershing, stonex, balanzi];

export default function Alliances() {
  return (
    <section className="alliances-section">
      <h2>{contenido.alianzas.titulo}</h2>
      <div className="alliances-grid">
        {logos.map((src, i) => (
          <img key={i} src={src} alt={`Alianza ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
