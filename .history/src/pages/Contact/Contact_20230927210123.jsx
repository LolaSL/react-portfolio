import React, {  } from "react";
import emailjs from "@emailjs/browser";
import "./Style.css";

const ContactForm = () => {
  const [result, showResult]= 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_2lp9109", "template_ltgql0n", e.target, "itbU-LS71y1ujnt30").then(
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
      <h1 className="form-title">Contact me</h1>
      <label>Full name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone Number</label>
      <input type="number" name="user_phone" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send"
        className="true"
        // disabled={false}
      />
    </form>
  );
};

export default ContactForm;
