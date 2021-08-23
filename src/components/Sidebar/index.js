import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinkR,
  SideBtnWrap,
  SidebarRoute,

} from "./SidebarElements"; 

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}  >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkR to="/laminat" onClick={toggle} >Laminat</SidebarLinkR>
          <SidebarLinkR to="/schilderen" onClick={toggle} >Schilderen</SidebarLinkR>
          <SidebarLinkR to="/tegels" onClick={toggle} >Tegels</SidebarLinkR>
          <SidebarLinkR to="/gallery" onClick={toggle} >Gallery</SidebarLinkR>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact Us</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
