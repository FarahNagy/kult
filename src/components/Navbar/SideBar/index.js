import React from "react";
import "./index.css";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/" className="sideBarMenuItem">
            HOME
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/about-us" className="sideBarMenuItem">
            ABOUT US
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/services" className="sideBarMenuItem">
            SERVICES
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/platforms" className="sideBarMenuItem">
            PLATFORMS
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/contact" className="sideBarMenuItem">
            CONTACT
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap></SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
