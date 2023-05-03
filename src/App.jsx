import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import About from "./components/about/About";
import SubHeaderBtn from "./components/subHeader/SubheaderBtn";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <SubHeaderBtn />
    </div>
  );
};

export default App;
