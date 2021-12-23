import React from 'react';
import {Container, Row} from "react-bootstrap";
import HomepageComp from "../../components/homepage/HomepageComp";

const MainLayout = () => {
  return (
    <Container fluid>
      <Row>
        <HomepageComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;