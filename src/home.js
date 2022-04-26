import React from "react";
import Discord from "./components/discord/discord";
import Header from "./components/header/header";
import Hero from "./components/Hero/Hero";
import HolderBenefits from "./components/holdersBenefit/holderBenefits";
import InfoGraphics from './components/info/InfoGraphics'

/**
 * @author
 * @function home
 **/

const home = (props) => {
  return (
    <div>
      <Header />
      <Hero />
      <HolderBenefits />
      <InfoGraphics/>
      <Discord />
    </div>
  );
};

export default home;
