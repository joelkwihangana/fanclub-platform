import React from "react";
import "./possibility.css";
import fanOnLaptop from "../../../assets/goooal.png";
const Possibility = () => {
  return (
    <div className="platform__possibility section__padding" id="possibility">
      <div className="platform__possibility-image">
        <img src={fanOnLaptop} alt="possibility" />
      </div>
      <div className="platform__possibility-content">
        <h4>Join us Early to get started</h4>
        <h1 className="gradient__text">
          See Whats happening on Sunsize FC 24/7!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          voluptates alias suscipit consequuntur in aut labore sunt natus optio
          ipsa.
        </p>
        <h4>Sign up or Login Early to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
