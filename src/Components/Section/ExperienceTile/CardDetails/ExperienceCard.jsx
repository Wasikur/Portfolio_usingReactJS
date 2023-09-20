import React from "react";
import checkmark from "../../../assets/checkmark.png";

const ExperienceCard = (props) => {
  return (
    <div className="article-container">
      <article>
        <img src={checkmark} alt="Experience icon" className="icon" />
        <div>
          <h3>{props.skill}</h3>
          <p>{props.experience}</p>
        </div>
      </article>
    </div>
  );
};

export default ExperienceCard;
