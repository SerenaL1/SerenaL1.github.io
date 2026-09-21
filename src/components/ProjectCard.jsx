import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const blurb = project.description || project.shortDesc;

  return (
    <Link to={`/project/${project.id}`} className="project-card">
      <h3 className="project-card-title">{project.title}</h3>

      {project.company && (
        <p className="company-name">
          {project.companyUrl ? (
            <a
              href={project.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {project.company}
            </a>
          ) : (
            <span>{project.company}</span>
          )}
        </p>
      )}

      {blurb && <p className="project-card-blurb">{blurb}</p>}
    </Link>
  );
};

export default ProjectCard;
