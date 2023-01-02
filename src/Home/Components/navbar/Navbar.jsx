import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../../assets/SunriseLogo.png";
// i used BEM : Block Element Modifier

import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#matches">Matches</a>
    </p>
    <p>
      <a href="#theClub">The Club</a>
    </p>
    <p>
      <a href="#schedule">Schedule</a>
    </p>
    <p>
      <a href="#newsAndGarelly">News</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="fanclub__navbar">
      <div className="fanclub__navbar-links">
        <div className="fanclub__navbar-links_logo">
          <img src={logo} alt="App Logo" />
        </div>
        <div className="fanclub__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="fanclub__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="fanclub__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            cursor="pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            cursor="pointer"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="fanclub__navbar-menu_container scale-up-center">
            <div className="fanclub__navbar-menu_container-links">
              <Menu />
              <div className="fanclub__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
