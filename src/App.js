import React from "react";
import {
  Article,
  Brand,
  CallToAction,
  Feature,
  Navbar,
} from "./Home/Components";
import {
  FixturesAndResults,
  Features,
  Header,
  Possibility,
  WhatPlatform,
  Footer,
} from "./Home/containers";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <WhatPlatform />
        <Features />
        <Possibility />
        <CallToAction />
        <FixturesAndResults />
        <Footer />
      </div>
    </>
  );
};

export default App;
