import React from "react";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-name">Gobi Krishnan</h3>
              <p className="footer-title">AIDS Engineering Student</p>
              <p className="footer-description">
                Building tomorrow's solutions through code and continuous learning.
              </p>
            </div>
            
            <div className="footer-sections">
              <div className="footer-section">
                <h4 className="footer-section-title">Skills</h4>
                <ul className="footer-list">
                  <li className="footer-list-item">Python Development</li>
                  <li className="footer-list-item">C Programming (Learning)</li>
                  <li className="footer-list-item">Problem Solving</li>
                  <li className="footer-list-item">Data Structures</li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-section-title">Focus Areas</h4>
                <ul className="footer-list">
                  <li className="footer-list-item">Software Development</li>
                  <li className="footer-list-item">Algorithm Design</li>
                  <li className="footer-list-item">System Programming</li>
                  <li className="footer-list-item">Academic Projects</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p className="copyright-text">
                © 2025 Gobi Krishnan. Built with 
                <Heart size={14} className="icon-heart" /> 
                and 
                <Code size={14} className="icon-code" />
              </p>
            </div>
            
            <button className="back-to-top" onClick={scrollToTop}>
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;