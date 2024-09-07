import React, { useContext, useState } from "react";
import projectsJson from "../data/projects.json";
import "../styles/projects.css";
import { MouseContext } from "../contexts/mouse-context";

export default function Projects() {
  const [projects] = useState(projectsJson);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="hover-border-top"></div>
            <div className="hover-border-bottom"></div>
            <div className="hover-border-left"></div>
            <div className="hover-border-right"></div>
            {/* Front side of the card */}
            {/* <img
              src={project.imgsrc}
              alt={project.name}
              className="project-image"
            /> */}
            <div className="project-info">
              <div className="project-name">{project.name}</div>
              <div className="project-desc">{project.desc}</div>
              <div className="tech-used">{project.techUsed.join(" | ")}</div>
              <div className="project-links">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.link}
                    title={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                  >
                    {link.linkName}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
