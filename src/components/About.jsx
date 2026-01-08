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


      </div>
    </section>
  );
};

export default About;