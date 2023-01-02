import React from "react";
import {
  Article,
  Brand,
  CallToAction,
  Feature,
  Navbar,
} from "./Home/Components";
import {
  Blog,
  Features,
  Header,
  Possibility,
  WhatPlatform,
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
        <Blog />
      </div>
    </>
  );
};

export default App;
