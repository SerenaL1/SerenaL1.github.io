import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Let's Connect</h3>
        <div className="footer-links">
          <a href="https://github.com/SerenaL1" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/serena-l-161535252/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:serenaliu1@college.harvard.edu">Contact</a>
        </div>
        <p className="footer-text">© 2026 Serena Liu</p>
      </div>
    </footer>
  );
};

export default Footer;