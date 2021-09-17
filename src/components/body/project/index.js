import React from "react";

import { ProjectDtata } from "../../data/projects";
import Card from "./card";
import "./projects.css";

function Project() {
  const data = ProjectDtata;

  return (
    <div className="projects">
      <label className = "section-title"> Projects</label>
      <div>
        {data.map((projects) => {
         
          return  <Card projects = {projects}/>;
        })}
      </div>
    </div>
  );
}

export default Project;
