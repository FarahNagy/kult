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
    <h2 className="joinTheKult">GET SOCIAL AND JOIN THE KULT!</h2>
    <section className="contactInfoBox">
      <div className="leftInfo">
        <section className="phone">
        <img src="phone.png" alt="kult-logo" className="icon"/>
          +2 2542 8244
          </section>
        <a href="mailto:info@kulteg.com" className="email">
        <img src="email.png" alt="kult-logo" className="icon"/>
          info@kulteg.com</a>
        <Link to="https://www.google.com/maps/dir//kult+creative+productions/"className="address" target="_blank">
        <img src="address.png" alt="kult-logo" className="icon"/>
          10 North Choeuifat st.-5th Settlement
        </Link>
      </div>
      <div className="rightInfo">
      <Link to='https://www.facebook.com/KultCreativeProductions' className="facebookAndInstagram" target="_blank">
      <img src="fbIcon.png" alt="kult-logo" className="icon"/>
        Kult Creative Productions
        </Link>
        <Link to='https://www.instagram.com/kultcreativeproductions/' className="facebookAndInstagram" target="_blank">
        <img src="instagram.png" alt="kult-logo" className="icon"/>
        Kult Creative Productions
        </Link>
      </div>
    </section>
    <p className="copy-right">&copy; KULT CREATIVE PRODUCTIONS </p>
  </footer>
  );
};

export default FooterWithoutClients;
