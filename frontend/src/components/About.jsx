import React from "react";
import { GraduationCap, Code, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm an AIDS Engineering student with a passion for software development and problem-solving. 
              My journey in programming started with Python, where I've developed a strong foundation in 
              object-oriented programming, data structures, and algorithm design.
            </p>
            
            <p className="about-description">
              Currently, I'm expanding my programming skills by learning C language, which has given me 
              deeper insights into low-level programming concepts and memory management. This combination 
              of high-level and low-level programming knowledge helps me build more efficient and 
              well-structured applications.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <GraduationCap size={32} />
              </div>
              <h3 className="highlight-title">Education</h3>
              <p className="highlight-text">AIDS Engineering Student</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <Code size={32} />
              </div>
              <h3 className="highlight-title">Primary Skill</h3>
              <p className="highlight-text">Python Development</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <BookOpen size={32} />
              </div>
              <h3 className="highlight-title">Currently Learning</h3>
              <p className="highlight-text">C Programming</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;