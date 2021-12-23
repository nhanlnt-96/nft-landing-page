import React from 'react';
import {Container, Row} from "react-bootstrap";
import HeaderComp from "../header/HeaderComp";

import './HomepageComp.scss';

const HomepageComp = () => {
  return (
    <Container fluid className="homepage-comp">
      <Row>
        <HeaderComp/>
      </Row>
      <Row className="homepage-comp-content">
        <h1 className="content-title">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit..."</h1>
      </Row>
    </Container>
  );
};

export default HomepageComp;