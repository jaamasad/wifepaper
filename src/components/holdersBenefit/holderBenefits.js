import React from "react";
import "./holderBenefits.css";
import Slide from "react-reveal/Slide";
/**
 * @author
 * @function HolderBenefits
 **/

const HolderBenefits = (props) => {
  return (
    <div className="holderBenefitsContainer" id="benifits">
      <div className="holderBenefitsHeader">Holder Benefits</div>
      <Slide bottom>
        <div className="primaryBenifits">
          <div className="primaryBenifitsHeader">PRIMARY BENIFITS</div>
          <div className="primaryBenifitsInnerContainer">
            <div
              className="primaryBenifitsInnerContent"
              style={{ marginTop: "40px" }}
            >
              <div className="primaryBenifitsInnerContentRow1">
                <div className="row-item-top-left row-item bg-row1">
                  NFT Staking
                </div>
                <div className="row-item bg-row1">Royalities</div>
                <div className="row-item bg-row1">Dividends</div>
                <div className="row-item bg-row1">Matchmaker Airdrop</div>
                <div className="row-item-bottom-left row-item bg-row1">
                  Breading
                </div>
              </div>
              <div className="primaryBenifitsInnerContentRow2">
                <div className="row-item2-top-right row-item2 bg-row2">
                  16,800 MORSEL - $966 Based on IDO Price (Projection-Only)
                </div>
                <div className="row-item2 bg-row2">
                  100% Re-Sale Royalities Airdropped Until NFT Staking
                </div>
                <div className="row-item2 bg-row2">
                  Payouts Begin after NFT Staking ends
                </div>
                <div className="row-item2 bg-row2">
                  Every 2x TradWifes get 1 AVAX NFT Airdrop + More Staking
                </div>
                <div className="row-item-bottom-right row-item2 bg-row2">
                  Future Chain Allocations
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <div className="primaryBenifits giveaway">
        <Slide bottom>
          <div className="primaryBenifitsInnerContainer">
            <div className="primaryBenifitsInnerContent">
              <div className="primaryBenifitsInnerContentRow1">
                <div className="giveaway-row bg-giveawayrow1">RANGE</div>
                <div className="row-item-top-left row-item bg-row3">
                  Every Mint
                </div>
                <div className="row-item bg-row3">First 2500</div>
                <div className="row-item bg-row3">First 2000</div>
                <div className="row-item bg-row3" style={{ height: "80px" }}>
                  First 1500
                </div>
                <div className="row-item bg-row3">First 1000</div>
                <div className="row-item-bottom-left row-item bg-row3">500</div>
              </div>
              <div className="primaryBenifitsInnerContentRow2">
                <div className="giveaway-row bg-giveawayrow2">
                  GIVEAWAY BENIFITS (CHANCE TO WIN)
                </div>
                <div className="row-item2-top-right row-item2 bg-row4">
                  5 Gens Whales + 5000 USDC
                </div>
                <div className="row-item2 bg-row4">
                  Beachfront CU Land + 3 Wizards
                </div>
                <div className="row-item2 bg-row4">
                  10 Dingo + Cosmic Universe (CU) Land
                </div>
                <div className="row-item2 bg-row4" style={{ height: "80px" }}>
                  2X Tranquility City Apartments, Chibis, Dingos, Gen0 Azans,
                  Reflectaverse Badges and Gen0 Whales
                </div>
                <div className="row-item2 bg-row4">
                  10 Dingos + Tranquility City Apartment
                </div>
                <div className="row-item-bottom-right row-item2 bg-row4">
                  Mystic Aipine CU Land + OG Chibi Cat + 2 K&P Knights & Much
                  More
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default HolderBenefits;
