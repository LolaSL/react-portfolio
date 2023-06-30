import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList.js";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Style.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (

    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <h3>
        <b>Skills:</b> {project.skills}
      </h3>
      <h4> <a href={project.link} >ProjectLink:</a></h4><GitHubIcon />
    </div>
  );
}

export default ProjectDetail;