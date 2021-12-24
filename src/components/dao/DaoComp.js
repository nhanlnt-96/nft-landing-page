import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import DaoIcon1 from '../../assets/icons/daoIcon1.png';
import DaoIcon2 from '../../assets/icons/daoIcon2.png';
import DaoIcon3 from '../../assets/icons/daoIcon3.png';

import './DaoComp.scss';

const daoContentData = [
  {
    title: 'Turtle Girl',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam eget neque pretium\n' +
      '              pellentesque. Praesent commodo pulvinar libero, nec tincidunt diam lobortis vel.',
    icon: DaoIcon1
  },
  {
    title: 'Turtle Gang',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam eget neque pretium\n' +
      '              pellentesque. Praesent commodo pulvinar libero, nec tincidunt diam lobortis vel.',
    icon: DaoIcon2
  },
  {
    title: 'Turtle Boy',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam eget neque pretium\n' +
      '              pellentesque. Praesent commodo pulvinar libero, nec tincidunt diam lobortis vel.',
    icon: DaoIcon3
  }
];

const DaoComp = () => {
  return (
    <Container fluid className="dao-comp d-flex flex-column justify-content-center align-items-center">
      <div className="dao-comp-bg"/>
      <Row className="dao-comp-title">
        <TitleComp title={'Turtles Familly'}
                   subtitle={`"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."`}/>
      </Row>
      <div className="dao-comp-content">
        {
          daoContentData.map((val, index) => (
            <div className="content-item d-flex flex-column align-items-center">
              <div className="item-header d-flex justify-content-center align-items-center">
                <div className="item-header-avatar d-flex justify-content-center align-items-center">
                  <img src={val.icon} alt="dao-icon"/>
                </div>
                <div className="item-header-title d-flex align-items-center">
                  <p>{val.title}</p>
                </div>
              </div>
              <div className="item-content d-flex justify-content-center align-items-center">
                <p>{val.content}</p>
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  );
};

export default DaoComp;