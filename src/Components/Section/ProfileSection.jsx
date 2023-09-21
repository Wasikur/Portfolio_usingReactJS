import React from "react";
import profile_pic from "../assets/profile_pic.png";
import SocialsContainer from "../SocialsContainer/SocialsContainer";
import "./sectionmediaqueries.css";

function ProfileSection() {
  const navigateToContact = () => {
    window.location.href = "./#contact";
  };
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={profile_pic}
          className="profile_pic"
          alt="Wasikur Rahman Khan profile"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Wasikur Rahman Khan</h1>
        <p className="section__text__p2">Frontend and Python developer</p>
        <div className="btn-container">
          <a
            href="https://drive.google.com/file/d/1e2amJHu_Z59ZZ8nArW6gvneY7e77rghT/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            download="Wasikur_Rahman_Khan_CV.pdf"
          >
            <button className="btn btn-color-2">Download CV</button>
          </a>
          <button className="btn btn-color-1" onClick={navigateToContact}>
            Contact Info
          </button>
        </div>
        <SocialsContainer />
      </div>
    </section>
  );
}

export default ProfileSection;
