import React from "react";
import { CheckCircle, Clock, Star } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "Python",
      level: "Advanced",
      icon: <Star size={20} />,
      status: "primary",
      description: "Strong foundation in OOP, data structures, and algorithms"
    },
    {
      name: "C Programming",
      level: "Learning",
      icon: <Clock size={20} />,
      status: "learning",
      description: "Currently expanding knowledge in low-level programming"
    },
    {
      name: "Problem Solving",
      level: "Proficient", 
      icon: <CheckCircle size={20} />,
      status: "secondary",
      description: "Analytical thinking and algorithmic approach to challenges"
    },
    {
      name: "Data Structures",
      level: "Intermediate",
      icon: <CheckCircle size={20} />,
      status: "secondary", 
      description: "Understanding of arrays, linked lists, trees, and graphs"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className={`skill-card skill-${skill.status}`}>
              <div className="skill-header">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
        
        <div className="skills-note">
          <p className="note-text">
            <strong>Currently Focus:</strong> Deepening my understanding of C programming 
            to complement my Python expertise and gain insights into system-level programming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;