import React from "react"
import "./discord.css"
import { Discord } from "@styled-icons/simple-icons/Discord"
import Slide from "react-reveal/Slide"
/**
 * @author
 * @function Discord
 **/

const DiscordComponent = (props) => {
  return (
    <Slide bottom>
      <div className="banner" id="discord">
        <a href="" className="discordImg">
          <Discord />
        </a>

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
  )
}

export default DiscordComponent
