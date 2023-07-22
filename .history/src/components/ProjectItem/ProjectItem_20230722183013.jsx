import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css"

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}

    > <div></div><h1 className="item-name"> {name} </h1>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
     
    </div>
  );
}

export default ProjectItem;