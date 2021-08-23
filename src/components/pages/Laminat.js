import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InfoSection from "../InfoSection";
import { HomeObjTwo } from "../InfoSection/Data";
import ScrollToTop from "../ScrollToTop";

const Laminat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...HomeObjTwo} />
      <Footer />
    </>
  );
};
export default Laminat;
