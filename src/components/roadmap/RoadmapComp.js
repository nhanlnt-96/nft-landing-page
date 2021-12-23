import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import RoadmapDetail from '../../assets/imgs/roadmapDetail.jpg';

import './RoadmapComp.scss';

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp d-flex flex-column justify-content-center align-items-center">
      <Row className="roadmap-comp-title">
        <TitleComp title={'Roadmap'}
                   subtitle={`Space Turtles is a full-time project and it will continue to be following the public sale. Below is what we're working towards in the short term.`}/>
      </Row>
      <Row className="roadmap-comp-content">
        <p className="roadmap-subtitle">Future developments will be announced in Roadmap 2.0.</p>
        <img src={RoadmapDetail} alt="roadmap"/>
      </Row>
    </Container>
  );
};

export default RoadmapComp;