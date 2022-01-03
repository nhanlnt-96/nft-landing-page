import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";

import './FAQsComp.scss';
import TitleComp from "../title/TitleComp";

const faqsData = [
  {
    question: 'HOW DO I GET A SPACE TURTLE??',
    answer: ["You mint it at our website (it's in development)."]
  },
  {
    question: 'WHEN ARE THE SPACE TURTLES DROPPING?',
    answer: ["We will be launching the Turtlemint in January, and only the Whitelisted will be able to mint the Space Turtles at a discounted price of 0.05 ETH and get the biggest chance of getting a rare Space Turtle with a flag."]
  },
  {
    question: 'WHAT WILL THE PRICE BE FOR THE SPACE TURTLES?',
    answer: ["The Turtlemint (Presale) will cost 0.055 ETH and after the first 1000 is minted it will cost 0.07 ETH."]
  },
  {
    question: 'WHAT TYPE OF TOKENS ARE THE SPACE TURTLES?',
    answer: ["Space Turtles is an ERC-721 token and all images are hosted on IPFS and that means that files stored on IPFS are resistant to tampering and censorship. So they are here with us in eternity."]
  },
  {
    question: 'HOW MANY SPACE TURTLES SHOULD I MINT?',
    answer: ["Well, honestly that's not for me to answer. Only you can decide how much you can afford and how much you can invest in the project. But one thing is for sure and that is the more you mint in the beginning the likelier it is for you to get a Space Turtle with a flag, and that can be resold to us creators for 1 ETH or even more if you decide to hold on to it. It's totally up to you but the chance of actually getting a Space Turtle in the first round is way higher than in the other ones."]
  },
  {
    question: 'HOW DO I GET WHITELISTED?',
    answer: ["You can get Whitelisted in 3 ways:", "- By inviting the most people in 24h, and commenting on our post, and retweeting it on Twitter. No bots or you will get kicked! TOP 10 will get Whitelisted.", "- By reaching level 15 in discord, BUT no spam or useless talk just to get therend or you will be kicked.", "- The one that invites 20 people in 36h (3 days) Let us know the number you have invited per 24h as we reset the invite counter."]
  },
  {
    question: 'Will the price go up for this NFT?',
    answer: ["Nothing in life is guaranteed except death and one more thing in this life, but one thing is certain, we have all the tools and even more to get to the top. If we compare our art, roadmap, team, and connections with other NFT's we can by far say that we are going for the top spot and that is truly my honest opinion. After turtlemint (presale) is over the mintprice will be 0.07 ETH and we don't worry about floor price dropping because we have an intense roadmap that has many points on the way. The HODLers will be the winners at the end for sure because the art minted in the beginning will have much greater value the further we go on the roadmap let alone the value of the art itself. And when we release roadmap 2.0, all those HODLers will be very very happy Space Turtles, and that is the second guarantee we have in life."]
  },
  {
    question: 'How many SpaceTurtles will there be?',
    answer: ["There will be 9000 different SpaceTurtles where 305 will be SUPER rare (those with flags) and amongst the rest, there will be 700 extra rare done with over 500 special handmade traits. Every part of the SpaceTurtles is handcrafted by our artist."]
  },
  {
    question: 'How many rares will there be in the Turtlemint (Presale)?',
    answer: ["We have 254 country flags, 50 state flags. So we have to divide them pretty much equally throughout the minting BUT in the Turtulemint we guarantee that there will be more than in any other mint part throughout our journey. And thats only talking about the flags, there will be more rares without flags as well!"]
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
                    <Accordion.Header>{val.question.toUpperCase()}</Accordion.Header>
                    <Accordion.Body>
                      {val.answer.map((answer, key) => (
                        <p key={key}>{answer}</p>
                      ))}
                    </Accordion.Body>
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