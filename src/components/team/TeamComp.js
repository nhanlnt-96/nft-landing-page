import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import TeamAva from '../../assets/imgs/teamAva.jpg';

import './TeamComp.scss';

const teamData = [
  {
    name: 'XXXXXXXx'
  },
  {
    name: 'YYYYYYYY'
  },
  {
    name: 'ZZZZZZZZ'
  },
]

const TeamComp = () => {
  return (
    <Container fluid className="team-comp d-flex flex-column justify-content-center align-items-center">
      <Container className="team-comp-container">
        <div className="team-comp-content comp-margin-top">
          <Row className="team-comp-title">
            <TitleComp title={'The team'}/>
          </Row>
          <div className="team-comp-content-items">
            {
              teamData.map((val, index) => (
                <div data-aos="fade-up" key={index}
                     className="content-item">
                  <div className="item-header d-flex justify-content-center align-items-center">
                    <div className="avatar">
                      <img src={TeamAva} alt={val.name}/>
                    </div>
                  </div>
                  <div className="item-content">
                    <h6>{val.name.toUpperCase()}</h6>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default TeamComp;