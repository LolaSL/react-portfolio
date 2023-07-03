import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Style.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4y0rixe",
        "template_jnt102j",
        form.current,
        "itbU-LS71y1ujnt30"
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
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h1>Contact me</h1>
      <label>Full name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" di />
    </form>
  );
};

export default ContactForm;
