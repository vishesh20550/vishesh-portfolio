import React, { useEffect, useState } from "react";
import skillsJson from "../data/skills.json";
import "../styles/skills.css"; 

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsJson);
  }, []);

  return (
    <div className="skills-container">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-card-inner">
              <div className="skill-card-back">
                <img
                  src={skill.imgSrc}
                  alt={skill.name}
                  className="skill-image" 
                />
              </div>
              <div className="skill-card-front">
                <div className="skill-name">{skill.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
