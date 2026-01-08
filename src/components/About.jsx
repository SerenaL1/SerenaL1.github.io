import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm an undergraduate at Harvard University studying Electrical Engineering and Computer Science 
          with a focus on robotics and AI. I'm passionate about building technology that 
          makes a real-world impact.
        </p>
        <p>
          In the past, I've worked at NASA Ames Research Center to develop a waste management 
          simulation system for space missions. I've also worked for Disaster Tech Labs to build an 
          AI-integrated training platform for disaster response volunteers.
        </p>
        <p>
          Currently, I'm exploring deep into robotics simulation, computer vision, and exploring 
          the interpretability of neural networks in robotics applications.
        </p>
        <p>
          In my spare time, I enjoy weightlifting and running along the Charles River.
        </p>

        <h3>Technical Skills</h3>
        
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
      </div>
    </section>
  );
};

export default About;