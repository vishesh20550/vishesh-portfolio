import React, { useContext, useEffect } from 'react';
import "../styles/home.css";
import { MouseContext } from '../contexts/mouse-context';
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png";

export default function Home() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-introduction">
          <span id="home-hi">Hi I am</span>
          <span id="home-name">Vishesh Jain</span>
          <span id="home-tagline">Innovating Code, Crafting Solutions</span>
          <p id="home-desc">
            A passionate software developer with a knack for transforming
            complex problems into elegant solutions. With expertise in Java,
            React.js, and Android development, I create innovative, user-centric
            applications that drive impact. Whether it's crafting seamless web
            experiences or building robust backend systems, I'm committed to
            excellence in every line of code.
          </p>
        </div>
        <div className="home-socials">
          <div>
            <a
              href="https://www.linkedin.com/in/visheshjainiiitd/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <img src={linkedin} alt="LinkedIn" id="linkedin-logo" />
            </a>
            <span>LinkedIn</span>
          </div>
          <div>
            <a
              href="https://github.com/vishesh20550/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <img src={github} alt="Github" id="github-logo" />
            </a>
            <span>Github</span>
          </div>
        </div>
      </div>
    </div>
  );
}
