import React from "react";
import NavLinks from "../NavBars/NavLinks/NavLinks";
import SocialsContainer from "../SocialsContainer/SocialsContainer";

function Footer() {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <NavLinks />
        </div>
      </nav>
      <SocialsContainer />
      <p>Copyright &copy; 2023 Wasikur Rahman Khan. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
