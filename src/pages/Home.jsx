import React from 'react';
import Hero from '../components/Hero';
import Education from '../components/Education';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Education />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;