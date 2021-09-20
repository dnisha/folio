import React from "react";
import "./project-card.css";

function ProjectCard({ project }) {
  const data1 = project;
  console.log(project);
  return (
    <div className="project-card">
      <div className="project-info">
        <div className="left-content">
          <label className="project-title"> {project.title}</label>
          <div className="project-link">
            {project.demo && (
              <a href={project.demo}>
                <div className="link-button">
                  <ion-icon name="globe-outline"></ion-icon>Demo
                </div>
              </a>
            )}
            {project.github && (
              <a href={project.github}>
                <div className="link-button">
                  <ion-icon name="logo-github"></ion-icon>Github
                </div>
              </a>
            )}
            <p className="project-about">{project.about}</p>
            <div className="project-tags">
              {project.tags.map((tag) => {
                return <label className="tags">{tag}</label>;
              })}
            </div>
          </div>
        </div>

        <div className="photo">{project.imge }</div>
      </div>
    </div>
  );
}

export default ProjectCard;
