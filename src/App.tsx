import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Investments from './components/inversiones/Investments';
import Services from './components/ourServices/Services';
import AboutUs from './components/aboutUs/AboutUs';
import Home from './components/home/Home';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inversiones" element={<Investments />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}