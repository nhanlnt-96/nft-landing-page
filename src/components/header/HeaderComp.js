import React, {useEffect, useState} from 'react';
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
            <button className="connect-btn">Connect wallet</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComp;