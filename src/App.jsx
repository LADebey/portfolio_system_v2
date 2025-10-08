// src/App.jsx
import React from "react";
import { PortfolioHero } from "./components/PortfolioHero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      
      <PortfolioHero />

      
      <section id="about">
        <About />
      </section>

      
      <section id="skills">
        <Skills />
      </section>


      <section id="projects">
        <Projects />
      </section>

      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}
