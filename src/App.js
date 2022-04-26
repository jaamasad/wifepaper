import React, { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { connect } from "./redux/blockchain/blockchainActions"
import { fetchData } from "./redux/data/dataActions"
import * as s from "./styles/globalStyles"
import styled from "styled-components"
import Slide from "react-reveal/Slide";
import i1 from "./assets/images/1.png"
import Select from "react-select"
import Discord from "./components/discord/discord"
import Header from "./components/header/header"
import HolderBenefits from "./components/holdersBenefit/holderBenefits"
import InfoGraphics from "./components/info/InfoGraphics"
import Faq from "./components/Faq/Faq"
import "./style.css"

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  @media (min-width: 767px) {
    width: 350px;
    height: 350px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`

function Dapp() {
  const dispatch = useDispatch()
  const blockchain = useSelector((state) => state.blockchain)
  const data = useSelector((state) => state.data)
  const [feedback, setFeedback] = useState("Maybe it's your lucky day.")
  const [claimingNft, setClaimingNft] = useState(false)

  const [selectedClient, setSelectedClient] = useState()

  function handleSelectChange(event) {
    setSelectedClient(event.target.value)
  }
  console.log(selectedClient)

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return
    }
    setFeedback("Minting your TradWife...")
    setClaimingNft(true)
    blockchain.smartContract.methods
      .mint(_amount)
      .send({
        gasLimit: "285000",
        to: "0xe0eea5840a60d50202636b2bd86f185b3f842fa0",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((2 * _amount).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err)
        setFeedback("Sorry, something went wrong please try again later.")
        setClaimingNft(false)
      })
      .then((receipt) => {
        setFeedback(
          "You are now joined in holy hashimony with a supportive TradWife. Go visit NFTKey.app to view it."
        )
        setClaimingNft(false)
        dispatch(fetchData(blockchain.account))
      })
  }

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account))
    }
  }

  useEffect(() => {
    getData()
  }, [blockchain.account])

  return (
    <s.Screen style={{ backgroundColor: "var(--yellow)" }}>
      <Header />
      <s.Container flex={1} ai={"center"} style={{ padding: 24 }}>
        <s.SpacerMedium />
        
        <Slide bottom>
        <ResponsiveWrapper flex={1} style={{ padding: 24 }}>
          <s.SpacerMedium />
          <s.Container
            flex={1}
            jc={"center"}
            ai={"center"}
            style={{ backgroundColor: "#383838", padding: 24 }}
          >
            {Number(data.totalSupply) === 3000 ? (
              <>
                <s.TextTitle style={{ textAlign: "center" }}>
                  The sale has ended.
                </s.TextTitle>
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  You can still find TRADWIFES on{" "}
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href={"https://nftkey.app/collection/tradwifes"}
                  >
                    Opensea.io
                  </a>
                </s.TextDescription>
              </>
            ) : (
              <>
                <s.TextTitle style={{ textAlign: "center" }}>
                  1 TRADWIFE costs 2 ONE.
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  Excluding gas fee.
                </s.TextDescription>
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  {feedback}
                </s.TextDescription>
                <s.SpacerMedium />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription style={{ textAlign: "center" }}>
                      Connect to the Harmony ONE network
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault()
                        dispatch(connect())
                        getData()
                      }}
                    >
                      CONNECT
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription style={{ textAlign: "center" }}>
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <div className="acquire-flex">
                      <div className="btn-d-flex">
                        <label className="select" for="slct">
                          Quantity of Wifes?
                        </label>
                        <select
                          id="slct"
                          required="required"
                          value={selectedClient}
                          onChange={handleSelectChange}
                        >
                          <option value="" disabled="disabled">
                            SELECT ACQUIRE
                          </option>
                          <option value="1">1 </option>
                          <option value="2" selected="selected">
                            2
                          </option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11 </option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                        </select>
                      </div>
                      <div>
                        <StyledButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault()
                            claimNFTs(selectedClient)
                            getData()
                          }}
                          className="mint-btn"
                        >
                          {claimingNft ? "BUSY" : "MINT"}
                        </StyledButton>
                      </div>
                    </div>
                  </s.Container>
                )}
              </>
            )}
          </s.Container>
          <s.Container
            flex={1}
            jc={"center"}
            ai={"center"}
          >
            
          <div style={{width:'90%', height:"100%"}}>
            <iframe
              width="100%"
              height="100%"
              allow="fullscreen;"
              src="https://www.youtube.com/embed/Zi8L8E2o5z0"
            ></iframe>
          </div>
          
          </s.Container>
        </ResponsiveWrapper>
          </Slide>
        <s.SpacerSmall />
        <HolderBenefits />
        <InfoGraphics />
        <Faq />
        <Discord />
      </s.Container>

    </s.Screen>
  )
}

export default Dapp
