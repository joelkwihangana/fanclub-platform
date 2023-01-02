import React from "react";
import "./header.css";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="fanclub__header section__padding" id="home">
      <div className="fanclub__header-content">
        <h1 className="gradient__text"> Sunrise Football Club</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consequatur harum, labore recusandae blanditiis iste vitae. In tempora
          delectus exercitationem ab, consequatur, veniam quos incidunt quidem
          voluptatum placeat tempore nisi?
        </p>
        <div className="fanclub__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get started</button>
        </div>
      </div>
      <div className="fanclub__header-image">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
