import  { useEffect, useState } from 'react';
import ContactInfo from "../contactInfo/ContactInfo";
import ContactForm from '../contactForm/ContactForm';
import './ContactSection.css';

export default function ContactSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!isMobile) setFormOpen(true);
    else setFormOpen(false);
  }, [isMobile]);

  return (
    <section className="contact-section">
      <div className="contact-content">
        <ContactInfo />

        <div
          id="contact-form-container"
          className={`form-container ${formOpen ? 'visible' : 'hidden-mobile'}`}
        >
          {/* Botón cerrar solo en mobile cuando el sheet está abierto */}
          {isMobile && formOpen && (
            <button
              type="button"
              className="sheet-close-button"
              aria-label="Cerrar formulario"
              onClick={() => setFormOpen(false)}
            >
              ×
            </button>
          )}

          <ContactForm />
        </div>
      </div>

      <button
        className="toggle-form-button"
        aria-controls="contact-form-container"
        aria-expanded={formOpen}
        onClick={() => setFormOpen(v => !v)}
      >
        {formOpen ? 'Cerrar formulario' : 'Escribinos'}
      </button>
    </section>
  );
}

