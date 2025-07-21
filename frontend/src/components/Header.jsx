import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Gobi Krishnan</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>

        <button 
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;