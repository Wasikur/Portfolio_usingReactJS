import React from "react";

const ProjectCard = (props) => {
  const openExternalLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img src={props.img} alt={props.alt} className="project-img" />
      </div>
      <h2 className="experience-sub-title project-title">{props.title}</h2>
      <div className="btn-container">
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => openExternalLink(props.codelink)}
        >
          GitHub
        </button>
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => openExternalLink(props.demolink)}
        >
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
