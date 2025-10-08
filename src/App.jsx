import React from "react";
import { PortfolioHero } from "./components/PortfolioHero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <PortfolioHero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* Later: About, Projects, Contact */}
    </div>
  );
}
