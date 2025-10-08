import React from "react";
import { PortfolioHero } from "./components/PortfolioHero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <PortfolioHero />
      <About/>
      <Skills/>
      <Projects/>
      {/* Later: About, Projects, Contact */}
    </div>
  );
}
