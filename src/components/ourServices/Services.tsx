
import ContactSection from '../contactSession/ContactSection';
import './Services.css';
import BusinessUnits from '../businessUnits/BusinessUnits';

import Footer from '../footer/Footer';
const Services = () => {
 

  return (
    <div className="services-page">
      <BusinessUnits />
      <ContactSection />
      <Footer/>
    </div>
  );
};

export default Services;
