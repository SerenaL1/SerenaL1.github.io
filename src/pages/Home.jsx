import React from 'react';
import Projects from '../components/Projects';
import './Home.css';

const Home = () => {
  return (
    <div className="landing">
      <aside className="landing-left">
        <img className="landing-photo" src="/head.jpg" alt="Serena Liu" />
        <h1 className="landing-name">Serena Liu</h1>
        <p className="landing-tagline">
          Electrical Engineering @ Harvard 
        </p>

        <p className="landing-about">
          I'm interested in reinforcement learning on robotic hardware. Currently exploring 
          robust algorithms to allow lifelong learning.
        </p>

        <div className="landing-block">
          <span className="landing-label">Education</span>
          <p className="landing-line">
            Harvard University — Electrical Engineering, GPA 4.00
          </p>
        </div>

        <div className="landing-block landing-skills">
          <span className="landing-label">Skills</span>
          <p className="landing-line"><strong>Languages</strong> Python, C/C#, Java, JS/TS, SQL, PHP, HTML/CSS</p>
          <p className="landing-line"><strong>Frameworks</strong> React, Node.js, Flask, Laravel, TensorFlow, PyTorch, OpenCV, pandas, NumPy, Matplotlib, ARKit</p>
          <p className="landing-line"><strong>Robotics & AI</strong> ROS, Isaac Lab, Computer Vision, YOLO, OpenVLA, Reinforcement Learning, Docker</p>
          <p className="landing-line"><strong>Design & Mfg</strong> SOLIDWORKS (CSWA), AutoCAD, Fusion360, GD&T, CNC Milling, Lathe, 3D Printing, Photolithography</p>
          <p className="landing-line"><strong>Computational</strong> LabVIEW, PCA, Time-series Analysis, Regression, Monte Carlo, ANOVA</p>
        </div>

        <div className="landing-contact">
          <a href="https://github.com/SerenaL1" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/serena-l-161535252/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:serenaliu1@college.harvard.edu">Email</a>
        </div>
      </aside>

      <main className="landing-right">
        <section className="landing-current">
          <h2>Current</h2>
          <div className="landing-current-box">
            <p>Currently a Research Intern at JPL.</p>
          </div>
        </section>

        <Projects />
      </main>
    </div>
  );
};

export default Home;
