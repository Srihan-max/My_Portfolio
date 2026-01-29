
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "src/style.css";

import Home from "src/pages/Home.jsx";
import About from "src/pages/About.jsx";
import Projects from "src/pages/Projects.jsx";
import Experience from "src/pages/Experience.jsx";
import Contact from "src/pages/Contact.jsx";

import Navbar from "src/components/Navbar.jsx";
import Footer from "src/components/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
