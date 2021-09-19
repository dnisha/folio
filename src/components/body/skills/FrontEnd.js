import React from "react";
import Frontend from "../../data/Frontend";
import "./skill-card.css"

const data1 = Frontend;

function FrontEnd() {
  return (
    <div className="skill-card">
      {data1.map((item) => {
        return <div className="skills-section">{item.icon}</div>;
      })}
    </div>
  );
}

export default FrontEnd;
