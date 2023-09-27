import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Style.css";
import configMail from "../../../configMail.js";

const Result = () => {
  return (
    <p>Your message has been successefully sent. I will contact you as soon as possible.</p>
  )
}

const ContactForm = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(configMail.MY_SERVICE, configMail.MY_TEMPLATE, e.target, configMail.MY_ID).then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    showResult(true)
  };
  return (
    <form
      onSubmit={sendEmail} className="contact-form">
      <h1 className="form-title">Contact me</h1>
      <label>Full name</label>
      <input type="text" name="fullname" required/>
      <label>Email</label>
      <input type="email" name="email" required/>
      <label>Phone Number</label>
      <input type="text" name="phone" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <input type="submit" value="Send"
        className="true"
      />
      <div className="row">
        {result ? <Result /> : null}

      </div>
    </form>
  );
};

export default ContactForm;
