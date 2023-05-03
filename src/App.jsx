import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import About from "./components/about/About";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <About />
    </div>
  );
};

export default App;
