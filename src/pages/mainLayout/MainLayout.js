import React from 'react';
import {Container, Row} from "react-bootstrap";
import HomepageComp from "../../components/homepage/HomepageComp";
import AboutComp from "../../components/about/AboutComp";
import DaoComp from "../../components/dao/DaoComp";
import RoadmapComp from "../../components/roadmap/RoadmapComp";

const MainLayout = () => {
  return (
    <Container fluid>
      <Row>
        <HomepageComp/>
      </Row>
      <Row>
        <AboutComp/>
      </Row>
      <Row>
        <DaoComp/>
      </Row>
      <Row>
        <RoadmapComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;