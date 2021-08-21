import React, {useState} from "react";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import { HomeObjFour, HomeObjOne, HomeObjThree, HomeObjTwo } from "../InfoSection/Data";
import Navbar from "../Navbar";
import Services from "../Services";
import Sidebar from "../Sidebar";

const Home = () => {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar  toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne}/>
      <InfoSection {...HomeObjTwo}/>
      <InfoSection {...HomeObjThree}/>
      <InfoSection {...HomeObjFour}/>
      <Services />
      <Footer/>

    </>
  );
};

export default Home;
