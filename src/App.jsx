import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
    </div>
  );
};

export default App;
