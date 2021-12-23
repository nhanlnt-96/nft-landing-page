import React from 'react';
import {Container, Row} from "react-bootstrap";
import HomepageComp from "../../components/homepage/HomepageComp";
import AboutComp from "../../components/about/AboutComp";
import DaoComp from "../../components/dao/DaoComp";
import RoadmapComp from "../../components/roadmap/RoadmapComp";
import TeamComp from "../../components/team/TeamComp";
import HeaderComp from "../../components/header/HeaderComp";
import FAQsComp from "../../components/faqs/FAQsComp";

const MainLayout = () => {
  return (
    <Container fluid>
      <Row>
        <HeaderComp/>
      </Row>
      <Row>
        <HomepageComp/>
      </Row>
      <Row style={{marginTop: '100vh'}}>
        <AboutComp/>
      </Row>
      <Row>
        <DaoComp/>
      </Row>
      <Row>
        <RoadmapComp/>
      </Row>
      <Row>
        <FAQsComp/>
      </Row>
      <Row>
        <TeamComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;