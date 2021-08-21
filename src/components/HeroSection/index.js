import React ,{useState} from "react";
import { HeroContainer, HeroBg, VideoBg ,HeroContent, HeroH1, HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from "./HeroElements";
import Video from "../../videos/painting roof.mp4";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  
  const onHover = () => {
    setHover(!hover);
  };




  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="painting roof/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>We can Fix your Home </HeroH1>
        <HeroP>
          Please read more about it. we are a family bussiness which can help
          you in many direction. events , home decoration , self defending
          courses,....
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
