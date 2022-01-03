import React, {useLayoutEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AboutImg from '../../assets/imgs/aboutImg.jpeg';
import AboutImg1 from '../../assets/imgs/aboutImg1.png';
import AboutImg2 from '../../assets/imgs/aboutImg2.png';
import AboutImg3 from '../../assets/imgs/aboutImg3.png';
import AboutImg4 from '../../assets/imgs/aboutImg4.png';
import TitleComp from "../title/TitleComp";

import './AboutComp.scss';

export const useWindowSize = () => {
    const [currentWidth, setCurrentWidth] = useState(0);
    useLayoutEffect(() => {
        const updateSize = () => {
            setCurrentWidth(window.innerWidth);
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return currentWidth;
};

const AboutComp = () => {
    const currentWidth = useWindowSize();
    return (
        <Container fluid className="about-comp page-bg d-flex justify-content-center align-items-center">
            <Container className="about-comp-container">
                <Row className="about-comp-content comp-margin-top">
                    <div className="about-comp-title">
                        <TitleComp title={'ABOUT US'}/>
                    </div>
                    <div className="about-us-content">
                        <div data-aos="fade-up"
                             className="about-us-img-item d-flex justify-content-center align-items-center">
                            <img src={AboutImg} alt="about-us" style={{width: currentWidth === 1024 && '100%'}}/>
                        </div>
                        <p data-aos="fade-up" className="about-us-text-item about-include-img">We as the creators of the
                            “Space Turtles
                            NFT” aims to illustrate the idea
                            that everything is possible. We chose the turtle, the slowest creature, and space a
                            destination even
                            beyond
                            the top of the world. We created the Space Turtles to portray that if you have a dream and
                            you set
                            yourself
                            on the path to realizing that dream, no matter what your pace is, you can be as slow as a
                            turtle, and what
                            obstacles you face they can be as high as the sky, if you stay loyal to your dream and
                            consistent with
                            your
                            effort you will overcome everything and eventually realize your dreams. We as the creator of
                            the “Space
                            Turtles NFT” want to inspire our community and help them develop high self-esteem,
                            self-assurance and
                            instill confidence in their abilities to fearlessly follow their aspirations and flourish
                            while following
                            their dreams. This is our dream!
                            {/*{*/}
                            {/*    currentWidth >= 1024 && (*/}
                            {/*        <div className="about-img">*/}
                            {/*            <img src={AboutImg1} alt="about-us-turtle"/>*/}
                            {/*            <img src={AboutImg2} alt="about-us-turtle"/>*/}
                            {/*            <img src={AboutImg3} alt="about-us-turtle"/>*/}
                            {/*            <img src={AboutImg4} alt="about-us-turtle"/>*/}
                            {/*        </div>*/}
                            {/*    )*/}
                            {/*}*/}
                        </p>
                        <p data-aos="fade-up" className="about-us-text-item">We have used all national flags to portray
                            that no matter where you come
                            from, if you have hunger to achieve your goals you will succeed. But we didn’t stop there as
                            we also use
                            all
                            the US state flags. As the flag of the US is a source of pride and inspiration for millions
                            of citizens.
                            The
                            stripes and the stars represent the states that are standing together independently under
                            one flag and the
                            red in the US flag represents hardiness and valor, the white represents purity and innocence
                            and finally,
                            the blue represents vigilance, perseverance, and justice. The Stars are the symbol for space
                            and the goal
                            that man has had through ages to explore space and the stripes are the rays of light
                            emanating from the
                            sun
                            and they represent the dawn of a new beginning. We as creators intend to invigorate the
                            community and
                            encourage them to follow their passion and do great things so that they can always raise and
                            wave their
                            flag
                            at the top.</p>
                        <p data-aos="fade-up" className="about-us-text-item">Me and some of our team members have quit
                            their jobs because we wanted to
                            fully devote our time, energy, and talent to the “Space Turtles NFT” project. We needed help
                            to
                            successfully
                            execute the project, so we found people whose mindsets aligned with ours to work together.
                            After putting
                            in
                            so much hard work, research, effort, and utilizing connections with people who have an
                            immense impact in
                            the
                            NFT industry to promote the project, we as the creators of “Space Turtles NFT” are 100% sure
                            that this
                            project will be the next big thing in the world of NFT's. So welcome to our special
                            community where not
                            only
                            will you enjoy the art, get into a great community but also see how the demand after your
                            bellowed art
                            will
                            rise which means that while you are enjoying yourself, your artwork is going up in value. In
                            the future,
                            we
                            will have brief interviews with different podcasts regarding our art and the creators behind
                            it. But for
                            now, just enjoy your stay in our welcoming community and get ready for the next big hit in
                            the NFT world.
                            Welcome fellow Spaceturtle.</p>
                    </div>
                </Row>
            </Container>
        </Container>
    );
};

export default AboutComp;