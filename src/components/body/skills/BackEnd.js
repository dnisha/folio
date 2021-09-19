import React from "react";
import Backend from "../../data/Backend";
import "./skill-card.css"

const data2 = Backend;
function BackEnd() {
  return (
    <div className="skill-card">
      {data2.map((item) => {
        return <div className="skills-section">{item.icon}</div>;
      })}
    </div>
  );
}

export default BackEnd;
