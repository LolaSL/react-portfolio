import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Style.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("MY_SERVICE", "MY-TEMPLATE", form.current, "MY-KEY").then(
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
      <input type="submit" value="Send" disabled={true} />
    </form>
  );
};

export default ContactForm;
