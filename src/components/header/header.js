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
    <div className="header">
      <Logos />
      <Slide top>
        <Navbar />
      </Slide>
    </div>
  );
};

export default Header;
