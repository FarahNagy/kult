import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import "./home.css";
import CardBox from "./CardBox";
import CardBox2 from "./CardBox2";
import Carousel from "react-elastic-carousel";

const breakPoint = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 550,
    itemsToShow: 2,
  },
  {
    width: 768,
    itemsToShow: 3,
  },
  {
    width: 1200,
    itemsToShow: 4,
  },
];

const Home = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <div className="mainHome">
      <div className="rowOne">
        <div className="divOneHome">
          <p className="wholeText">
            <p className="bubbleHeadingHome">
              <span className="humanizingExperience">HUMANIZING</span>
              <br />
              <span className="yourBrand">YOUR BRAND</span>
              <br />
              <span className="humanizingExperience">EXPERIENCE</span>
            </p>
            <br />

            <p className="bubbleParHome">
              Kult’s creative spectrum ranges from on-ground activations, social
              media handling, content creation, public relations, event planning
              & management, production & BTL marketing, as well as establishing
              one-of-a-kind entertainment platforms.
            </p>
          </p>
          <img src="Arrow 1.png" className="homeArrowOne"></img>
        </div>
        <div className="divTwoHome">
          <p className="wordsOnGirl">
            Kult has successfully created, executed, and managed communication
            programs that have had a great impact across the country - building
            an outstanding reputation for exceling in each service provided and
            influencing the market with its approach to marketing & engagement.
          </p>
        </div>
      </div>
      <div className="rowTwo">
        <span className="whatWeDo">WHAT WE DO</span>
        <CardBox />
        <div {...getCollapseProps()}>
          <CardBox2 />
        </div>
        <div className="buttonDiv">
          <button
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
            className="viewMore"
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
          
        </div>
        <div className="cardScroller">
        <Carousel breakPoints={breakPoint} >
        <div className="oneCard">
        <p className="cardHeading">
          CREATIVE
          <br />
          ENTERTAINMENT
          <br />
          PLATFORMS.
        </p>

        <p className="cardContentFirst ">
          This is what started it all. At Kult, we believe that no idea is too
          big or too bizarre, no matter how outrageous it might sound.
        </p>
      </div>
      <div className="oneCard">
        <p className="cardHeading">
          ON GROUND
          <br />
          ACTIVATIONS.
          <br />
        </p>

        <p className="cardContent">
          On-Ground Activations are one of the main keys to delivering your
          message to the masses and to make your campaign a dynamic platform
          that directly reaches your clientele.
        </p>
      </div>
      <div className="oneCard">
        <p className="cardHeading">
          PRODUCT &
          <br />
          BTL MARKETING.
          <br />
        </p>

        <p className="cardContent">
          To guarantee the best results in all services offered, Kult also
          proves the production of anything you desire. From ushering services,
          recruitment, production or selling units.
        </p>
      </div>
      <div className="oneCard">
        <p className="cardHeading">
          SOCIAL MEDIA &
          <br />
          PUBLIC RELATIONS.
          <br />
        </p>

        <p className="cardContentOne">
          Kult has built a strong, reliable, and creative digital marketing team
          that manages aspects of a successful digital campaign which includes
          business development, content creation, media buying, and graphic
          design.
        </p>
      </div>
      <div className="oneCard">
        <p className="cardHeading">
          EVENT PLANNING
          <br />
          & MANAGEMENT.
          <br />
        </p>

        <p className="cardContentOne">
          At Kult, we have developed the ultimate formula to create a successful
          event. Event planning & event management are falsely considered the
          same thing, but to have a successful event you need to combine a team
          that can do both simultaneously and coherently.
        </p>
      </div>
      <div className="oneCard">
        <p className="cardHeading">
          TRADE-MARKETING &
          <br />
          DISTRIBUTION.
          <br />
        </p>

        <p className="cardContentOne">
          All businesses realize the importance of marketing to consumers,
          however many businesses fail to develop proper strategies when it
          comes to marketing products to the wholesalers, distributors, and
          retailers that bring them to the consumers
        </p>
      </div>
          </Carousel>
            </div>
        <div className="rowThree">

          <div className="beigeBalloon">
            <img src="Arrow2.png" className="secondArrow" />
            <div className="textInBeigeBubble">
              <p className="BeigeBubbleHeadingHome">
                <span className="whyAndKult">WHY</span>
                <br />
                <span className="choose">CHOOSE</span>
                <br />
                <span className="whyAndKult">KULT?</span>
              </p>
              <br />

              <p className="BeigeBubbleParHome">
                Kult will help you reach your destination by creating a relevant
                platform with our innovative and creative team to reach the
                maximum marketing potential that is required. We will help you
                reach your destination by creating a relevant platform with our
                innovative and creative team. Our vast experience in the event’s
                sector enables us to create platforms that perfectly translate
                the client’s vision to reach the maximum marketing potential
                that is required.
              </p>
            </div>
          </div>
                    <div className="manAndPlantDiv"></div>

        </div>
      </div>
    </div>
  );
};

export default Home;
