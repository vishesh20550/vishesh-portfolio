import React from "react";
import Socials from "../components/Socials";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-card">
          <h2>Contact Me</h2>
          <div className="contact-info">
            <div>
              <strong>Email:</strong>
              <strong>Phone:</strong>
              <strong>Location:</strong>
            </div>
            <div>
              <span>jainvishesh27@gmail.com</span>
              <span>+91- 8295285287</span>
              <span>Tohana, Haryana, India</span>
            </div>
          </div>
        </div>
        <Socials />
      </div>
    </div>
  );
}
