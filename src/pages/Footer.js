import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className="footer-header">Trusted by 100+ companies!</h2>
      <section className="companies1">
        <Link
          to="https://www.eg-bank.com/En/Index"
          className="egbank"
          target="_blank"
        />
        <Link
          to="https://www.dhl.com/eg-en/home.html?locale=true"
          className="dhl"
          target="_blank"
        />
        <Link
          to="https://www.etisalat.eg/StaticFiles/portal/etisalat/index.html"
          className="etisalat"
          target="_blank"
        />
        <Link
          to="https://www.kinder.com/eg/en/"
          className="kinder"
          target="_blank"
        />
        <Link
          to="https://www.nutella.com/us/en/"
          className="nutella"
          target="_blank"
        />
        <Link to="https://www.reebok.com/" className="reebok" target="_blank" />
        <Link to="https://discoverglo.com/" className="glo" target="_blank" />
        <Link to="https://www.pmi.com/" className="pm-inc" target="_blank" />
        <Link to="https://www.bat.com/" className="bat" target="_blank" />
        <Link
          to="https://www.aboughalymotors.com/"
          className="abou-ghaly"
          target="_blank"
        />
        <section className="companies2">
          <Link
            to="https://www.elsewedyelectric.com/en/home/"
            className="elsewedy"
            target="_blank"
          />
          <Link to="https://www.fiat.com/" className="fiat" target="_blank" />
          <Link
            to="https://www.ferrerorocher.com/us/en/"
            className="ferrero"
            target="_blank"
          />
          <Link to="https://www.cbc-eg.com/" className="cbc" target="_blank" />
          <Link
            to="https://www.ktm.com/en-eg.html"
            className="ktm"
            target="_blank"
          />
          <Link to="https://www.zasair.com/" className="zas" target="_blank" />
          <Link
            to="https://www.mansourgroup.com/"
            className="mansour"
            target="_blank"
          />
          <Link to="https://www.pepsi.com/" className="pepsi" target="_blank" />
          <Link
            to="https://www.sixt.com.eg/"
            className="sixt"
            target="_blank"
          />
          <Link
            to="https://winstoncigarettes.com/"
            className="winston"
            target="_blank"
          />
        </section>
      </section>
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
      <p className="copyright">&copy; KULT CREATIVE PRODUCTIONS </p>
    </footer>
  );
};

export default Footer;
