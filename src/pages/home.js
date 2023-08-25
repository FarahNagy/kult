import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import "./home.css";
import CardRow from "./CardRow";
import Footer from "./Footer";

const Home = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <div className="main">
      <div className="grey-bubble">
        <p className="grey-bubble-par-heading">
          <span className="humanizing">HUMANIZING</span>
          <br />
          <span className="your-brand">YOUR BRAND</span>
          <br />
          <span className="experience">EXPERIENCE</span>
        </p>
        <p className="grey-bubble-par">
          Kult’s creative spectrum ranges from on <br />
          -ground activations, social media handling,
          <br />
          content creation, public relations, event
          <br />
          planning & management, production & <br />
          BTL marketing, as well as establishing <br />
          one-of-a-kind entertainment platforms.
          <br />
        </p>
        <img src="Arrow 1.png" alt="kult-logo" className="arrow" />
        <h1 className="cardsHeading">WHAT WE DO</h1>
        <CardRow/>
        <div className="cardRow" {...getCollapseProps()}>
      <img src="Group 73.png" alt="kult-logo" className="cardItem" />

      <div className="image-overlay">
        <div class="card-1">
          <p className="card-par-1a">
            <span className="card-1a">
              CREATIVE
              <br />
              ENTERTAINMENT
              <br />
              PLATFORMS.
            </span>
          </p>
          <p className="card-par-1b">
            <span span className="card-1b">
              This is what started it all. At Kult,
              <br />
              we believe that no idea is too big
              <br />
              or too bizarre, no matter how
              <br />
              outrageous it might sound.
            </span>
          </p>
        </div>
      </div>

      <img src="Group 73.png" alt="kult-logo" className="cardItem" />
      <div className="image-overlay2">
        <div class="card-2">
          <p className="card-par-2a">
            <span className="card-2a">
              ON GROUND
              <br />
              ACTIVATIONS.
            </span>
          </p>
          <p className="card-par-2b">
            <span span className="card-2b">
              On-Ground Activations are one of
              <br />
              the main keys to delivering your
              <br />
              message to the masses and to make
              <br />
              your campaign a dynamic platform
              <br />
              that directly reaches your clientele.
              <br />
            </span>
          </p>
        </div>
      </div>
      <img src="Group 73.png" alt="kult-logo" className="cardItem" />
      <div className="image-overlay3">
        <div class="card-3">
          <p className="card-par-3a">
            <span className="card-3a">
              PRODUCT &
              <br />
              BTL MARKETING.
            </span>
          </p>
          <p className="card-par-3b">
            <span span className="card-3b">
              To guarantee the best results in all
              <br />
              services offered, Kult alsoproves the
              <br />
              production of anything you desire.
              <br />
              From ushering services, recruitment, production or selling units.
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
        <div className="bubble-and-arrow">
          <div className="blue-bubble">
          <button className="viewMore"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'View Less' : 'View More'}
      </button>
            <p className="blue-bubble-par-heading">
              <span className="why">WHY</span>
              <br />
              <span className="choose">CHOOSE</span>
              <br />
              <span className="kult">KULT?</span>
            </p>
            <p className="blue-bubble-par">
              Kult will help you reach your destination by
              <br />
              creating a relevant platform with our innovative
              <br />
              and creative team to reach the maximum
              <br />
              marketing potential that is required. We will
              <br />
              help you reach your destination by creating a<br />
              relevant platform with our innovative and
              <br />
              creative team. Our vast experience in the
              <br />
              event’s sector enables us to create platforms
              <br />
              that perfectly translate the client’s vision
              <br />
              to reach the maximum marketing potential that 
              <br />
              is required.
            </p>
          </div>
          <img src="Arrow2.png" alt="arrow" className="arrow2" />
        </div>
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
