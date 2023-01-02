import React from "react";
import "./footer.css";
import platformLogo from "../../../assets/SunriseLogo.png";

const Footer = () => {
  return (
    <div className="platform__footer section__padding">
      <div className="platform__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future Fan club member?
        </h1>
      </div>
      <div className="platform__footer-btn">
        <p>Join Your Favorite Team early</p>
      </div>
      <div className="platform__footer-links">
        <div className="platform__footer-links_logo">
          <img src={platformLogo} alt="logo" />
          <p>location location location</p>
        </div>
        <div className="platform__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="platform__footer-links_div">
          <h4>The Club</h4>
          <p>Terms & Conditions</p>
          <p>Privacy policy</p>
          <p>Contact</p>
        </div>
        <div className="platform__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Nyagatare Rwanda</p>
          <p>+250 788 888 888</p>
          <p>info@footbalfanclubplatform.sunrise.com</p>
        </div>
      </div>
      <div className="platform__footer-copyright">
        <p>
          &copy; done by Joel KWIHANGANA and Jean Claude IRADUKUNDA. All right
          resreved
        </p>
      </div>
    </div>
  );
};

export default Footer;
