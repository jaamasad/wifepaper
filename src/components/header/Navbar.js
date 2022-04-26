import React from "react";
import "./navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  return (
    <ul className="navbar">
      <li>
        <Link className="navitems" to="benifits" smooth duration={800}>
          Benifits
        </Link>
      </li>
      <li>
        <Link className="navitems" to="roadmap" smooth duration={800}>
          Roadmap
        </Link>
      </li>
      <li>
        <Link className="navitems" to="faqs" smooth duration={800}>
          FAQS
        </Link>
      </li>
      <li>
        <Link className="navitems" to="discord" smooth duration={800}>
          Discord
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
