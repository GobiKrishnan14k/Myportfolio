import React from "react";
import { Code, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Python Learning Projects",
      description: "Collection of Python projects demonstrating core programming concepts, data structures, and algorithmic solutions.",
      technologies: ["Python", "Data Structures", "Algorithms"],
      status: "Completed",
      type: "Academic"
    },
    {
      title: "C Programming Exercises",
      description: "Practice exercises and small programs as part of learning C language fundamentals and memory management.",
      technologies: ["C", "Memory Management", "Pointers"],
      status: "In Progress",
      type: "Learning"
    },
    {
      title: "Problem Solving Portfolio",
      description: "Solutions to coding challenges and algorithmic problems using Python, showcasing problem-solving skills.",
      technologies: ["Python", "Algorithms", "Problem Solving"],
      status: "Ongoing",
      type: "Practice"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects & Learning</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <Code size={24} />
                </div>
                <div className="project-status">
                  <span className={`status-badge status-${project.status.toLowerCase().replace(" ", "-")}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-type">
                <span className="type-label">{project.type}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-note">
          <p className="note-text">
            As a student, I'm continuously working on projects to strengthen my programming skills. 
            My portfolio includes academic projects, learning exercises, and problem-solving challenges 
            that demonstrate my growth as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;