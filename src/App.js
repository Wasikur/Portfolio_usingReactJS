import React from "react";
import "./App.css";
import "./mediaqueries.css";

import Header from "./Components/Header/Header";
import ProfileSection from "./Components/Section/ProfileSection";
import AboutSection from "./Components/Section/AboutSection";
import ExperienceSection from "./Components/Section/ExperienceSection";
import ProjectsSection from "./Components/Section/ProjectsSection";
import ContactSection from "./Components/Section/ContactSection";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="hero">
      <Header />
      <ProfileSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
export default App;
