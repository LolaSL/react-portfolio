import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Style.css";

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ekfabhz",
        "itbU-LS71y1ujnt30",
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
  // const initialState = {
  //   fullName: "",
  //   email: "",
  //   phoneNumber: "",
  //   message: ""
  // };

  // const [formData, setFormData] = useState(initialState);

  // const handleChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   console.log(formData);
  //   // Reset the form after submission
  //   setFormData(initialState);
  // };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h1>Contact me</h1>
      {/* <div>
        <label htmlFor="fullName">Full name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button> */}
          <label>Full name</label>
      <input type="text" name="user_name"/>
      <label>Phone number</label>
      <input type="text" name="user_phone" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;