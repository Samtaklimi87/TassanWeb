import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  

  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: pink;

  @media screen and (max-width: 480px) {
    min-height: 00px;
  }
`;


export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
// margin-left: 32px;
text-align: center;
  margin-top: 32px;
  text-decoration: none;
//   background: blue;
  color: black;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
     margin-left: 16px;
     margin-top: 8px;
  }
`;

export const FormCotent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: orange;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 32px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 20px 32px;
  }
`;

export const FormH1 = styled.h1`
   margin-bottom: 40px;
   transform: rotateZ(90deg);
   
  font-size: 40px;
  color:  "#fff";
  font-weight: bold;
  text-align: center;
  padding: 18px;

`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color:  "#fff";
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormInputTextArea = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  height: 10rem;
  @media screen and (max-width: 400px) {
    height: 6rem;
  }
`;

export const FormButton = styled.button`
  background: "#345EEF";
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: "#fff";
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: "#fff";
  font-size: 14px;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
`;