import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Style.css";

const ContactForm = () => {
  const [result, showResult]= useState(false)
  // const form = useRef();

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
    e.target.reset();
    showResult(true)
  };
  return (
    <form
      // ref={form}
      onSubmit={sendEmail} className="contact-form">
      <h1 className="form-title">Contact me</h1>
      <label>Full name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Phone Number</label>
      <input type="text" name="user_phone" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <input type="submit" value="Send"
        className="true"
        // disabled={false}
      />
      <div className="row">
result ? <Result/> : 

      </div>
    </form>
  );
};

export default ContactForm;
