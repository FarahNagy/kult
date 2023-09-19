import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <span className="footer-header">Trusted by 100+ companies!</span>
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
      </section>

      <section className="companies2">
        <Link to="https://www.pmi.com/" className="pm-inc" target="_blank" />
        <Link to="https://www.bat.com/" className="bat" target="_blank" />
        <Link
          to="https://www.aboughalymotors.com/"
          className="abou-ghaly"
          target="_blank"
        />
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
        <Link
          to="https://www.ktm.com/en-eg.html"
          className="ktm"
          target="_blank"
        />
      </section>
      <section className="companies3">
        <Link to="https://www.cbc-eg.com/" className="cbc" target="_blank" />

        <Link to="https://www.zasair.com/" className="zas" target="_blank" />
        <Link
          to="https://www.mansourgroup.com/"
          className="mansour"
          target="_blank"
        />
        <Link to="https://www.pepsi.com/" className="pepsi" target="_blank" />
        <Link to="https://www.sixt.com.eg/" className="sixt" target="_blank" />
        <Link
          to="https://winstoncigarettes.com/"
          className="winston"
          target="_blank"
        />
        <Link
          to="https://www.hassanallam.com/subsidaries/legacy"
          className="legacy"
          target="_blank"
        />
      </section>

      <section className="companies4">
        <Link
          to="https://relxnow.eg/"
          className="relx"
          target="_blank"
        />
        <Link
          to="https://www.infinityclinicpharma.com/"
          className="infinity"
          target="_blank"
        />
        <Link
          to="https://www.extra.com/en-sa/aboutextra"
          className="extra"
          target="_blank"
        />

        <Link
          to="https://ismodegypt.com/"
          className="ismod"
          target="_blank"
        />
        <Link
          to="https://www.skyculinaire.com/"
          className="sky"
          target="_blank"
        />
        <Link
          to="https://theaddress-eg.com/en"
          className="theAddressClient"
          target="_blank"
        />
        <Link
          to="https://www.pastaregina.com/corporate/our-brands/golden-mills/"
          className="goldmills"
          target="_blank"
        />
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
      <span className="joinTheKult">GET SOCIAL AND JOIN THE KULT!</span>
      <section className="contactInfoBox">
        <div className="leftInfo">
          <section className="phoneIcon">
            <img src="phone.png" alt="kult-logo" className="icon" />
            <a href="tel:+2 2542 8244" className="thePhoneNo">
              +2 2542 8244
            </a>
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
            <div className="theDestination">
              {" "}
              10 North Choeuifat st.-5th Settlement
            </div>
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

export default Footer;
