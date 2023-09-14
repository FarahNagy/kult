import React from "react";
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
          <SidebarLink onClick={toggle} to="/">
            HOME
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/about-us">
            ABOUT US
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/services">
            SERVICES
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/platforms">
            PLATFORMS
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/contact">
            CONTACT
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap></SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
