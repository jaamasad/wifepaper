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
            <a href="https://twitter.com/TradWifeNFT" target="__blank"><Twitter /></a>
            <a href="https://discord.gg/23bydrcvpv" target="__blank"><Discord /></a>
            <a href="https://www.youtube.com/watch?v=Zi8L8E2o5z0" target="__blank"><Youtube /></a>
            <a href=" https://morsel-protocol.gitbook.io/morsel-protocol/C2n5D3itJDis3ScMp6X9" target="__blank"><Gitbook /></a>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Footer;
