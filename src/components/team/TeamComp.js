import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import Lyft from '../../assets/imgs/lypt.png';
import Cliff from '../../assets/imgs/cliff.png';
import Sajal from '../../assets/imgs/sajal.png';
import Moore from '../../assets/imgs/moore.png';
import AbuBack from '../../assets/imgs/abuback.png';

import './TeamComp.scss';

const teamData = [
    {
        name: 'Lyft',
        avatar: Lyft,
        position: 'Director & Visionary of SpaceTurtles NFT'
    },
    {
        name: 'Cliff',
        avatar: Cliff,
        position: 'Director of Community & Marketing of SpaceTurtles NFT'
    },
    {
        name: 'Sajal',
        avatar: Sajal,
        position: 'Community leader of SpaceTurtles NFT'
    },
    {
        name: 'Mr. Moore',
        avatar: Moore,
        position: 'Artist of SpaceTurtles NFT'
    },
    {
        name: 'AbuBlack',
        avatar: AbuBack,
        position: 'Smart Contract Engineer & Developer of SpaceTurtles NFT'
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
                                            <img src={val.avatar} alt={val.name}/>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6>{val.name.toUpperCase()}</h6>
                                        <p>{val.position}</p>
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