import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList.js";
import "./Style.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="card project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <h3>
        <b>Skills:</b> {project.skills}
      </h3>
      <h4><a href={project.link} >Project Link</a></h4>
    </div>
  );
}

export default ProjectDetail;