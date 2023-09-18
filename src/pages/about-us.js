import React from "react";
import "./about-us.css";
import Carousel from "react-elastic-carousel";
import Footer from "./FooterWithoutClients"
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

const About = () => {
  return (
    <div className="mainAbout">
      <div className="firstRow">
        <p className="aboutUsHeading">
          <span className="about">ABOUT </span> <span className="us">US</span>
        </p>
        <p className="firstRowPar">
          Kult Creative Productions is a leading creative production company
          that handles 360 marketing solutions Established in 2015 by three
          partners who had the vision to take creative marketing to
          another level in Egypt.
        </p>
      </div>
      <div className="theScrollerRow">
        <div className="divCarousel">
          <span className="valuesHeading">OUR VALUES</span>

          <Carousel breakPoints={breakPoint}>
            <div className="excellence"></div>
            <div className="integrity"></div>
            <div className="collab"></div>
            <div className="accountability"></div>
            <div className="diversity"></div>
            <div className="equality"></div>
            <div className="inclusion"></div>
          </Carousel>
        </div>
      </div>
      <div className="thirdRow">
        <div className="thirdRowLeftDiv">
          <p className="mission">MISSION</p>
          <p className="firstParMission">
            At the very heart of our ethos resides a powerful vision - one that
            aspires to reshape the landscape of marketing solutions, igniting
            profound growth for our esteemed clients and transforming their
            aspirations into tangible achievements, all while ensuring a
            substantial return on investment that resonates deeply.
          </p>
          <p className="secParMission">
            Our mission thrives on result-driven marketing, elevating brand
            awareness, boosting sales, and nurturing lasting expansion. Through
            finely honed strategies, we guide clients toward resounding success,
            uniting creativity and analytics to secure their industry
            prominence.
          </p>
        </div>
        <div className="thirdRowRightDiv"></div>
      </div>
      <div className="fourthRow">
       
        <div className="fourthRowRight">
          <div className="visionText">
            <p className="vision">VISION</p>
            <p className="visionPar">
              To propel and sustain our trajectory of growth, propelling us
              toward the pinnacle of becoming the foremost VISIONary powerhouse
              in the region, we are unwaveringly committed to expanding our
              strategic agenda. Leveraging our rich reservoir of experience, we
              are resolutely poised to assert our dominance in the market,
              cementing our position as the unparalleled creative force to be
              reckoned with.
            </p>
          </div>
        </div>
        <div className="fourthRowLeft"></div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
