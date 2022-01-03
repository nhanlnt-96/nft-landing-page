import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";

import './FAQsComp.scss';
import TitleComp from "../title/TitleComp";

const faqsData = [
    {
        question: 'HOW DO I GET A SPACE TURTLE??',
        answer: "You mint it at our website (it's in development)."
    },
    {
        question: 'WHEN ARE THE SPACE TURTLES DROPPING?',
        answer: "We will be launching the turtlemint on 30th of december, and only the whitelisted will be able to mint" +
            " the space turtles at a discounted price of 0.05 eth and get the biggest chance of getting a rare space turtle with a flag.."
    },
    {
        question: 'WHAT WILL THE PRICE BE FOR THE SPACE TURTLES?',
        answer: "The turtlemint (presale) will cost 0.05 eth and after the first 1000 is minted it will cost 0.07 eth."
    },
    {
        question: 'WHAT TYPE OF TOKENS ARE THE SPACE TURTLES?',
        answer: "Space turtles is an erc-721 token and all images are hosted on ipfs and that means that files stored on ipfs are resistant to tampering and censorship. so they are here with us in eternity."
    },
    {
        question: 'HOW MANY SPACE TURTLES SHOULD I MINT?',
        answer: "Well, honestly that's not for me to answer. only you can decide how much you can afford and how much" +
            " you can invest in the project. but one thing is for sure and that is the more you mint in the beginning the likelier it is for you to get a space turtle with a flag, and that can be resold to us creators for 1 eth or even more if you decide to hold on to it. it's totally up to you but the chance of actually getting a space turtle in the first round is way higher than in the other ones."
    },
    {
        question: 'HOW DO I GET WHITELISTED?',
        answer: "You can get whitelisted in 2 ways: - by inviting the most people in 24h, and commenting on our post," +
            " and retweeting it on twitter. no bots or you will get kicked! top 10 will get whitelisted. - by reaching level 15 in discord, but no spam or useless talk just to get therend or you will be kicked. - the one that invites 20 people in 36h (3 days) let us know the number you have invited per 24h as we reset the invite counter."
    }
]

const FaQsComp = () => {
    return (
        <Container fluid className="faqs-comp page-bg d-flex flex-column align-items-center">
            <Container className="faqs-comp-container">
                <div className="animate-corner-top"/>
                <Row className="faqs-comp-content comp-margin-top">
                    <div className="content-header d-flex justify-content-center align-items-center">
                        {/*<div className="item d-flex justify-content-center align-items-center">*/}
                        {/*    <h6>FAQs</h6>*/}
                        {/*</div>*/}
                        <TitleComp title={'FAQS'}/>
                    </div>
                    <div className="content-detail">
                        <Accordion flush>
                            {
                                faqsData.map((val, index) => (
                                    <Accordion.Item data-aos="fade-up" eventKey={index}>
                                        <Accordion.Header>{val.question}</Accordion.Header>
                                        <Accordion.Body>{val.answer}</Accordion.Body>
                                    </Accordion.Item>
                                ))
                            }
                        </Accordion>
                    </div>
                </Row>
                <div className="animate-corner-bottom"/>
            </Container>
        </Container>
    );
};

export default FaQsComp;