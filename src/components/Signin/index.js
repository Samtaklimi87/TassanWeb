import React , { useState } from "react";
import {
  Container,
  Form,
  FormCotent,
  FormH1,
  FormInput,
  FormInputTextArea,
  FormLabel,
  FormWrap,
  Icon,
  IconWrap,
  FormButton,
} from "./SigninElements";

// import { useTranslation } from "react-i18next";
import { send } from "emailjs-com";


const SignIn = () => {
// //   const { t, i18n } = useTranslation();
  const [toSend, setToSend] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send("TassanCoGmail", "ContactTassan", toSend, "user_4Oalt5S6mX6OxTFKrIuGb")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({ email: "", subject: "", message: "" });
        setSubmitted(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            Tassaaan<span style={{ color: "Red" }}>C</span>o
          </Icon>
          <FormCotent>
          <Form action="#" onSubmit={onSubmit}>
              <FormH1>:)</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                htmlFor="for"
                value={toSend.email}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="for">Subject</FormLabel>
              <FormInput
                type="text"
                name="subject"
                htmlFor="for"
                value={toSend.subject}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInputTextArea
                type="text"
                name="message"
                htmlFor="for"
                value={toSend.message}
                onChange={handleChange}
                required
              />

              <FormButton type="submit">Send</FormButton>
            </Form>
          </FormCotent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
