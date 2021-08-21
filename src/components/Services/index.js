import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/in_though.svg";
import Icon3 from "../../images/svg-6.svg";


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Renewation of your home or bedrijf</ServicesH2>
          <ServicesP>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Helping to make your dream events</ServicesH2>
          <ServicesP>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Our Gallery to visit can be find here </ServicesH2>
          <ServicesP>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
