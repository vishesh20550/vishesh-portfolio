import { React, useContext, useState } from "react";
import "../styles/about.css";
import pp from "../assets/pp.jpg";
import { MouseContext } from "../contexts/mouse-context";
import linkWhite from "../assets/link-white.png";
import linkBlack from "../assets/link-black.png";
export default function About() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [linkIcon, setLinkIcon ] = useState("white");
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="image-div">
          <img src={pp} alt="profile" />
        </div>
        <div className="info-div">
          <div className="info">
            Hello! I'm Vishesh Jain, a passionate and driven Software Developer
            with a Bachelor of Technology in Computer Science and Biosciences
            from Indraprastha Institute of Information Technology (IIIT), Delhi. With a
            strong foundation in both backend and frontend technologies, I
            specialize in creating robust and user-centric software solutions.
          </div>
          <div className="expertise-div">
            {/* <span id="expertise-span">My Expertise</span> */}
            <ul className="expertise-list">
              <li className="back-dev">
                <div>Backend Development</div>
              </li>
              <li className="front-dev">
                <div>Frontend Development</div>
              </li>
              <li className="android-dev">
                <div>Android Development</div>
              </li>
            </ul>
          </div>
          <a
            href="https://drive.google.com/file/d/1JFi6AInjZKXFCIjq5iv3r8oLJnxjcTyb/view?usp=sharing"
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => {
              cursorChangeHandler("hovered");
              setLinkIcon("black");
            }}
            onMouseLeave={() => {
              cursorChangeHandler("");
              setLinkIcon("white");
            }}
          >
            <button title="https://drive.google.com/file/d/1JFi6AInjZKXFCIjq5iv3r8oLJnxjcTyb/view?usp=sharing">
              Resume
              <img alt="link" src= {linkIcon === "black" ? linkBlack : linkWhite} />
            </button>
          </a>
          {/* <div className="widwid-div">
            <span>Why I Do What I Do</span>
            <p>
              I thrive on the challenge of turning ideas into functional,
              elegant solutions. My goal is to leverage my technical skills and
              creativity to contribute to innovative projects that make a real
              difference. Whether it's developing a cutting-edge web application
              or enhancing user experiences through Android development, I am
              committed to pushing the boundaries of technology. Feel free to
              explore my portfolio to see some of the projects I've worked on.
              If you have any questions or would like to discuss potential
              opportunities, don’t hesitate to reach out!
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
