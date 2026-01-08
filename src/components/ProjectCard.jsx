import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const getYouTubeVideoId = (url) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/);
  return match ? match[1] : null;
};

const getImages = (project) => {
  // If no images but has video, use YouTube thumbnail
  if ((!project.images || project.images.length === 0) && project.video) {
    const videoId = getYouTubeVideoId(project.video);
    if (videoId) {
      return [
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
      ];
    }
  }
  return (project.images ?? (project.image ? [project.image] : [])).slice(0, 3);
};

// Layout 1: triptych (3 equal tiles)
const ThumbTriptych = ({ project }) => {
  const imgs = getImages(project);
  const hasVideo = project.video && (!project.images || project.images.length === 0);
  
  return (
    <div className="thumb thumb--triptych">
      {hasVideo ? (
        // Show single YouTube thumbnail if using video
        <img
          className="thumb__img thumb__img--single"
          src={imgs[0]}
          alt={`${project.title} video thumbnail`}
          loading="lazy"
        />
      ) : (
        // Show multiple images
        imgs.map((src, idx) => (
          <img
            key={src || idx}
            className="thumb__img"
            src={src}
            alt={`${project.title} thumbnail ${idx + 1}`}
            loading="lazy"
          />
        ))
      )}
    </div>
  );
};

// Layout 2: mosaic (tall left + 2 stacked right)
const ThumbMosaic = ({ project }) => {
  const imgs = getImages(project);
  return (
    <div className="thumb thumb--mosaic">
      {imgs.map((src, idx) => (
        <img
          key={src || idx}
          className={`thumb__img thumb__img--${idx}`}
          src={src}
          alt={`${project.title} thumbnail ${idx + 1}`}
          loading="lazy"
        />
      ))}
    </div>
  );
};

const THUMB_LAYOUTS = {
  triptych: ThumbTriptych,
  mosaic: ThumbMosaic,
};

const ProjectCard = ({ project }) => {
  const layoutKey = project.galleryLayout || 'triptych';
  const Thumb = THUMB_LAYOUTS[layoutKey] || THUMB_LAYOUTS.triptych;

  return (
    <Link to={`/project/${project.id}`} className="project-card">
      <div className="project-image">
        <Thumb project={project} />
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
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
        <p>{project.shortDesc}</p>
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;