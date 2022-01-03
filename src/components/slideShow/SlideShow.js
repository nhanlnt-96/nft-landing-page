import React from 'react';
import {Container} from "react-bootstrap";
import {Slide} from 'react-slideshow-image';

import './SlideShow.scss';

const SlideShow = ({slideImages}) => {
    const properties = {
      duration: 1000,
      slidesToShow: 7,
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