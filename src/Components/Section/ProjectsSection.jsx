import React from "react";
import ProjectCard from "./ProjectsTile/ProjectCard"; // Importing the Card component
import projects from "./ProjectsTile/projectCardDeatils"; // Importing project data
import arrow from "../assets/arrow.png"; // Importing an image

function ProjectsSection() {
  const navigateToContact = () => {
    window.location.href = "./#contact"; // Function to navigate to a specific section on the page
  };

  function createCard(project) {
    return (
      <ProjectCard
        id={project.id}
        key={project.id}
        img={project.img}
        alt={project.alt}
        title={project.title}
      />
    );
  }

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">{projects.map(createCard)} </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={navigateToContact} // Click event to navigate to the "contact" section
      />
    </section>
  );
}

export default ProjectsSection;
