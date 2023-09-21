import React from "react";
import "./sectionmediaqueries.css";

function ContactSection() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <a href="mailto:wasikurrahmankhan29@gmail.com">
            <i className="fas fa-envelope fa-lg"></i>
            wasikurrahmankhan29@gmail.com
          </a>
        </div>
        <div className="contact-info-container">
          <a href="https://www.linkedin.com">
            <i className="fab fa-linkedin fa-lg"></i> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
