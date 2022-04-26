import React from "react"
import "./infographics.css"
import {ArrowCurveUpLeft} from "@styled-icons/fluentui-system-regular/ArrowCurveUpLeft"
import {ArrowCurveUpRight} from "@styled-icons/fluentui-system-filled/ArrowCurveUpRight"
const InfoGraphics = () => {
  return (
    <div className="infographics" id="roadmap">
      <h2 className="info-title">multichain breeding</h2>

      <div className="info-01 info-11">
        <div className="point-arrow" />
        <div className="info-1-left">
          <div className="info-1-left-1">
            <img src="/assets/images/harmony.png" alt="" />
          </div>
          <div className="info-1-left-2">
            <img src="/assets/images/tradwife.png" alt="" />
            <span>TradWife</span>
          </div>
        </div>

        <div className="info-1-right">
          <ul>
            <li>
              <img src="/assets/images/dollar.png" alt="" />
              <span>Royalties</span>
            </li>
            <li>
              <img src="/assets/images/morsel.png" alt="" />
              <span>MORSEL Staking Rewards -  NIBBLE earns fees from AVAX dApps</span>
            </li>
            <li>
              <img src="/assets/images/dollar-2.png" alt="" />
              <span>Dividends</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="info-01 info-02">
      <div className="point-arrow" />
        <div className="info-1-left">
          <div className="info-1-left-1">
            <img src="/assets/images/avax.png" alt="" />
          </div>
          <div className="info-1-left-2">
            <img src="/assets/images/lumberjax-img.png" alt="" />
            <span>Lumberjax</span>
          </div>
        </div>

        <div className="info-1-right">
          <ul>
            <li>
              <img src="/assets/images/nibbles.png" alt="" />
              <span>Royalties</span>
            </li>
            <li>
              <img src="/assets/images/dollar.png" alt="" />
              <span>NIBBLE Staking Rewards -  NIBBLE earns fees from AVAX dApps</span>
            </li>
            <li className="matchmaker">
              <p>
                <strong>MATCHMAKER AIRDROP:</strong> For every two TradWifes you
                hold on Harmony, an AVAX chain Lumberjax will be airdropped to
                same address.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="info-01 info-03">
      <div className="point-arrow" />
        <div className="info3-icon">
          <img src="/assets/images/info-3-icon.png" alt="" />
        </div>
        <div className="info-03-left">
          <div className="info-03-l-uper">
            <p>Fontom (?) NFT (Full Allocation</p>
            <img
              className="point-img"
              src="/assets/images/upper-point-line.png"
              alt=""
            />
            <div className="icon-info-03">
              <div className="text-img">
                <img src="/assets/images/upper-icon1.png" alt="" />
                <span>MUNCH Staking Rewards Earn fess from FTM (?) dApps</span>
              </div>
              <div className="text-img">
                <img src="/assets/images/upper-icon2.png" alt="" />
                <span>Dividends</span>
              </div>
            </div>
          </div>
          <div className="info-03-l-uper">
            <p>Fontom (?) Baby NFT (Smaller Allocation</p>
            <img
              className="point-img"
              src="/assets/images/lower-point-img.png"
              alt=""
            />
            <div className="icon-info-03">
              <div className="text-img">
                <img src="/assets/images/lower-icon1.png" alt="" />
                <span>MUNCH Staking Rewards</span>
              </div>
              <div className="text-img">
                <img src="/assets/images/lower-icon2.png" alt="" />
                <span>
                  Baby Shower Gifts (Cards that give Rewards from Ecosystem
                  Partners)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="info-03-right">
          <ul>
            <li>
              After the first two{" "}
              <strong>chains, chains 3+ will have two stakable NFTS...</strong>
              <br />
              That chain's main NFT for our product suite and a Baby that offers
              a smaller allocation
            </li>
            <li>
              Each <strong>TradWife + Lumber-jax</strong> you hold will e able
              to <strong> for the 3rd, 4th, 5th, etc chain</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="info-01 info-04">
      <div className="info-4-text">
        <p>Future Chains</p>
      </div>
      <div className="info-4-arrow">
        <img src="/assets/images/leftarrow.png" />
      </div>
      <div className="info-4-point">
        <div className="info-4-circle"></div>
        <p>Chain 5</p>
      </div>
      <div className="info-4-arrow">
        <img src="/assets/images/leftarrow.png" />
      </div>
      <div className="info-4-point">
        <div className="info-4-circle"></div>
        <p>Chain 4</p>
      </div>
     
      </div>
    </div>
  )
}

export default InfoGraphics
