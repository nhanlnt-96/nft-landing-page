import React from 'react';
import {Container, Row} from "react-bootstrap";
import HomepageComp from "../../components/homepage/HomepageComp";
import AboutComp from "../../components/about/AboutComp";
// import DaoComp from "../../components/dao/DaoComp";
import RoadmapComp from "../../components/roadmap/RoadmapComp";
import TeamComp from "../../components/team/TeamComp";
import FAQsComp from "../../components/faqs/FAQsComp";
import FooterComp from "../../components/footer/FooterComp";
import SlideShow from "../../components/slideShow/SlideShow";
import StoryComp from "../../components/story/StoryComp";

// import img for slide 1
import Img1 from '../../assets/imgs/slideShow1.png';
import Img2 from '../../assets/imgs/slideShow2.png';
import Img3 from '../../assets/imgs/slideShow3.png';
import Img4 from '../../assets/imgs/slideShow4.png';
import Img5 from '../../assets/imgs/slideShow5.png';
import Img6 from '../../assets/imgs/slideShow6.png';
import Img7 from '../../assets/imgs/slideShow7.png';
import Img8 from '../../assets/imgs/slideShow8.png';
import Img9 from '../../assets/imgs/slideShow9.png';
import Img10 from '../../assets/imgs/slideShow10.png';
import Img11 from '../../assets/imgs/slideShow11.png';
import Img12 from '../../assets/imgs/slideShow12.png';
import Img13 from '../../assets/imgs/slideShow13.png';
import Img14 from '../../assets/imgs/slideShow14.png';
import Img15 from '../../assets/imgs/slideShow15.png';
import Img16 from '../../assets/imgs/slideShow16.png';
import Img17 from '../../assets/imgs/slideShow17.png';
import Img18 from '../../assets/imgs/slideShow18.png';
import Img19 from '../../assets/imgs/slideShow19.png';
import Img20 from '../../assets/imgs/slideShow20.png';
import Img21 from '../../assets/imgs/slideShow21.png';
import Img22 from '../../assets/imgs/slideShow22.png';
import Img23 from '../../assets/imgs/slideShow23.png';
import Img24 from '../../assets/imgs/slideShow24.png';
import Img25 from '../../assets/imgs/slideShow25.png';
import Img26 from '../../assets/imgs/slideShow26.png';
import Img27 from '../../assets/imgs/slideShow27.png';


// import img for slide 2
import Img28 from '../../assets/imgs/slideShowImg2.1.png';
import Img29 from '../../assets/imgs/slideShowImg2.2.png';
import Img30 from '../../assets/imgs/slideShowImg2.3.png';
import Img31 from '../../assets/imgs/slideShowImg2.4.png';
import Img32 from '../../assets/imgs/slideShowImg2.5.png';
import Img33 from '../../assets/imgs/slideShowImg2.6.png';
import Img34 from '../../assets/imgs/slideShowImg2.7.png';
import Img35 from '../../assets/imgs/slideShowImg2.8.png';
import Img36 from '../../assets/imgs/slideShowImg2.9.png';
import Img37 from '../../assets/imgs/slideShowImg2.10.png';
import Img38 from '../../assets/imgs/slideShowImg2.11.png';
import Img39 from '../../assets/imgs/slideShowImg2.12.png';
import Img40 from '../../assets/imgs/slideShowImg2.13.png';
import Img41 from '../../assets/imgs/slideShowImg2.14.png';
import Img42 from '../../assets/imgs/slideShowImg2.15.png';
import Img43 from '../../assets/imgs/slideShowImg2.16.png';
import Img44 from '../../assets/imgs/slideShowImg2.17.png';
import Img45 from '../../assets/imgs/slideShowImg2.18.png';
import Img46 from '../../assets/imgs/slideShowImg2.19.png';
import Img47 from '../../assets/imgs/slideShowImg2.20.png';


const slideImages1 = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20, Img21, Img22, Img23, Img24, Img25, Img26, Img27];

const slideImages2 = [Img28, Img29, Img30, Img31, Img32, Img33, Img34, Img35, Img36, Img37, Img38, Img39, Img40, Img41, Img42, Img43, Img44, Img45, Img46, Img47]

const MainLayout = () => {
  return (
    <Container fluid>
      <Row id="home">
        <HomepageComp/>
      </Row>
      <Row>
        <SlideShow slideImages={slideImages1}/>
      </Row>
      <Row id="about">
        <AboutComp/>
      </Row>
      {/*<Row id="dao">*/}
      {/*  <DaoComp/>*/}
      {/*</Row>*/}
      <Row id="roadmap">
        <RoadmapComp/>
      </Row>
      <Row id="faqs">
        <FAQsComp/>
      </Row>
      <Row id="team">
        <TeamComp/>
      </Row>
      <Row id="story">
        <StoryComp/>
      </Row>
      <Row>
        <SlideShow slideImages={slideImages2}/>
      </Row>
      {/*<Row>*/}
      {/*  <FooterComp/>*/}
      {/*</Row>*/}
    </Container>
  );
};

export default MainLayout;