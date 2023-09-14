import React from "react";
import "./home.css";
function CardBox() {
  return (
    <div className="cards">
      <div className="oneCard">
        <p className="cardHeading">
          CREATIVE
          <br />
          ENTERTAINMENT
          <br />
          PLATFORMS.
        </p>

        <p className="cardContentOne">
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
    </div>
  );
}

export default CardBox;
