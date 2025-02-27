import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
    </div>
  );
}

export default App;
