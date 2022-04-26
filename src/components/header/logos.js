import React from "react";
import "./logos.css";
import Logo from "../../assets/images/site/Logo.png";
import MorselLogo from "../../assets/images/site/MorselLogo.png";
import Slide from "react-reveal/Slide";

/**
 * @author
 * @function Logos
 **/

const Logos = (props) => {
  return (
    <div className="logoContainer">
      <Slide left>
        <img className="logoImg1" src={Logo} />
      </Slide>
      <Slide right>
        <img className="logoImg2" src={MorselLogo} />
      </Slide>
    </div>
  );
};

export default Logos;
