import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>
      
      <div className="skills-category">
        <h4>Languages</h4>
        <div className="skills-grid">
          <span className="skill-tag">Python</span>
          <span className="skill-tag">C/C#</span>
          <span className="skill-tag">Java</span>
          <span className="skill-tag">JavaScript/TypeScript</span>
          <span className="skill-tag">SQL</span>
          <span className="skill-tag">PHP</span>
          <span className="skill-tag">HTML/CSS</span>
        </div>
      </div>

      <div className="skills-category">
        <h4>Frameworks & Libraries</h4>
        <div className="skills-grid">
          <span className="skill-tag">React</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">Flask</span>
          <span className="skill-tag">Laravel</span>
          <span className="skill-tag">TensorFlow</span>
          <span className="skill-tag">PyTorch</span>
          <span className="skill-tag">OpenCV</span>
          <span className="skill-tag">pandas</span>
          <span className="skill-tag">NumPy</span>
          <span className="skill-tag">Matplotlib</span>
          <span className="skill-tag">ARKit</span>
        </div>
      </div>

      <div className="skills-category">
        <h4>Robotics & AI</h4>
        <div className="skills-grid">
          <span className="skill-tag">ROS</span>
          <span className="skill-tag">Isaac Lab</span>
          <span className="skill-tag">Computer Vision</span>
          <span className="skill-tag">YOLO</span>
          <span className="skill-tag">OpenVLA</span>
          <span className="skill-tag">Reinforcement Learning</span>
          <span className="skill-tag">Docker</span>
        </div>
      </div>

      <div className="skills-category">
        <h4>Design & Manufacturing</h4>
        <div className="skills-grid">
          <span className="skill-tag">SOLIDWORKS (CSWA)</span>
          <span className="skill-tag">AutoCAD</span>
          <span className="skill-tag">Fusion360</span>
          <span className="skill-tag">GD&T</span>
          <span className="skill-tag">CNC Milling</span>
          <span className="skill-tag">Lathe</span>
          <span className="skill-tag">Drill Press</span>
          <span className="skill-tag">3D Printing</span>
          <span className="skill-tag">Photolithography</span>
        </div>
      </div>

      <div className="skills-category">
        <h4>Computational & Statistics</h4>
        <div className="skills-grid">
          <span className="skill-tag">LabVIEW</span>
          <span className="skill-tag">PCA</span>
          <span className="skill-tag">Time-series Analysis</span>
          <span className="skill-tag">Regression</span>
          <span className="skill-tag">Monte Carlo</span>
          <span className="skill-tag">ANOVA</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;