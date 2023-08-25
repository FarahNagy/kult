import React from "react";
import "./services.css";
import FooterWithoutClients from "./FooterWithoutClients";
const Services = () => {
  return (
    <div className="mainServices">
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "white",
        }}
      >
        <div className="balls">
          <img src="bubblesServices.png" alt="kult-logo" className="ballsImage" />
          <div className="about-us-text">
            <p className="about-us">
              <span className="about">OUR </span>{" "}
              <span className="us"> SERVICES</span>
            </p>
            <p className="text">
              Unveil the magic of our marketing agency,
              <br /> where data fuels creativity. We craft <br />
              captivating brand stories through web design,
              <br />
              social media, and compelling content. Join us <br />
              on a transformative journey, guided by <br />
              analytics, as we make your brand shine.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "400px",
          marginTop: "200px",
          display: "flex",
          flexDirection: "row",
          backgroundColor:'white'

        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "800px",
            height: "100%",
          }}
        >
          <h1
            style={{
              marginLeft: "50px",
              color: "#4aa9ea",
              fontFamily: "boldFont",
              fontSize: "35px",
            }}
          >
            CREATIVE ENTERTAINMENT PLATFORMS
          </h1>
          <p
            style={{
              marginLeft: "50px",
              fontFamily: "regFont",
              lineHeight: "1.25",
              color: "GrayText",
              marginTop: "5px",
              fontSize: "20px",
            }}
          >
            This is what started it all. At Kult, we believe that no idea is too
            big or too <br />
            bizarre, no matter how outrageous it might sound. Whether your goal
            is to <br />
            promote your established brands or a new idea you want to bring to
            life, <br />
            Kult will help you reach your destination by creating a relevant
            platform <br />
            with our innovative and creative team. Our vast experience in the
            event’s <br />
            sector enables us to create platforms that perfectly translate the
            client’s <br />
            vision to reach the maximum marketing potential that is required.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundColor: "#EDF6FD",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundColor: "white",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundColor: "#EDF6FD",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundColor: "white",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundColor:'#EDF6FD'
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "1000px",
            height: "100%",
          }}
        >
          <h1
            style={{
              marginLeft: "50px",
              color: "#4aa9ea",
              fontFamily: "boldFont",
              fontSize: "35px",
            }}
          >
            TRADE-MARKETING & DISTRIBUTION
          </h1>
          <p
            style={{
              marginLeft: "50px",
              fontFamily: "regFont",
              lineHeight: "1.25",
              color: "GrayText",
              marginTop: "5px",
              fontSize: "20px",
            }}
          >
            All businesses realize the importance of marketing to consumers,
            however many businesses fail <br />
            to develop proper strategies when it comes to marketing products to
            the wholesalers, <br />
            distributors, and retailers that bring them to the consumers . Our
            trade marketing & <br />
            distribution services will ensure increased demand at wholesaler,
            retailer, and distributor level <br />
            in order to ensure that we deliver your product to the right
            consumer. We are handling some of <br />
            the biggest accounts and putting them on the right shelves. From
            vendors and suppliers to <br />
            manufacturer, to point of sale, including packaging, inventory,
            warehousing, and logistics, our <br />
            team will handle it all to ensure an effective market penetration
            strategy.
          </p>
        </div>
      </div>
      <FooterWithoutClients />
    </div>
  );
};

export default Services;
