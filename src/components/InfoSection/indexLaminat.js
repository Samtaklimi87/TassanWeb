import React from "react";
import { Button, ButtonR } from "../ButtonElements";
import {
  Column2,
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
} from "./InfoElements";

const LaminatPage = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  decsription,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  goto,
  imgReSize,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column2>
              
                <TopLine>before</TopLine>
                <ImgWrap imgReSize={imgReSize}>
                <Img src={img} alt={alt} />
              </ImgWrap>
              
            </Column2>
            <Column1>
            <TopLine>after</TopLine>
              <ImgWrap imgReSize={imgReSize}>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default LaminatPage;
