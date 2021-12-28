import React from 'react';
import {Container} from "react-bootstrap";
import {Slide} from 'react-slideshow-image';
import Img1 from '../../assets/imgs/slideShow1.png';
import Img2 from '../../assets/imgs/slideShow2.png';
import Img3 from '../../assets/imgs/slideShow3.png';
import Img4 from '../../assets/imgs/slideShow4.png';
import Img5 from '../../assets/imgs/slideShow5.png';

import './SlideShow.scss';

const slideImages = [Img1, Img2, Img3, Img4, Img5];

const SlideShow = () => {
    const properties = {
      duration: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      indicators: false,
      pauseOnHover: true,
      prevArrow: <div style={{display: 'none'}}/>,
      nextArrow: <div style={{display: 'none'}}/>
    };
    
    return (
      <Container fluid className="slide-show">
        <Slide {...properties}>
          {
            slideImages.map((val, index) => (
              <div key={index} className="each-slide">
                <div className="item">
                  <img src={val} alt="slide-show"/>
                </div>
              </div>
            ))
          }
        </Slide>
      </Container>
    );
  }
;

export default SlideShow;