import React from "react";
import Arrow from "../assets/arrow.png";
import ExperienceCard from "./ExperienceTile/CardDetails/ExperienceCard";
import {
  frontend,
  backend,
  python,
} from "./ExperienceTile/CardDetails/experienceCardDetails";

function ExperienceSection() {
  const navigateToProjects = () => {
    window.location.href = "./#projects";
  };

  function createCard(frontend) {
    return (
      <ExperienceCard
        id={frontend.id}
        key={frontend.id}
        skill={frontend.skill}
        experience={backend.experience}
      />
    );
  }
  function createCard(backend) {
    return (
      <ExperienceCard
        id={backend.id}
        key={backend.id}
        skill={backend.skill}
        experience={backend.experience}
      />
    );
  }
  function createCard(python) {
    return (
      <ExperienceCard
        id={python.id}
        key={python.id}
        skill={python.skill}
        experience={python.experience}
      />
    );
  }

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            {frontend.map(createCard)}
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            {backend.map(createCard)}
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Python Development</h2>
            {python.map(createCard)}
          </div>
        </div>
      </div>
      <img
        src={Arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={navigateToProjects}
      />
    </section>
  );
}

export default ExperienceSection;
