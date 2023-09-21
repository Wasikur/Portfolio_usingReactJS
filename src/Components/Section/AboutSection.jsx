import React from "react";
import "./sectionmediaqueries.css";
import "./AboutTile/about.css";
import about_me2 from "../assets/about-me2.jpg";
import AboutCard from "./AboutTile/AboutCard";
import about from "./AboutTile/aboutCardDetails";
import arrow from "../assets/arrow.png";

function AboutSection() {
  const navigateToExperience = () => {
    window.location.href = "./#experience";
  };

  function createCard(about) {
    return (
      <AboutCard
        id={about.id}
        key={about.id}
        icon={about.icon}
        title={about.title}
        details1={about.details1}
        details2={about.details2}
        details3={about.details3}
      />
    );
  }

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={about_me2} alt="Portrait" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">{about.map(createCard)}</div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis autem quae accusantium ut officiis esse laudantium
              repellat veniam nisi deserunt. Magnam excepturi autem adipisci
              dolorem laboriosam omnis, maiores ipsum aliquam soluta molestiae
              quidem voluptate architecto illo tenetur atque aliquid est iusto,
              optio cupiditate sint iste. Laboriosam molestias nostrum
              voluptatum consectetur.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={navigateToExperience}
      />
    </section>
  );
}
export default AboutSection;
