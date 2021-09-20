import React from "react";
import Seperator from "../../common/seperstor";
import "./skills.css";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";

function Skills() {
  return (
    <div className="skills">
      <Seperator />
      <label className="section-title"> Skills</label>
      <div className="skills-container">
        <div className="skill-section">
          <label className="skills-section-title">Frontend</label>
          <div className="skill-name">
            <FrontEnd />
          </div>
          <label className="skills-section-title">Backend</label>
          <div className="skill-name">
            <BackEnd />
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}

export default Skills;
