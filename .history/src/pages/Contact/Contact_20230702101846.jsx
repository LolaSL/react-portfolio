import React, { useState } from "react";
import sendMail from "../../helpers";
import "./Style.css";

const ContactForm = () => {
  const initialState = {
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   console.log(formData);
  //   // Reset the form after submission
  //   setFormData(initialState);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data via email
      await sendMail(formData);
      console.log("Email sent successfully");
      // Reset the form after submission
      setFormData(initialState);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h1>Contact me</h1>
      <div>
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;