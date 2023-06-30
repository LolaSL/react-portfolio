import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import "./Style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Lola Shepota</h2>
        <div className="prompt">
          <p>
            FS Junior Software Developer: I'm a highly motivated, passionate
            coder, self-taught, fast-learning, and a team player. In addition,
            I’m a loyal, dedicated, hardworking employee and willing to
            contribute my skill set to create new ideas with fantastic customer
            experiences while continuing my growth and development.
          </p>
          <a href="mailto:email@example.com"><EmailIconSend Email</a>
          <a href="#"> /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS,i18n, Redux, React Router, Axios, Bootstrap, HTML5, CSS
              NPM, MaterialUI, STRIPE, PayPal, GIT, Trello
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, PostgreSQL, MongoDB, Swagger, TDD (Enzyme,
              Express, Jest)
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
