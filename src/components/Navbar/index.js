import React, { useState } from "react";
import { Nav, NavLink, NavMenu, Bars } from "./NavbarElements";
import SearchBar from "./SearchBar";
import "./index.css";
import "./search.css";

const Navbar = ({ toggle }) => {
  
  return (
    <>
      <Nav>
        <NavLink to="/" className="logoLink">
          <img src="Group 16.png" alt="kult-logo" className="logo" />
        </NavLink>
        <Bars onClick={toggle} />
        <div className="searchOnMobile">
        <SearchBar />
        </div>
        <NavMenu className="menu">
          <NavLink to="/" activeStyle className="menuItem">
            HOME
          </NavLink>
          <NavLink to="/about-us" activeStyle className="menuItem">
            ABOUT US
          </NavLink>
          <NavLink to="/services" activeStyle className="menuItem">
            SERVICES
          </NavLink>
          <NavLink to="/platforms" activeStyle className="menuItem">
            PLATFORMS
          </NavLink>
          <NavLink to="/contact" activeStyle className="menuItem">
            CONTACT
          </NavLink>
        </NavMenu>
        <div className="OGSearch">
        <SearchBar />
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
