import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";

import './RoadmapComp.scss';

const roadmapContentData = [
  {
    title: 'Phase 1',
    subtitle: 'What is Lorem Ipsum?',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: 'Phase 2',
    subtitle: 'Why do we use it?',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
  },
  {
    title: 'Phase 3',
    subtitle: 'Where can I get some?',
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
  }
]

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp d-flex flex-column justify-content-center align-items-center">
      <Row className="roadmap-comp-title">
        <TitleComp title={'Roadmap'}
                   subtitle={`"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."`}/>
      </Row>
      <div className="roadmap-comp-content">
        {
          roadmapContentData.map((val, index) => (
            <div key={index} className="content-item">
              <div className="item-header d-flex justify-content-center align-items-center">
                <div className="header-title">
                  <p>{val.title}</p>
                </div>
              </div>
              <div className="item-content">
                <h6>{val.subtitle}</h6>
                <p>{val.content}</p>
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  );
};

export default RoadmapComp;