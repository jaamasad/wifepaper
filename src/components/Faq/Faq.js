import React, { useEffect } from "react"
import "./faq.css"
import Slide from "react-reveal/Slide"
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow"

/**
 * @author
 * @function Faq
 **/
const FAQ = [
  {
    heading: "What is Morsel Protocol?",
    text: "Morsel Protocol is a set of products that are designed to lock liquidity into Harmony ONE projects. These products enable signaling of support to neighboring projects and their investors. OneBite is an index fund that can be held in project treasuries to gain diversified exposure to Harmony ONE protocols while signaling that they support the ecosystem. Wifely Internet Money (WIM), a stablecoin that is collateralized by OneBite, can similarly be used in Liquidity Pairs to signal the same support.",
  },
  {
    heading: "What is OneBite?",
    text: "OneBite is an Index fund offered by Morsel Protocol that passively generates yields from lending, liquidity mining, vaults, staking, initial DEX offerings and even arbitration opportunities within the Harmony One ecosystem (providing reliable Beta).",
  },
  {
    heading: "What is Wifely Internet Money (WIM)?",
    text: "WIM is the world’s first Companion Stablecoin. Its adoption will support projects throughout the Harmony ONE ecosystem.",
  },
  {
    heading: "What is a Companion Stablecoin?",
    text: "The term refers to an over-collateralized Stablecoin that supports a particular ecosystem. Since it locks up capital in local protocols it is a good “companion”.<br /><br /> Our vision is that adoption of Companion Stablecoins will become a new standard throughout crypto as a way for projects to signal support by using it in their Liquidity Pairs.  After all, why waste support on Coinbase or Binance when your choice in Stablecoin can generate <strong>goodwill</strong> and <strong>attract investors</strong> from other projects?",
  },
  {
    heading: "How will development be funded?",
    text: "Morsel Protocol will initially fund its development through an IMO (Initial Mint Offering), selling 3000 TradWife NFTs.<br /><br />A secondary fundraising round will be scheduled at a future date offering 7.5% of the MORSEL supply to IDO participants. ",
  },
  {
    heading: "How will raised funds be deployed?",
    text: "Our Treasury will take a conservative approach and raised funds will be mostly re-invested.  Development will be funded, on a shoestring basis, off the EARNINGS from those investments.  This will largely preserve the raised capital and make Morsel Protocol bear-market resistant (as we will ALWAYS be able to continue funding development).",
  },
  {
    heading: "What is a TradWife?",
    text: "TradWifes are our OG NFT collection that is inspired by Proverbs 31.  In that proverb, it describes a capable wife who is skilled in investments, management, farming, trading, saving and is generally hard working.<br /><br />Our TradWife NFT will do all this for you passively by generating MORSEL, with 35% of the total supply set aside for holders from staking alone! MORSEL earns fees when the TradWifes cook up OneBite (an index fund where they diversify investor funds).<br /><br />Our intention is for early investors to gain majority control of the MORSEL token supply. Beyond Harmony, TradWife NFTs will bring rewards for every subsequent interlocking project we launch. ",
  },
  {
    heading: "What can a TradWife NFT do for you?",
    text: "<img src='/assets/images/tradewife-faq.jpg' />",
  },
  {
    heading: "What is MORSEL? ",
    text: "MORSEL is the token earned by staking TradWife NFTs. It can be held, made into liquidity pairs or banked as xMORSEL (a fee-earning governance token). <strong>Banking</strong> is its primary utility where it will earn fees from OneBite minting (and later additionally from <strong>WIM</strong> minting and liquidations)<br /><br />MORSEL may also play a role when TradWife NFTs start making babies. ",
  },
  {
    heading: "What about Tokenomics? MORSEL Wifenomics?",
    text: "<img src='/assets/images/moral-faq.jpg' />",
  },
  {
    heading: "OneBite Tokenomics?",
    text: "<ul><li>Uncapped Supply</li><li>Minted/Burned as capital enters/leaves the MORSEL dApp</li></ul>",
  },
  {
    heading: "Will There Be a Game?",
    text: "We are one of those rare protocols on Harmony ONE that is NOT a game.  That said, we are already forming partnerships with multiple games throughout the ecosystem and will have some presence in <strong>Tranquility City</strong> and <strong>Meta-Humanoids</strong> (as examples).<br /><br />We have lots of ideas rolling around but, at this point, it is best to view <strong>TradWifes</strong> and <strong>MORSEL</strong> as your favorite non-gaming Harmony ONE plays. ",
  },
  {
    heading: "Other Expansion plans?",
    text: "After we have proven the concept of our suite of products on Harmony ONE, we will launch satellite Protocols on additional blockchains.  Each additional ecosystem will provide an opportunity to reward our OG Harmony ONE investors.",
  },
]

const Faq = (props) => {
  useEffect(() => {
    const items = document.querySelectorAll(".accordion button")

    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded")

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false")
      }

      if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true")
      }
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion))
  }, [])
  return (
    <div className="FaqContainer" id="faqs">
      <Slide bottom>
        {/* <div className="faqs-container">
          <div className="faq">
            {FAQ.map((item, key) => {
              return (
                <div key={key} className="faq-line">
                  <input id={`faq-${key}`} type="checkbox" />
                  <label for={`faq-${key}`}>
                    <span className="question-arrow">
                      <p className="faq-heading">{item.heading}</p>
                      <div className="down-arrow">
                        <DownArrow />{" "}
                      </div>
                    </span>
                    <p className="faq-text" dangerouslySetInnerHTML={{__html: item.text}} />
                  </label>
                </div>
              )
            })}
          </div>
        </div> */}
        {/* <div className="faq-container">
          <div className="holderBenefitsHeader">FAQ</div>
          <div className="accordion">
            {FAQ.map((item, key) => (
              <div className="accordion-item" key={key}>
                <button id={`accordion-button-${key}`} aria-expanded="false">
                  <span className="accordion-title">
                    {item.heading}
                  </span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                <p className="faq-text" dangerouslySetInnerHTML={{__html: item.text}} />
                </div>
              </div>
            ))}
            
          </div>
        </div> */}
        <div className="holderBenefitsHeader">FAQ</div>

        <br />

        <div class="content">
          {FAQ.map((item, key) => {
            return (
              <div key={key}>
                <input
                  type="checkbox"
                  id={`question${key}`}
                  name="q"
                  class="questions"
                />
                <div class="plus">+</div>
                <label for={`question${key}`} class="question">
                {item.heading}
                </label>
                <div class="answers"
                dangerouslySetInnerHTML={{__html: item.text}}
                 />
                
              </div>
            )
          })}
        </div>
      </Slide>
    </div>
  )
}

export default Faq
