import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/data/dataActions";
import HeaderComp from "../header/HeaderComp";
import * as s from "../../styles/globalStyles";
import styled from "styled-components";
import {notification} from 'antd';
import {connect} from "../../redux/blockchain/blockchainActions";
import Img1 from '../../assets/imgs/homeImg1.png';
import Img2 from '../../assets/imgs/homeImg2.png';
import Img3 from '../../assets/imgs/homeImg3.png';
import Img4 from '../../assets/imgs/homeImg4.png';
import Logo from '../../assets/imgs/logo.png';
import './HomepageComp.scss';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
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
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);

  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  min-height: 300px;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

const HomepageComp = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });
  
  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };
  
  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };
  
  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };
  
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  
  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };
  
  useEffect(() => {
    getConfig();
  }, []);
  
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  
  const onConnectBtnClick = (e) => {
    e.preventDefault();
    dispatch(connect());
    getData();
  };
  
  return (
    <Container fluid className="homepage-comp page-bg">
      <Row className="homepage-comp-header">
        <HeaderComp connectBtnClick={onConnectBtnClick}/>
      </Row>
      <Container
        className="homepage-comp-container comp-margin-top d-flex justify-content-center align-items-center">
        {
          blockchain.errorMsg && notification.info({
            message: `Error`,
            description: blockchain.errorMsg,
            placement: 'bottomRight',
          })
        }
        <Row className="homepage-comp-content d-flex justify-content-center align-items-center">
          {/*<Col lg={6} md={7} sm={12} className="comp-content-img">*/}
          {/*  /!*<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab aliquam, animi asperiores*!/*/}
          {/*  /!*    aut et*!/*/}
          {/*  /!*    exercitationem facilis fuga minus nisi nulla odit omnis praesentium ratione rerum sapiente*!/*/}
          {/*  /!*    sunt!*!/*/}
          {/*  /!*    Aliquid, consequatur?</h1>*!/*/}
          {/*  /!*<button className="connect-btn" onClick={() => {*!/*/}
          {/*  /!*    window.location = '#about'*!/*/}
          {/*  /!*}}>Read more*!/*/}
          {/*  /!*</button>*!/*/}
          {/*  /!*<div className="img-left">*!/*/}
          {/*  /!*    <img src={Img1} alt="turtle-nft" className="img-item"/>*!/*/}
          {/*  /!*    <img src={Img2} alt="turtle-nft" className="img-item"/>*!/*/}
          {/*  /!*</div>*!/*/}
          {/*  /!*<div className="img-right">*!/*/}
          {/*  /!*    <img src={Img3} alt="turtle-nft" className="img-item"/>*!/*/}
          {/*  /!*    <img src={Img4} alt="turtle-nft" className="img-item"/>*!/*/}
          {/*  /!*</div>*!/*/}
          {/*  <img src={Logo} alt="space-turtle"/>*/}
          {/*</Col>*/}
          <div
            className="comp-content-wallet">
            <div className="img-container d-flex justify-content-center align-items-center">
              <img src={Logo} alt="space-turtle"/>
            </div>
            <div className="content-container">
              <h2 className="homepage-title">WELCOME TO SPACETURTLES COLLECTIONS</h2>
              {
                blockchain.account && (
                  <ResponsiveWrapper data-aos="fade-up" flex={1} style={{
                    padding: 24,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }} test>
                    <s.Container
                      flex={2}
                      jc={"center"}
                      ai={"center"}
                      style={{
                        // backgroundColor: "rgba(250,250,250,.5)",
                        padding: 12,
                        borderRadius: 24,
                        // border: "4px dashed #0ff",
                        // boxShadow: "0 1px 11px 2px #0ff",
                        minHeight: "260px"
                      }}
                    >
                      {
                        blockchain.account ? (
                          <>
                            <s.TextTitle
                              style={{
                                textAlign: "center",
                                fontSize: 50,
                                fontWeight: "bold",
                                color: "var(--accent-text)",
                              }}
                            >
                              {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                            </s.TextTitle>
                            <s.TextDescription
                              style={{
                                textAlign: "center",
                                color: "var(--primary-text)",
                              }}
                            >
                              <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                              </StyledLink>
                            </s.TextDescription>
                            <s.SpacerSmall/>
                            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                              <>
                                <s.TextTitle
                                  style={{textAlign: "center", color: "var(--accent-text)"}}
                                >
                                  The sale has ended.
                                </s.TextTitle>
                                <s.TextDescription
                                  style={{textAlign: "center", color: "var(--accent-text)"}}
                                >
                                  You can still find {CONFIG.NFT_NAME} on
                                </s.TextDescription>
                                <s.SpacerSmall/>
                                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                                  {CONFIG.MARKETPLACE}
                                </StyledLink>
                              </>
                            ) : (
                              <>
                                <s.TextTitle
                                  style={{textAlign: "center", color: "var(--accent-text)"}}
                                >
                                  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                                  {CONFIG.NETWORK.SYMBOL}.
                                </s.TextTitle>
                                <s.SpacerXSmall/>
                                <s.TextDescription
                                  style={{textAlign: "center", color: "var(--accent-text)"}}
                                >
                                  Excluding gas fees.
                                </s.TextDescription>
                                <s.SpacerSmall/>
                                {blockchain.account === "" ||
                                blockchain.smartContract === null ? (
                                  <s.Container ai={"center"} jc={"center"}>
                                    <s.TextDescription
                                      style={{
                                        textAlign: "center",
                                        color: "var(--accent-text)",
                                      }}
                                    >
                                      Connect to the {CONFIG.NETWORK.NAME} network
                                    </s.TextDescription>
                                    <s.SpacerSmall/>
                                    {blockchain.errorMsg !== "" ? (
                                      <>
                                        <s.SpacerSmall/>
                                        <s.TextDescription
                                          style={{
                                            textAlign: "center",
                                            color: "var(--accent-text)",
                                          }}
                                        >
                                          {blockchain.errorMsg}
                                        </s.TextDescription>
                                      </>
                                    ) : null}
                                  </s.Container>
                                ) : (
                                  <>
                                    <s.TextDescription
                                      style={{
                                        textAlign: "center",
                                        color: "var(--accent-text)",
                                      }}
                                    >
                                      {feedback}
                                    </s.TextDescription>
                                    <s.SpacerMedium/>
                                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                                      <StyledRoundButton
                                        style={{lineHeight: 0.4}}
                                        disabled={claimingNft ? 1 : 0}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          decrementMintAmount();
                                        }}
                                      >
                                        -
                                      </StyledRoundButton>
                                      <s.SpacerMedium/>
                                      <s.TextDescription
                                        style={{
                                          textAlign: "center",
                                          color: "var(--accent-text)",
                                        }}
                                      >
                                        {mintAmount}
                                      </s.TextDescription>
                                      <s.SpacerMedium/>
                                      <StyledRoundButton
                                        disabled={claimingNft ? 1 : 0}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          incrementMintAmount();
                                        }}
                                      >
                                        +
                                      </StyledRoundButton>
                                    </s.Container>
                                    <s.SpacerSmall/>
                                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                                      <StyledButton
                                        disabled={claimingNft ? 1 : 0}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          claimNFTs();
                                          getData();
                                        }}
                                      >
                                        {claimingNft ? "BUSY" : "BUY"}
                                      </StyledButton>
                                    </s.Container>
                                  </>
                                )}
                              </>
                            )}
                            <s.SpacerMedium/>
                          </>
                        ) : (
                          <a className="btn-neon" onClick={onConnectBtnClick}>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            Connect your wallet here
                          </a>
                        )
                      }
                    </s.Container>
                  </ResponsiveWrapper>
                )
              }
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default HomepageComp;