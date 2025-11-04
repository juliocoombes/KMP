import React from 'react';
import ContactSection from '../contactSession/ContactSection';
import './Services.css';
import BusinessUnits from '../businessUnits/BusinessUnits';
import contenido from '../../data/contenido';
import Footer from '../footer/Footer';
const Services = () => {
  const { servicios } = contenido;

  return (
    <div className="services-page">
      <BusinessUnits />
      <ContactSection />
      <Footer/>
    </div>
  );
};

export default Services;
