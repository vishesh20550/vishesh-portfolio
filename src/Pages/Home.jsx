import React, { useContext, useEffect } from 'react';
import "../styles/home.css";
import { MouseContext } from '../contexts/mouse-context';
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png";

export default function Home() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="home-container">
      <div className="content">
        <div className="introduction">
          <span id="hi">Hi I am</span>
          <span id="name">Vishesh Jain</span>
            <span id="tagline">Innovating Code, Crafting Solutions</span>
          <p id="desc">
            A passionate software developer with a knack for transforming
            complex problems into elegant solutions. With expertise in Java,
            React.js, and Android development, I create innovative, user-centric
            applications that drive impact. Whether it's crafting seamless web
            experiences or building robust backend systems, I'm committed to
            excellence in every line of code.
          </p>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/visheshjainiiitd/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <img src={linkedin} alt="LinkedIn" id="linkedin-logo" />
          </a>
          <a
            href="https://github.com/vishesh20550/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <img src={github} alt="Github" id="github-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
