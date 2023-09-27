import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import "./Style.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "MY_SERVICE",
        "MY-TEMPLATE",
        form.current,
        "MY-KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <Row>
        <Col> <h1 classname="display-4 mb-4">Contact me</h1></Col>
      </Row>
      <Row className="sec-sp">
        <Col lg="5" classname="mb-5">
          <h3 className="color_sec py-4">Get in touch</h3>
          <address><</address>
        </Col>
      </Row>
 
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h1>Contact me</h1>
      <label>Full name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" disabled={true} />
    </form>   </Container>
  );
};

export default ContactForm;
