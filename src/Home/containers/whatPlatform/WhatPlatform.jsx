import React from "react";
import { Feature } from "../../Components";
import "./whatPlatform.css";

const WhatPlatform = () => {
  return (
    <div className="fanclub__whatplatform section__margin" id="theClub">
      <div className="fanclub__whatplatform-feature">
        <Feature
          title="What is Sunrise Football Club"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          impedit sed ullam quasi. Blanditiis enim pariatur dicta consequuntur
          incidunt nam."
        />
      </div>
      <div className="fanclub__whatplatform-heading">
        <h1 className="gradient__text">Become the part of our Greatest Team</h1>
        <p>Join our Team Today</p>
      </div>
      <div className="platform__whatplatform-container">
        <Feature
          title="Title 1"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          impedit sed ullam quasi. Blanditiis enim pariatur dicta consequuntur
          incidunt nam."
        />
        <Feature
          title="Title 2"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          impedit sed ullam quasi. Blanditiis enim pariatur dicta consequuntur
          incidunt nam."
        />
        <Feature
          title="Title 2"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          impedit sed ullam quasi. Blanditiis enim pariatur dicta consequuntur
          incidunt nam."
        />
      </div>
    </div>
  );
};

export default WhatPlatform;
