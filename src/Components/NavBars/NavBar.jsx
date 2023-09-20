import React from "react";
import "./navbar.css";
import NavLinks from "./NavLinks/NavLinks";

const NavBar = () => {
  return (
    <nav id="desktop-nav">
      <div id="upper_logo">
        <a href="/">
          <img src={logo} alt="portfolio_gif" />
        </a>
      </div>
      <div>
        <NavLinks />
      </div>
      {/* <img src={moon} id="toggle_icon" alt="theme_icon" /> */}
    </nav>
  );
};

export default NavBar;
