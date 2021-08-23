import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Services from "../Services";
import Footer from "../Footer";
import InfoSection from "../InfoSection";
import { HomeObjFour } from "../InfoSection/Data";
import ScrollToTop from "../ScrollToTop";

const Tegels = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...HomeObjFour} />
      <Footer />
    </>
  );
};

export default Tegels;
