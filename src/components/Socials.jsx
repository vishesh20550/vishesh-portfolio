import React, { useContext, useState } from 'react'
import { MouseContext } from "../contexts/mouse-context";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import mail from "../assets/mail.png";
import Toast from './Toast';
import "../styles/socials.css"


export default function Socials() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const email = "jainvishesh27@gmail.com";
  const [showToast, setShowToast] = useState(false);

  const handleMailClick = (e) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowToast(true);
      })
      .catch((err) => {
        console.error("Could not copy email: ", err);
      });
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="common-socials">
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
      <div>
        <a
          href={`mailto:${email}`}
          title={email}
          onClick={handleMailClick}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <img src={mail} alt="Mail" id="mail-logo" />
        </a>
        <span>Mail</span>
        <Toast
          message="Email copied to clipboard!"
          show={showToast}
          duration={2000}
        />
      </div>
    </div>
  );
}
