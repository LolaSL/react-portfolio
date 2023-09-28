import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList.js";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Style.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="card project">
      <h1 lcassName> {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <h3>
        <b>Skills:</b> {project.skills}
      </h3>
      <h4><Link to={project.link} >Project Link</Link></h4><Link to={project.githubLink} ><GitHubIcon /></Link>
    </div>
  );
}

export default ProjectDetail;