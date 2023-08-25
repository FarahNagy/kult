import React from "react";
import "./about-us.css";
import HorizontalScroll from "react-scroll-horizontal";
import FooterWithoutClients from "./FooterWithoutClients";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
const About = () => {

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft-500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft+500;
  }

  return (
    <div className="main2">
      <div className="balls">
        <img src="balls.png" alt="kult-logo" className="ballsImage" />
        <div className="about-us-text">
          <p className="about-us">
            <span className="about">ABOUT</span> <span className="us"> US</span>
          </p>
          <p className="text">
            Kult Creative Productions is a<br />
            leading creative production company
            <br />
            that handles 560 marketing solutions
            <br />
            established in 2015 by three partners
            <br />
            who had the vision to take creative
            <br />
            marketing to another level in Egypt.
          </p>
        </div>
      </div>
      <div className="parent">
        <h2 className="all-values">Our Values</h2>
        <MdChevronLeft onClick={slideLeft} size={40}/>
        <HorizontalScroll className="scroll"
        reverseScroll = { true }>
          <div className="value1"></div>
          <div className="value2"></div>
          <div className="value3"></div>
          <div className="value4"></div>
          <div className="value5"></div>
          <div className="value6"></div>
          <div className="value7"></div>
        </HorizontalScroll>
        <MdChevronRight onClick={slideRight} size={40}/>
      </div>
      <div className="greyBubble">
        <p className="grey-bubble-par-heading">
          <span className="humanizing">MISSION</span>
        </p>
        <p className="grey-bubble-par">
          <p>
            At the very heart of our ethos resides a powerful vision <br />- one
            that aspires to reshape the landscape of <br />
            marketing solutions, igniting profound growth for our <br />
            esteemed clients and transforming their aspirations <br />
            into tangible achievements, all while ensuring a<br />
            substantial return on investment that resonates deeply.
          </p>
          <p>
            Our mission thrives on <br />
            result-driven marketing,
            <br /> elevating brand awareness,
            <br /> boosting sales, and
            <br /> nurturing lasting expansion.
            <br /> Through finely honed
            <br /> strategies, we guide clients
            <br /> toward resounding success,
            <br />
            uniting creativity and
            <br /> analytics to secure their
            <br /> industry prominence.
          </p>
        </p>
      </div>
      <div className="blueBalloon">
        <p className="blueBalloonHeading">
          <span className="vision">VISION</span>
        </p>
        <p className="blueBalloonPar">
          To propel and sustain our trajectory of<br/> growth, propelling us toward
          the<br/> pinnacle of becoming the foremost<br/> VISIONary powerhouse in the
          region, we <br/>are unwaveringly committed to<br/> expanding our strategic
          agenda.<br/> Leveraging our rich reservoir of<br/> experience, we are resolutely
          poised to<br/> assert our dominance in the market,<br/> cementing our position
          as the <br/>unparalleled creative force to be reckoned with.
        </p>
      </div>
      <FooterWithoutClients/>
    </div>
  );
};

export default About;
