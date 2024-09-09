import React, { useState, useContext, useEffect } from "react";
import "../styles/experience.css";
import experienceData from "../data/experienceData.json";
import { MouseContext } from "../contexts/mouse-context";

export default function Experience() {
  const [filteredData, setFilteredData] = useState(experienceData);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [selectedType, setSelectedType] = useState("work");

  const handleTypeChange = (type) => {
    setSelectedType(type);
    const data = experienceData.filter((item) => item.type === type);
    setFilteredData(data);
  };


  

  return (
    <div className="experience-container">
      <div className="toggle-buttons">
        <div
          className={selectedType === "work" ? "exp-active" : ""}
          onClick={() => handleTypeChange("work")}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          Work
        </div>
        <div
          className={selectedType === "education" ? "exp-active" : ""}
          onClick={() => handleTypeChange("education")}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          Education
        </div>
      </div>

      <div className="timeline">
        {filteredData.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-content">
              <h3>{item.companyName}</h3>
              <p id="exp-title">{item.title}</p>
              <p id="exp-date">
                {item.startDate} - {item.endDate}
              </p>
              <p id="exp-location">{item.location}</p>
              {selectedType === "work" && item.techStack && (
                <p className="exp-tech-stack">
                  Tech Stack: {item.techStack.join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
