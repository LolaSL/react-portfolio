import React from "react";
import "./Style.css";

const Home = () => {
  return (
 
    <div className="home">
     
      <div className="about">  <div className="gradient">
        <h1> Hi, My Name is Lola Shepota</h1>
        <div className="prompt">
          <p>
             I'm Highly motivated, passionate
            coder, self-taught, fast-learning, and a team player with deep
            loyalty, dedication, and hardworking ethics. I love to contribute my
            skill set in creating new ideas with fantastic customer experiences.
          </p>
        </div>
      </div>
      <div className="skills">
        <h2> Skills</h2>
        <ol className="list">
          <li className="item">
            <h3> Front-End</h3>
            <span>
              ReactJS,i18n, Redux, React Router, Axios, Bootstrap, HTML5, CSS
              NPM, MaterialUI, STRIPE, PayPal, GIT, Trello
            </span>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>
              NodeJS, ExpressJS, PostgreSQL, MongoDB, Swagger, TDD (Enzyme,
              Express, Jest)
            </span>
          </li>
          <li className="item">
            <h3>Languages</h3>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
      </div>
      )
};

export default Home;
