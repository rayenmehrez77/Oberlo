import React from "react";
import About from "../Components/About";
import Companies from "../Components/Companies";
import Contact from "../Components/Contact";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Service from "../Components/Service";
import Statistics from "../Components/Statistics";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Companies />
      <About />
      <Service />
      <Features />
      <Statistics />
      <Contact />
    </>
  );
};

export default HomePage;
