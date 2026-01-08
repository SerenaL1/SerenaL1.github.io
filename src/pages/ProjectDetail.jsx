import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import './ProjectDetail.css';

const getYouTubeVideoId = (url) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/);
  return match ? match[1] : null;
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="not-found">
        <h1>Project not found</h1>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  const videoId = getYouTubeVideoId(project.video);
  const layoutClass = project.galleryLayout === 'mosaic' ? 'detail-gallery--mosaic' : 'detail-gallery--triptych';

  return (
    <div className="project-detail">
      <Link to="/" className="back-button">← Back to Home</Link>
      
      <div className="detail-header">
        <h1>{project.title}</h1>
        
        {project.company && (
          <p className="company-info">
            {project.companyUrl ? (
              <a 
                href={project.companyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {project.company} ↗
              </a>
            ) : (
              <span>{project.company}</span>
            )}
          </p>
        )}
        
        <p className="detail-description">{project.description}</p>
      </div>

      {/* Show images gallery if they exist */}
      {project.images && project.images.length > 0 && (
        <div className={`detail-gallery ${layoutClass}`}>
          {project.images.map((img, idx) => (
            <div key={idx} className={`detail-gallery-item detail-gallery-item--${idx}`}>
              <img src={img} alt={`${project.title} ${idx + 1}`} />
            </div>
          ))}
        </div>
      )}

      {/* Show embedded YouTube video below images */}
      {project.video && videoId && (
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`${project.title} video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <div className="detail-content">
        <h2>About This Project</h2>
        
        {/* Handle both array and string details */}
        {Array.isArray(project.details) ? (
          <ul className="project-details-list">
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        ) : (
          <p>{project.details}</p>
        )}

        <h3>Technologies Used</h3>
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              📁 View on GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              🌐 Live Demo
            </a>
          )}
          {project.video && (
            <a href={project.video} target="_blank" rel="noopener noreferrer">
              🎥 Watch on YouTube
            </a>
          )}
          {project.pdf && (
            <a href={project.pdf} target="_blank" rel="noopener noreferrer" download>
              📄 Download PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;