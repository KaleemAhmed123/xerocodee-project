import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import About from "./components/about/About";
// import SubHeaderBtn from "./components/subHeader/SubheaderBtn";
import HowItWork from "./components/howItWorks/HowItWorks";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <HowItWork />
      <Testimonials />
    </div>
  );
};

export default App;
