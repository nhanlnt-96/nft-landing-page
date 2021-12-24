import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import RoadmapDetail from '../../assets/imgs/roadmapDetail.jpg';

import './RoadmapComp.scss';

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp d-flex flex-column justify-content-center align-items-center">
      <Container className="road-map-comp-container ">
        <div className="roadmap-comp-content comp-margin-top d-flex flex-column justify-content-center align-items-center">
          <Row className="roadmap-comp-title">
            <TitleComp title={'Roadmap'}
                       subtitle={`Space Turtles is a full-time project and it will continue to be following the public sale. Below is what we're working towards in the short term.`}/>
          </Row>
          <Row className="roadmap-comp-content-items">
            <p className="roadmap-subtitle">Future developments will be announced in Roadmap 2.0.</p>
            <img data-aos="flip-left"
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="2000" src={RoadmapDetail} alt="roadmap"/>
          </Row>
        </div>
      </Container>
    </Container>
  );
};

export default RoadmapComp;