import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import './ProjectDetail.css';

const getYouTubeVideoId = (url) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/);
  return match ? match[1] : null;
};

const isRealUrl = (str) => {
  if (!str) return false;
  try { return Boolean(new URL(str)); }
  catch { return false; }
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
  const githubIsUrl = isRealUrl(project.github);

  return (
    <div className="project-detail">
      <Link to="/" className="back-button">← Back to Home</Link>
      
      <div className="detail-header">
        <h1>{project.title}</h1>
        
        {project.company && (
          <p className="company-info">
            {project.companyUrl ? (
              <a href={project.companyUrl} target="_blank" rel="noopener noreferrer">
                {project.company} ↗
              </a>
            ) : (
              <span>{project.company}</span>
            )}
          </p>
        )}
        
        <p className="detail-description">{project.description}</p>
      </div>

      {project.images && project.images.length > 0 && (
        <div className={`detail-gallery ${layoutClass}`}>
          {project.images.map((img, idx) => (
            <div key={idx} className={`detail-gallery-item detail-gallery-item--${idx}`}>
              <img src={img} alt={`${project.title} ${idx + 1}`} />
            </div>
          ))}
        </div>
      )}

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
          {project.paper && (
            <a href={project.paper} target="_blank" rel="noopener noreferrer" className="link-btn link-btn--paper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              View Paper on arXiv
            </a>
          )}

          {project.github && githubIsUrl && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn link-btn--github">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </a>
          )}

          {project.github && !githubIsUrl && (
            <div className="link-btn link-btn--coming-soon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {project.github}
            </div>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-btn link-btn--demo">
              🌐 Live Demo
            </a>
          )}

          {project.video && (
            <a href={project.video} target="_blank" rel="noopener noreferrer" className="link-btn link-btn--video">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch on YouTube
            </a>
          )}

          {project.pdf && (
            <a href={project.pdf} target="_blank" rel="noopener noreferrer" download className="link-btn link-btn--github">
              📄 Download PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;