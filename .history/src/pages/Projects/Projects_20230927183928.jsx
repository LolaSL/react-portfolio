import React from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem.jsx";
import { ProjectList } from "../../helpers/ProjectList.js";
import "./Style.css";


function Projects() {
  return (
    <div className="projects">
      <h1 className="title"> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem id={index} name={project.name} image={project.image} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;