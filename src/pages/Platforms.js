import React from "react";
import "./platforms.css";
import { Link } from "react-router-dom";

const Platforms = () => {
  return (
    <div className="mainPlatform">
      <div className="battleOfTheBands">
        <div className="bobLogo" />
        <div className="BoBParDiv">
          <p className="BoBPar">
            Battle of the Bands is the iconic platform that has become famous
            for discovering undiscovered talent, giving underground bands the
            opportunity of a lifetime. This competition gives bands a stage to
            battle it out, while providing them with the means and guidance to
            grow, competing to win the title of TOP BAND.
          </p>
        </div>
        <Link
          to="https://www.facebook.com/KultCreativeProductions"
          target="_blank"
          className="readMoreLink"
          style={{backgroundColor:"red"}}
        >
          <button className="readMore">Read More</button>
        </Link>

        <div className="crowdNMic">
          <div className="MicLogo" />
          <img className="crowdBoB" src="./crowdBoB.png" alt="crowdd"></img>
        </div>
      </div>
      {/* <div className="battleOfTheBurgers">
        <div className="burgerNText">
          <div className="bobLogo" />
          <div className="BoBParDiv">
            <p className="BoBPar">
              Battle of the Bands is the iconic platform that has become famous
              for discovering undiscovered talent, giving underground bands the
              opportunity of a lifetime. This competition gives bands a stage to
              battle it out, while providing them with the means and guidance to
              grow, competing to win the title of TOP BAND.
            </p>
          </div>
          <Link to="https://www.facebook.com/KultCreativeProductions"  target="_blank">
          <button className="readMore">
            Read More
          </button>
          </Link>
        </div>
        <div className="crowdNMic">
          <div className="MicLogo" />
         
        </div>
      </div> */}
    </div>
  );
};

export default Platforms;
