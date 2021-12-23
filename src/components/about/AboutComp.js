import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Diamond from '../../assets/imgs/diamond.png';

import './AboutComp.scss';

const AboutComp = () => {
  return (
    <Container fluid className="about-comp d-flex justify-content-center align-items-center">
      <div className="blur-div"/>
      <Row className="about-comp-container">
        <Col lg={6} md={5} sm={12} className="about-comp-left-side d-flex justify-content-center align-items-center">
          <div className="left-side-container d-flex justify-content-center align-items-center">
            <div className="diamond-img d-flex justify-content-center align-items-center">
              <img src={Diamond} alt="diamond-img"/>
            </div>
          </div>
        </Col>
        <Col lg={6} md={7} sm={12} className="about-comp-right-side d-flex justify-content-center align-items-center">
          <div className="right-side-container">
            <h2 className="about-title">What is Lorem Ipsum?</h2>
            <p className="about-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutComp;