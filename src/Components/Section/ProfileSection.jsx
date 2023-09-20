import React from "react";
import profile_pic from "../assets/profile_pic.png";
import SocialsContainer from "../SocialsContainer/SocialsContainer";

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
          <button
            className="btn btn-color-2"
            // onClick={window.open("./assets/Was")}
          >
            <a
              href={"./assets/Wasikur_resume.pdf"}
              download="Wasikur_Rahman_Khan_CV.pdf"
            >
              Download CV
            </a>
          </button>
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
