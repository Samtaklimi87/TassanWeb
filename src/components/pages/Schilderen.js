import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InfoSection from "../InfoSection";
import { HomeObjThree } from "../InfoSection/Data";
import ScrollToTop from "../ScrollToTop";

const Schilderen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...HomeObjThree} />
      <Footer />
    </>
  );
};
export default Schilderen;
