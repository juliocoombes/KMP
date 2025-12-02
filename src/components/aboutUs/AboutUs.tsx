
import ContactSection from '../contactSession/ContactSection';
import './AboutUs.css';
import TeamSection from '../teamSection/TeamSection';
import contenido from '../../data/contenido';
import Footer from '../footer/Footer';

export default function AboutUs() {
  const { nosotros } = contenido;

  return (
    <div className="about-page">
      <TeamSection />
      
      <div className="about-header">
        <h1>{nosotros.titulo}</h1>
        <p>{nosotros.descripcionCorta}</p>
      </div>

      <div className="about-body">
        {nosotros.descripcionLarga.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>

      <ContactSection />
      <Footer/>
    </div>
  );
}


