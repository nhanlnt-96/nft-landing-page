import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AboutImg from '../../assets/imgs/aboutImg.jpeg';

import './AboutComp.scss';

const AboutComp = () => {
  return (
    <Container fluid className="about-comp d-flex justify-content-center align-items-center">
      <div className="blur-div"/>
      <Row className="about-comp-container">
        <Col lg={6} md={5} sm={12} className="about-comp-left-side d-flex justify-content-center align-items-center">
          <div className="left-side-container d-flex justify-content-center align-items-center">
            <img src={AboutImg} alt="about-img"/>
          </div>
        </Col>
        <Col lg={6} md={7} sm={12} className="about-comp-right-side d-flex justify-content-center align-items-center">
          <div className="right-side-container">
            <h2 className="about-title">Continuity of about us</h2>
            <p className="about-subtitle">We have used all national flags to portray that no matter where you come from,
              if you have hunger to achieve your goals you will succeed. But we didn’t stop there as we also use all the
              US state flags. As the flag of the US is a source of pride and inspiration for millions of citizens. The
              stripes and the stars represent the states that are standing together independently under one flag and the
              red in the US flag represents hardiness and valor, the white represents purity and innocence and finally,
              the blue represents vigilance, perseverance, and justice. The Stars are the symbol for space and the goal
              that man has had through ages to explore space and the stripes are the rays of light emanating from the
              sun and they represent the dawn of a new beginning. We as creators intend to invigorate the community and
              encourage them to follow their passion and do great things so that they can always raise and wave their
              flag at the top.</p>
            
            <p className="about-subtitle">Me and some of our team members have quit their jobs because we wanted to fully devote our time, energy,
              and talent to the “Space Turtles NFT” project. We needed help to successfully execute the project, so we
              found people whose mindsets aligned with ours to work together. After putting in so much hard work,
              research, effort, and utilizing connections with people who have an immense impact in the NFT industry to
              promote the project, we as the creators of “Space Turtles NFT” are 100% sure that this project will be the
              next big thing in the world of NFT's.</p>
            
            <p className="about-subtitle">So welcome to our special community where not only will you enjoy the art, get into a great community but
              also see how the demand after your bellowed art will rise which means that while you are enjoying
              yourself, your artwork is going up in value. In the future, we will have brief interviews with different
              podcasts regarding our art and the creators behind it. But for now, just enjoy your stay in our welcoming
              community and get ready for the next big hit in the NFT world. Welcome fellow Spaceturtle.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutComp;