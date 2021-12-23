import React from 'react';
import {Container} from "react-bootstrap";
import {FiInstagram, ImFacebook, ImLocation, ImMail, ImPhone, ImTwitter, ImYoutube} from "react-icons/all";

import './FooterComp.scss';

const FooterComp = () => {
  return (
    <Container fluid className="footer-comp d-flex justify-content-center align-items-center">
      <div className="footer-comp-container">
        <div className="footer-comp-content d-flex flex-column justify-content-center align-items-center">
          <h6>JOIN THE COMMUNITY</h6>
          <div className="social d-flex justify-content-evenly align-items-center">
            <a href="#"><ImTwitter/></a>
            <a href="#"><ImFacebook/></a>
            <a href="#"><ImYoutube/></a>
            <a href="#"><FiInstagram/></a>
          </div>
        </div>
        <div className="footer-comp-bottom">
          <p className="title">You can reach us at:</p>
          <div className="contact d-flex flex-row justify-content-evenly align-items-center">
            <p className="email"><ImMail/> hello@abc.com</p>
            <p className="phone"><ImPhone/> (123) 456 789</p>
            <p className="address"><ImLocation/> 123 Anywhere St., Any City Any State, Country</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterComp;