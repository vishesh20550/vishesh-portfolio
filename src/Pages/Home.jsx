import React, { useContext, useEffect } from 'react';
import "../styles/home.css";
import { MouseContext } from '../contexts/mouse-context';
import Socials from "../components/Socials";

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
        <Socials/>
      </div>
    </div>
  );
}
