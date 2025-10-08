// src/App.jsx
import React from "react";
import { PortfolioHero } from "./components/PortfolioHero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      {/* Hero */}
      <PortfolioHero />

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section (this one is targeted by [VIEW_WORK]) */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section (this one is targeted by [CONTACT]) */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
