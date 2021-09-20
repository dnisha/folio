import React from "react";
import Seperator from "../../common/seperstor";
import { ProjectDtata } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./projects.css";


const data = ProjectDtata;

function Project() {
  return (
    <div className="projects">
      <Seperator />
      <label className="section-title" > Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project = {project}/>
        })}
      </div>
    </div>
  );
}

export default Project;
