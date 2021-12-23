import React from 'react';
import {Container} from "react-bootstrap";

import './TitleComp.scss';

const TitleComp = ({title, subtitle}) => {
  return (
    <Container className="title-comp">
      <h6 className="main-title">{title.toUpperCase()}</h6>
      <p className="main-subtitle">{subtitle}</p>
    </Container>
  );
};

export default TitleComp;