import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import Member1 from '../../assets/icons/member1.webp';
import Member2 from '../../assets/icons/member2.webp';
import Member3 from '../../assets/icons/member3.png';
import Member4 from '../../assets/icons/member4.png';

import './TeamComp.scss';

const teamData = [
  {
    name: 'What is Lorem Ipsum?',
    intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ava: Member1
  },
  {
    name: 'What is Lorem Ipsum?',
    intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ava: Member2
  },
  {
    name: 'What is Lorem Ipsum?',
    intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ava: Member3
  },
  {
    name: 'What is Lorem Ipsum?',
    intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ava: Member4
  }
]

const TeamComp = () => {
  return (
    <Container fluid className="team-comp d-flex flex-column justify-content-center align-items-center">
      <Row className="team-comp-title">
        <TitleComp title={'The team'}/>
      </Row>
      <div className="team-comp-content">
        {
          teamData.map((val, index) => (
            <div key={index} className="content-item">
              <div className="item-header d-flex justify-content-center align-items-center">
                <div className="avatar">
                  <img src={val.ava} alt={val.name}/>
                </div>
              </div>
              <div className="item-content">
                <h6>{val.name.toUpperCase()}</h6>
                <p>{val.intro}</p>
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  );
};

export default TeamComp;