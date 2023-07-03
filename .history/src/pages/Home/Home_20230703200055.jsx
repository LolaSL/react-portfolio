import React from "react";
import "./Style.css";

const Home = () => {
  return (
    <div className="@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.gradient {
  --size: 250px;
  --speed: 50s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  background-image: linear-gradient(hsl(158, 82, 57, 85%), hsl(252, 82, 57));
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

@media (min-width: 720px) {
  .gradient {
    --size: 500px;
  }
}

body {
  background-color: #222;
  position: absolute;
  inset: 0;
  display: flex;
  place-content: center;
  align-items: center;
  overflow: hidden;
}

/* This is just to transition when you change the viewport size. */
* {
  transition: all 0.25s ease-out;
}
">
    <div className="home">
      <div className="about">
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
    </div></div>
  );
};

export default Home;
