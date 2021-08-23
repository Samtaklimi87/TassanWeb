import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InfoSection from "../InfoSection";
import { HomeObjFive } from "../InfoSection/Data";
import ScrollToTop from "../ScrollToTop";
import LaminatPage from "../InfoSection/indexLaminat";

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
      <LaminatPage {...HomeObjFive} />
      <Footer />
    </>
  );
};
export default Laminat;
