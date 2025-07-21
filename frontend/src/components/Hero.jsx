import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Gobi Krishnan</h1>
          <h2 className="hero-title">AIDS Engineering Student</h2>
          <p className="hero-description">
            Passionate about software development with expertise in Python and currently expanding my skills in C programming. 
            Focused on building robust applications and solving complex problems through code.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn-primary" 
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <button className="scroll-indicator" onClick={scrollToAbout}>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;