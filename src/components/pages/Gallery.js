import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InfoSection from "../InfoSection";
import ScrollToTop from "../ScrollToTop";
import { HomeObjOne } from "../InfoSection/Data";
import TitlebarImageList from "./ImageList";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <TitlebarImageList />
      <InfoSection {...HomeObjOne} />
      <Footer />
    </>
  );
};

export default Gallery;
