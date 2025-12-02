
import './Alliances.css';


import contenido from '../../data/contenido';
import pershing from '../../assets/pershing.png';
import stonex from '../../assets/stonex.png';
import balanzi from '../../assets/balanzI.png';
import interactive from '../../assets/interactiveBrokers.png';
import balanz3 from '../../assets/Balanz3.jpg';
import inviu from '../../assets/inviu.png';

const logos = [balanz3, inviu, pershing, stonex, balanzi,interactive];

export default function Alliances() {
  return (
    <section className="alliances-section">
      <h2>{contenido.alianzas.titulo}</h2>
     <div className="alliances-grid">
  {logos.map((src, i) => (
    <div className="logo-box" key={i}>
      <img src={src} alt={`Alianza ${i + 1}`} />
    </div>
  ))}
</div>
    </section>
  );
}
