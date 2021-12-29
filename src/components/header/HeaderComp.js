import React, {useEffect, useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import LogoComp from "../logo/LogoComp";
import {useSelector} from "react-redux";
import {FiInstagram, ImFacebook, ImTwitter, ImYoutube,SiDiscord} from "react-icons/all";

import './HeaderComp.scss';

const headerMenu = [
  {
    label: "Home",
    path: "#home"
  },
  {
    label: "About",
    path: "#about"
  },
  // {
  //   label: "DAO",
  //   path: "#dao"
  // },
  {
    label: "Roadmap",
    path: "#roadmap"
  },
  {
    label: "FAQs",
    path: "#faqs"
  },
  {
    label: "Team",
    path: "#team"
  }
]

const HeaderComp = ({connectBtnClick}) => {
  const blockchain = useSelector((state) => state.blockchain);
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffsetY(window.pageYOffset);
    };
  }, []);
  return (
    <Navbar collapseOnSelect fixed={"top"} expand="lg" className={`header-comp ${offsetY !== 0 && 'header-active'}`}>
      <Container className="header-comp-container">
        <Navbar.Brand href="#home" className="header-comp-logo">
          <LogoComp/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header-comp-toggle-custom"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="header-comp-custom-container">
          <Nav className="justify-content-around align-items-center header-comp-left-custom">
            {
              headerMenu.map((val, index) => (
                <div className="header-comp-items">
                  <Nav.Link key={index} href={val.path}>{val.label}</Nav.Link>
                </div>
              ))
            }
            <div className="header-comp-items social-items d-flex justify-content-center align-items-center">
              <Nav.Link className="social-item" href="#"><ImTwitter/></Nav.Link>
              {/*<Nav.Link className="social-item" href="#"><ImFacebook/></Nav.Link>*/}
              {/*<Nav.Link className="social-item" href="#"><ImYoutube/></Nav.Link>*/}
              <Nav.Link className="social-item" href="https://discord.gg/egdbc6M3"><SiDiscord/></Nav.Link>
              {/*<Nav.Link className="social-item" href="#"><FiInstagram/></Nav.Link>*/}
            </div>
            {
              !blockchain.account && (
                <div className="header-comp-items">
                  <button className="connect-btn header-comp-btn-custom" onClick={connectBtnClick}>Connect wallet
                  </button>
                </div>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComp;