import React from "react";
import { PortfolioHero } from "./components/PortfolioHero";
import About from "./components/About";

export default function App() {
  return (
    <div>
      <PortfolioHero />
      <About/>
      {/* Later: About, Projects, Contact */}
    </div>
  );
}
