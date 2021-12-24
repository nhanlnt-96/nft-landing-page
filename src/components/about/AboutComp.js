import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AboutImg from '../../assets/imgs/aboutImg.jpeg';

import './AboutComp.scss';
import {ModalAbout} from "./components";

const AboutComp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container fluid className="about-comp d-flex justify-content-center align-items-center">
      <div className="blur-div"/>
      <Container className="about-comp-container">
        <Row className="about-comp-content comp-margin-top">
          <Col lg={6} md={6} sm={12}
               className="about-comp-left-side d-flex justify-content-center align-items-center">
            <div data-aos="zoom-in" className="left-side-container d-flex justify-content-center align-items-center">
              <img src={AboutImg} alt="about-img"/>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}
               className="about-comp-right-side d-flex justify-content-center align-items-center">
            <div data-aos="zoom-in-up" className="right-side-container">
              <div className="about-title">
                <h2 className="about-title-item">CONTINUITY OF ABOUT US</h2>
              </div>
              <div className="about-subtitle">
                <p className="about-subtitle-item">We have used all national flags to portray that no matter
                  where you come from,
                  if you have hunger to achieve your goals you will succeed. But we didn’t stop there as
                  we also use all the
                  US state flags. As the flag of the US is a source of pride and inspiration for millions
                  of citizens. The
                  stripes and the stars represent the states that are standing together independently
                  under one flag and the
                  red in the US flag represents hardiness and valor, the white represents purity and
                  innocence and finally,
                  the blue represents vigilance, perseverance, and justice. The Stars are the symbol for
                  space and the goal
                  that man has had through ages to explore space and the stripes are the rays of light
                  emanating from the
                  sun and they represent the dawn of a new beginning. We as creators intend to invigorate
                  the community and
                  encourage them to follow their passion and do great things so that they can always raise
                  and wave their
                  flag at the top... <b onClick={() => setModalVisible(true)}>Read more.</b>
                </p>
                
                <ModalAbout text={["Me and some of our team members have quit their jobs because\n" +
                "                  we wanted to fully devote our time, energy,\n" +
                "                  and talent to the “Space Turtles NFT” project. We needed help to successfully execute\n" +
                "                  the project, so we\n" +
                "                  found people whose mindsets aligned with ours to work together. After putting in so much\n" +
                "                  hard work,\n" +
                "                  research, effort, and utilizing connections with people who have an immense impact in\n" +
                "                  the NFT industry to\n" +
                "                  promote the project, we as the creators of “Space Turtles NFT” are 100% sure that this\n" +
                "                  project will be the\n" +
                "                  next big thing in the world of NFT's.", "So welcome to our special community where not only will you\n" +
                "                  enjoy the art, get into a great community but\n" +
                "                  also see how the demand after your bellowed art will rise which means that while you are\n" +
                "                  enjoying\n" +
                "                  yourself, your artwork is going up in value. In the future, we will have brief\n" +
                "                  interviews with different\n" +
                "                  podcasts regarding our art and the creators behind it. But for now, just enjoy your stay\n" +
                "                  in our welcoming\n" +
                "                  community and get ready for the next big hit in the NFT world. Welcome fellow\n" +
                "                  Spaceturtle."]} setModalVisible={setModalVisible} modalVisible={modalVisible}/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutComp;