import React from "react";
import { Link } from "react-router-dom";

const FooterWithoutClients = () => {
  return (
    <footer className="footer-container">
      <section className="circles">
        <div className="circleItem" />
        <div className="circleItem" />
        <div className="circleItem" />
        <div className="circleItem" />
        <div className="circleItem" />
        <div className="circleItem" />
        <div className="circleItem" />
        <div className="circleItem" />
      </section>
      <span className="joinTheKult">GET SOCIAL AND JOIN THE KULT!</span>
      <section className="contactInfoBox">
        <div className="leftInfo">
          <section className="phoneIcon">
            <img src="phone.png" alt="kult-logo" className="icon" />
            <a href="tel:+2 2542 8244" className="thePhoneNo">+2 2542 8244</a>
          </section>
          <a href="mailto:info@kulteg.com" className="emailIcon">
            <img src="email.png" alt="kult-logo" className="icon" />
            <div className="theEmailAddress">info@kulteg.com</div>{" "}
          </a>
          
          <Link
            to="https://www.google.com/maps/dir//kult+creative+productions/"
            className="address"
            target="_blank"
          >
            <img src="address.png" alt="kult-logo" className="icon" />
            <div className="theDestination"> 10 North Choeuifat st.-5th
            Settlement</div>
          </Link>
        </div>
        <div className="rightInfo">
          <Link
            to="https://www.facebook.com/KultCreativeProductions"
            className="facebook"
            target="_blank"
          >
            <img src="fbIcon.png" alt="kult-logo" className="icon" />
           <div className="theFBPage">Kult Creative Productions</div>
          </Link>
          <Link
            to="https://www.instagram.com/kultcreativeproductions/"
            className="instagram"
            target="_blank"
          >
            <img src="instagram.png" alt="kult-logo" className="icon" />
            <div className="theIGPage">Kult Creative Productions</div>
          </Link>
        </div>
      </section>
      <p className="copy-right">&copy; KULT CREATIVE PRODUCTIONS </p>
    </footer>
  );
};

export default FooterWithoutClients;
