import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
