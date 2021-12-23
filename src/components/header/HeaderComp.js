import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {connect} from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import {Container, Nav, Navbar} from "react-bootstrap";
import LogoComp from "../logo/LogoComp";

import './HeaderComp.scss';

const headerMenu = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "About",
    path: "#about"
  },
  {
    label: "DAO",
    path: "#dao"
  },
  {
    label: "Roadmap",
    path: "#roadmap"
  },
  {
    label: "Team",
    path: "#team"
  },
  {
    label: "FAQs",
    path: "#faqs"
  }
]

const HeaderComp = () => {
  const [offsetY, setOffsetY] = useState(0);
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
  useEffect(() => {
    window.onscroll = () => {
      setOffsetY(window.pageYOffset);
    };
  }, []);
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className={`header-comp ${offsetY !== 0 && 'header-active'}`}>
      <Container className="header-comp-container">
        <Navbar.Brand href="/" className="header-comp-logo">
          <LogoComp/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header-comp-toggle-custom"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="header-comp-custom-container">
          <Nav className="justify-content-center align-items-center header-comp-left-custom">
            {
              headerMenu.map((val, index) => (
                <div className="header-comp-items">
                  <Nav.Link key={index} href={val.path}>{val.label}</Nav.Link>
                </div>
              ))
            }
          </Nav>
          <Nav className="justify-content-center align-items-center header-comp-right-custom">
            <button className="connect-btn" onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
              getData();
            }}>Connect wallet
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComp;