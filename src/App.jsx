import React from "react";
import { PortfolioHero } from "./components/PortfolioHero";
import About from "./components/About";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div>
      <PortfolioHero />
      <About/>
      <Skills/>
      {/* Later: About, Projects, Contact */}
    </div>
  );
}
