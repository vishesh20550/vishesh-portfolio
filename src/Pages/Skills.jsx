import React, { useEffect, useState } from "react";
import skillsJson from "../data/skills.json";
import "../styles/skills.css"; 

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch skills data from JSON file
    setSkills(skillsJson);
  }, []);

  return (
    <div className="skills-container">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
