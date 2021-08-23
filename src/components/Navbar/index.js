import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLinkR
} from "./NavbarElements";

import { IconContext } from "react-icons/lib";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, [changeNav]);

  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <>
      <IconContext.Provider value={{ color: "orange" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/">Tassan Brothers</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinkR to="/laminat">Laminat</NavLinkR>
              </NavItem>
              <NavItem>
                <NavLinkR to="/schilderen">Schilderen</NavLinkR>
              </NavItem>
              <NavItem>
                <NavLinkR to="/tegels">Tegels</NavLinkR>
              </NavItem>
              <NavItem>
                <NavLinkR to="/gallery">Gallery</NavLinkR>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
