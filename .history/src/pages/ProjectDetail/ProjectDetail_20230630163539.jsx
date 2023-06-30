import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList.js";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Style.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    
    <div className="container">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <h3>
        <b>Skills:</b> {project.skills}
      </h3>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDetail;