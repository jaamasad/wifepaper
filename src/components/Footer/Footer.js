import React from "react";
import Slide from "react-reveal/Slide";
import { Twitter } from "@styled-icons/bootstrap/Twitter"
import { Discord } from "@styled-icons/simple-icons/Discord"
import { Youtube } from "@styled-icons/boxicons-logos/Youtube"
import { Gitbook } from "@styled-icons/simple-icons/Gitbook"
import "./footer.css"


const Footer = (props) => {
  return (
    <div className="Footer">
      <Slide bottom>
        <div className="footer-container">
          <div className="social-link">
            <a href="#"><Twitter /></a>
            <a href="#"><Discord /></a>
            <a href="#"><Youtube /></a>
            <a href="#"><Gitbook /></a>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Footer;
