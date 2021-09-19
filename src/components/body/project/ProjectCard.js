import React from "react";

function ProjectCard({ project }) {
  const data1 = project;
  console.log(project);
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title"> {project.title}</label>
        <div className="project-link">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <ion-icon name="globe-outline"></ion-icon>Demo
              </div>
            </a>
          )}
        </div>
        <span className="photo-image">{project.imge}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
