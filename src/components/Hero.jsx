import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Serena Liu</h1>
        <p className="tagline">
          Electrical Engineering & Computer Science Student | Robotics & AI Enthusiast
        </p>
        {/* <div className="hero-links">
          <a href="https://github.com/SerenaL1" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/serena-l-161535252/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:serenaliu1@college.harvard.edu">Contact</a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
