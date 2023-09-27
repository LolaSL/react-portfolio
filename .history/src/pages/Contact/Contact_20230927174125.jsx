// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Container, Row, Col } from "react-bootstrap";
// import { contactConfig } from "./contactConfig";
// import "./Style.css";

// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm("MY_SERVICE", "MY-TEMPLATE", form.current, "MY-KEY").then(
//       (result) => {
//         console.log(result.text);
//         console.log("message sent");
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
//   };
//   return (
//     <Container >
//       <Row className="mb-5 mt-3 p-4">
//         <Col lg="8">
//           {" "}
//           <h1 className="display-4 mb-4 text-center">Contact me</h1>
//           <hr className="t_border my-4 ml-0 text-left" />
//         </Col>
//       </Row>
//       <Row className="sec-sp">
//         <Col lg="5" className="mb-5">
//           <h3 className="color_sec py-4">Get in touch</h3>
//           <address>
//             <strong>      <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
//                 {contactConfig.YOUR_EMAIL}
//               </a></strong>
//               <br />
//               <br />
//               {contactConfig.hasOwnProperty("YOUR_FONE") ? (
//                 <p>
//                   <strong>Phone:</strong> {contactConfig.YOUR_FONE}
//                 </p>
//               ) : (
//                 ""
//               )}
//             </address>
//             <p>{contactConfig.description}</p>
//           </Col>
//         <Col lg="7" className="d-flex align-items-center">
//           <form ref={form} onSubmit={sendEmail} className="contact-form w-100">
//           <Row>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     placeholder="Name"
//                     type="text"
//                     required
//                   />
//                 </Col>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control rounded-0"
//                     id="email"
//                     name="email"
//                     placeholder="Email"
//                     type="email"
//                     required
//                   />
//                 </Col>
//               </Row>
//               <textarea
//                 className="form-control rounded-0"
//                 id="message"
//                 name="message"
//                 placeholder="Message"
//                 rows="5"
//                 required
//               ></textarea>
//               <br />
//             <Row>
//               <Col lg="12" className="form-group">
//                 <input
//                   type="submit"
//                   className="btn"
//                   value="Send"
//                   disabled={true}
//                 />
//               </Col>
//             </Row>
//           </form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ContactForm;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./contactConfig";
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
    <Container >
      <Row className="mb-5 mt-3 p-4">
        <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
          <h1 className="display-4 mb-4 text-center">Contact me</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec-sp">
        <Col lg={5} md={6} className="mb-5">
          <h3 className="color_sec py-4">Get in touch</h3>
          <address>
            <strong>
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
            </strong>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </Col>
        <Col lg={7} md={6} className="d-flex align-items-center">
          <form ref={form} onSubmit={sendEmail} className="contact-form w-100">
            <Row className="w-100">
              <Col lg={6} md={6} sm={12} className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  type="text"
                  required
                />
              </Col>
              <Col lg={6} md={6} sm={12} className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  type="email"
                  required
                />
              </Col>
            </Row>
            <Row className="w-100">
              <Col lg={12} md={12} sm={12} className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </Col>
            </Row>
            <Row className="w-100">
              <Col lg={12} md={12} sm={12} className="form-group ">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Send"
                  disabled={false} 
                />
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;


