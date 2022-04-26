import React from "react";
import "./discord.css";
import DiscordImg from "../../assets/images/site/discord.png";
import Slide from "react-reveal/Slide";
/**
 * @author
 * @function Discord
 **/

const Discord = (props) => {
  return (
    <Slide bottom>
      <div className="banner" id="discord">
        <img src={DiscordImg} className="discordImg" />

        <div className="middle">
          <h1 className="middle-h">Join the community</h1>
          <p className="middle-p">
            Join us to get the news as soon as possible and follow our latest
            announcment
          </p>
        </div>
        <button className="button">Join our discord</button>
      </div>
    </Slide>
  );
};

export default Discord;
