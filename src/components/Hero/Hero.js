import React from "react";
import LeftBox from "./leftBox";
import RightBox from "./rightBox";
import "./hero.css";
import Slide from "react-reveal/Slide";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div className="HeroContainer">
      <Slide bottom>
        <LeftBox />
      </Slide>
      <Slide bottom>
        <RightBox />
      </Slide>
    </div>
  );
};

export default Hero;
