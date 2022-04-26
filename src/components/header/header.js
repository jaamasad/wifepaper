import React from "react";
import Logos from "./logos";
import Navbar from "./Navbar";
import Slide from "react-reveal/Slide";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <div>
      <Logos />
      <Slide top>
        <Navbar />
      </Slide>
    </div>
  );
};

export default Header;
