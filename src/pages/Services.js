import React from "react";
import "./services.css";
import Footer from "./FooterWithoutClients";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Services = () => {
  return (
    <div className="mainServices">
      <div className="bubblesServices">
        <p className="servicesHeading">
          <span className="our">OUR </span>{" "}
          <span className="services">SERVICES</span>
        </p>
        <p className="parInBubbles">
          Unveil the magic of our marketing agency, where data fuels creativity.
          We craft captivating brand stories through web design, social media,
          and compelling content. Join us on a transformative journey, guided by
          analytics, as we make your brand shine.
        </p>
      </div>
      <div className="rowEins">
        <div className="CEPDiv">
          <div className="CEPText">
            <p className="CEPHeading">CREATIVE ENTERTAINMENT PLATFORMS</p>
            <p className="CEPPar">
              This is what started it all. At Kult, we believe that no idea is
              too big or too bizarre, no matter how outrageous it might sound.
              Whether your goal is to promote your established brands or a new
              idea you want to bring to life, Kult will help you reach your
              destination by creating a relevant platform with our innovative
              and creative team. Our vast experience in the event’s sector
              enables us to create platforms that perfectly translate the
              client’s vision to reach the maximum marketing potential that is
              required.
            </p>
          </div>
          <div className="carOne">
            <div className="theBlueArrow"></div>
            <Carousel
              autoPlay={false}
              emulateTouch={true}
              showStatus={false}
              showIndicators={false}
              swipeable={true}
              infiniteLoop={true}
              interval={3000}
              width={320}
              showThumbs={false}
            >
              <img
                src="firstCarPic3.png"
                alt="kult-logo"
                className="carousel3"
              />

              <img
                src="firstCarPic2.png"
                alt="kult-logo"
                className="carousel3"
              />

              <img
                src="firstCarPic1.png"
                alt="kult-logo"
                className="carousel3"
              />

            
            </Carousel>
          </div>
        </div>
      </div>
      
      <div className="rowZwei">
        <div className="OGADiv">
          <div className="OGAText">
            <p className="OGAHeading">ON-GROUND ACTIVATIONS</p>
            <p className="OGAPar">
              On-Ground Activations are one of the main keys to delivering your
              message to the masses and to make your campaign a dynamic platform
              that directly reaches your clientele. Kult will be responsible for
              planning and executing every detail to ensure a successful
              campaign, from designing the booth to handling on-ground
              operations, we will always deliver the optimum results that best
              reflect the brand’s image.
            </p>
          </div>
          <div className="carTwo">
            <div className="theBlueArrow"></div>
            <Carousel
              autoPlay={false}
              emulateTouch={true}
              showStatus={false}
              showIndicators={false}
              swipeable={true}
              infiniteLoop={true}
              interval={3000}
              width={320}
              showThumbs={false}
            >
              <img
                src="carouselImage4.png"
                alt="kult-logo"
                className="carousel3"
              />

              <img
                src="carouselImage3.png"
                alt="kult-logo"
                className="carousel3"
              />

              <img
                src="carouselImage2.png"
                alt="kult-logo"
                className="carousel3"
              />

              <img
                src="carouselImage5.png"
                alt="kult-logo"
                className="carousel3"
              />
            </Carousel>
          </div>
        </div>
      </div>
       <div className="rowDrei">
        <div className="SMPDiv">
          <div className="SMPText">
            <p className="SMPHeading">SOCIAL MEDIA & PUBLIC RELATIONS</p>
            <p className="SMPPar">
              Kult has built a strong, reliable, and creative digital marketing
              team that manages aspects of a successful digital campaign which
              includes business development, content creation, media buying, and
              graphic design. Our digital marketing team is always in sync with
              the client to obtain a vision to create a campaign with an
              outstanding output. . Kult’s PR team has acquired an extensive
              database consisting of local and international influencers which
              allows us to reach and create influential exposure to suit and
              expand your brand.
            </p>
          </div>
          <div className="carThree">
            <div className="theBlueArrow"></div>
            <Carousel
              autoPlay={false}
              emulateTouch={true}
              showStatus={false}
              showIndicators={false}
              swipeable={true}
              infiniteLoop={true}
              interval={3000}
              width={320}
              showThumbs={false}
            >
             
             <img
                src="thirdCarPic.png"
                alt="kult-logo"
                className="carousel3"
              />

              <img
                src="thirdCarouselImage.png"
                alt="kult-logo"
                className="carousel3"
              />

              <img
                src="thirdCarouselPic.png"
                alt="kult-logo"
                className="carousel3"
              />

            </Carousel>
          </div>
        </div>
      </div>
       <div className="rowVier">
        <div className="PBMDiv">
          <div className="PBMText">
            <p className="PBMHeading">PRODUCTION & BTL MARKETING</p>
            <p className="PBMPar">
              To guarantee the best results in all services offered, Kult also
              proves the production of anything you desire. From ushering
              services, recruitment, production or selling units, uniforms,
              giveaways and more, everything is tailored to your brand.
            </p>
          </div>
          <div className="carFour">
            <div className="theBlueArrow"></div>
            <Carousel
              autoPlay={false}
              emulateTouch={true}
              showStatus={false}
              showIndicators={false}
              swipeable={true}
              infiniteLoop={true}
              interval={3000}
              width={320}
              showThumbs={false}
            >
              <img
                src="fourthCarPic1.png"
                alt="kult-logo"
                className="carousel3"
              />

              <img
                src="fourthCarPic2.png"
                alt="kult-logo"
                className="carousel3"
              />

              <img
                src="fourthCarPic3.png"
                alt="kult-logo"
                className="carousel3"
              />

             
            </Carousel>
          </div>
        </div>
      </div>
       <div className="rowFunf">
        <div className="EPMDiv">
          <div className="EPMText">
            <p className="EPMHeading">EVENT PLANNING & MANAGEMENT</p>
            <p className="EPMPar">
              At Kult, we have developed the ultimate formula to create a
              successful event. Event planning & event management are falsely
              considered the same thing, but to have a successful event you need
              to combine a team that can do both simultaneously and coherently.
              Not only do we plan & execute the event, we also coordinate all
              details from ushering, ticketing systems to even light fixtures or
              floor stickers - every single detail is managed by us to ensure a
              hassle free expereince for both clients and attendees.
            </p>
          </div>
          <div className="carFive">
            <div className="theBlueArrow"></div>
            <Carousel
              autoPlay={false}
              emulateTouch={true}
              showStatus={false}
              showIndicators={false}
              swipeable={true}
              infiniteLoop={true}
              interval={3000}
              width={320}
              showThumbs={false}
            >
              <img
                src="lastCarPic1.png"
                alt="kult-logo"
                className="carousel3"
              />

              <img
                src="lastCarPic2.png"
                alt="kult-logo"
                className="carousel3"
              />

              <img
                src="lastCarPic3.png"
                alt="kult-logo"
                className="carousel3"
              />

             
            </Carousel>
          </div>
        </div>
      </div> 
      <div className="rowSechs">
        <div className="TMDText">
          <p className="TMDHeading">TRADE-MARKETING & DISTRIBUTION</p>
          <p className="TMDPar">
            All businesses realize the importance of marketing to consumers,
            however many businesses fail to develop proper strategies when it
            comes to marketing products to the wholesalers, distributors, and
            retailers that bring them to the consumers . Our trade marketing &
            distribution services will ensure increased demand at wholesaler,
            retailer, and distributor level in order to ensure that we deliver
            your product to the right consumer. We are handling some of the
            biggest accounts and putting them on the right shelves. From vendors
            and suppliers to manufacturer, to point of sale, including
            packaging, inventory, warehousing, and logistics, our team will
            handle it all to ensure an effective market penetration strategy.
          </p>
        </div>
        <div className="carPlaceHolder"></div>
      </div>
      <div className="footerServices">
      <Footer/>
      </div>   
    </div>
  );
};

export default Services;
