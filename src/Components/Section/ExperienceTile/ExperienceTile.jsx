import React from "react";
import { frontend, backend, python } from "./CardDetails/experienceCardDetails";
import ExperienceCard from "./CardDetails/ExperienceCard";

const ExperienceTile = (props) => {
  function createCard(details) {
    return (
      <ExperienceCard
        id={details.id}
        key={details.id}
        skill={details.skill}
        experience={details.experience}
      />
    );
  }

  let cards;
  if (props.tech === "frontend") {
    cards = frontend.map(createCard);
  } else if (props.tech === "backend") {
    cards = backend.map(createCard);
  } else if (props.tech === "python") {
    cards = python.map(createCard);
  }
  return (
    <div className="details-container">
      <h2 className="experience-sub-title">{props.domain}</h2>
      <div className="article-container">{{ cards }}</div>
    </div>
  );
};

export default ExperienceTile;
