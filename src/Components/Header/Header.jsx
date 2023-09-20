import React, { useState, useEffect } from "react";
// import "../Header/header.css";
import MenuLinks from "../NavBars/NavLinks/MenuLinks";
import NavLinks from "../NavBars/NavLinks/NavLinks";
import portfolio from "../assets/portfolio_logo.gif";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import "../NavBars/navbar.css";

function Header() {
  // Dark Mode Handling
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Store theme preference in local storage
  };

  useEffect(() => {
    // Check for theme preference in local storage on component mount
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
    document.body.className = theme;
  }, [theme]);
  // Hamburger Menu Handling
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <nav id="desktop-nav">
        <div id="upper_logo">
          <img src={portfolio} alt="portfolio_gif" />
        </div>
        <div>
          <NavLinks />
        </div>
        <button id="toggle_icon" onClick={toggleTheme}>
          {theme === "light-theme" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </button>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Wasikur Rahman Khan</div>
        <div className={`hamburger-menu${isMenuOpen ? "-open" : ""}`}>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <MenuLinks onClick={closeMenu} />
        </div>
      </nav>
    </>
  );
}

export default Header;
