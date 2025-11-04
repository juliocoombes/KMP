import React from 'react';
import Hero from "../hero/Hero";
import Alliances from '../alliances/Alliances';
import Regulation from '../regulation/Regulation';
import ContactInfo from '../contactInfo/ContactInfo';
import ContactForm from '../contactForm/ContactForm';
import Footer from '../footer/Footer';
import ContactSection from '../contactSession/ContactSection';

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <Alliances />
      <Regulation />
      <ContactSection/>
      <Footer />
    </div>
  );
}
