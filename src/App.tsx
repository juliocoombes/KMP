// App.tsx
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

import Services from "./components/ourServices/Services";
import AboutUs from "./components/aboutUs/AboutUs";
import Home from "./components/home/Home";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
}
