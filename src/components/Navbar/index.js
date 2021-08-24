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
  NavLinkR,
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
      <IconContext.Provider value={{ color: "darkred" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/">Tassan Brothers</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinkR
                  to="/laminat"
                  activeStyle={{
                    borderBottom: "4px solid #706047",
                    color: "darkred",
                  }}
                >
                  Laminat
                </NavLinkR>
              </NavItem>
              <NavItem>
                <NavLinkR to="/schilderen"  activeStyle={{
                    borderBottom: "4px solid #706047",
                    color: "darkred",
                  }}>Schilderen</NavLinkR>
              </NavItem>
              <NavItem>
                <NavLinkR to="/tegels"  activeStyle={{
                    borderBottom: "4px solid #706047",
                    color: "darkred",
                  }}>Tegels</NavLinkR>
              </NavItem>
              <NavItem>
                <NavLinkR to="/gallery"  activeStyle={{
                    borderBottom: "4px solid #706047",
                    color: "darkred",
                  }}>Gallery</NavLinkR>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/contact" >Contact Us</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
