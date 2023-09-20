import React from "react";

const AboutCard = (props) => {
  return (
    <div className="details-container">
      <i className={props.icon}></i>
      <h3>{props.title}</h3>
      <p>
        {props.details1} <br />
        {props.details2} <br />
        {props.details3}
      </p>
    </div>
  );
};

export default AboutCard;
