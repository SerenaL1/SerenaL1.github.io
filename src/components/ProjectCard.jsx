import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const getYouTubeVideoId = (url) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/);
  return match ? match[1] : null;
};

const getImages = (project) => {
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

// ── Paper thumbnail ─────────────────────────────────────────────────────────
// Extracts the arXiv ID so we can show a badge, e.g. "2603.14186"
const getArxivId = (url) => {
  if (!url) return null;
  const match = url.match(/arxiv\.org\/abs\/([\d.]+(?:v\d+)?)/i);
  return match ? match[1] : null;
};

const ThumbPaper = ({ project }) => {
  const arxivId = getArxivId(project.paper);

  return (
    <a
      className="thumb thumb--paper"
      href={project.paper}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      aria-label={`Open paper: ${project.title}`}
    >
      {/* ── decorative corner fold ── */}
      <div className="paper-fold" />

      {/* ── header bar ── */}
      <div className="paper-header">
        <span className="paper-venue-badge">
          {arxivId ? 'arXiv' : 'Paper'}
        </span>
        {arxivId && <span className="paper-arxiv-id">{arxivId}</span>}
      </div>

      {/* ── mock title lines ── */}
      <div className="paper-title-lines">
        <div className="paper-line paper-line--title" />
        <div className="paper-line paper-line--title paper-line--short" />
      </div>

      {/* ── mock author line ── */}
      <div className="paper-authors-line" />

      {/* ── mock abstract block ── */}
      <div className="paper-abstract">
        <div className="paper-line" />
        <div className="paper-line" />
        <div className="paper-line paper-line--short" />
        <div className="paper-line" />
        <div className="paper-line paper-line--shorter" />
      </div>

      {/* ── two-column body ── */}
      <div className="paper-body">
        <div className="paper-col">
          <div className="paper-line" />
          <div className="paper-line" />
          <div className="paper-line paper-line--short" />
          <div className="paper-line" />
          <div className="paper-line paper-line--shorter" />
          <div className="paper-line" />
        </div>
        <div className="paper-col">
          <div className="paper-line" />
          <div className="paper-line paper-line--short" />
          <div className="paper-line" />
          <div className="paper-line" />
          <div className="paper-line paper-line--shorter" />
          <div className="paper-line" />
        </div>
      </div>

      {/* ── hover overlay ── */}
      <div className="paper-hover-overlay">
        <svg className="paper-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
        <span>View Paper</span>
      </div>
    </a>
  );
};

// Layout 1: triptych (3 equal tiles)
const ThumbTriptych = ({ project }) => {
  const imgs = getImages(project);
  const hasVideo = project.video && (!project.images || project.images.length === 0);

  return (
    <div className="thumb thumb--triptych">
      {hasVideo ? (
        <img
          className="thumb__img thumb__img--single"
          src={imgs[0]}
          alt={`${project.title} video thumbnail`}
          loading="lazy"
        />
      ) : (
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
  mosaic:   ThumbMosaic,
  paper:    ThumbPaper,
};

// ── Auto-detect layout when galleryLayout isn't explicitly set ───────────────
const resolveLayout = (project) => {
  if (project.galleryLayout) return project.galleryLayout;
  if (project.paper && !project.images?.length && !project.video) return 'paper';
  return 'triptych';
};

const ProjectCard = ({ project }) => {
  const layoutKey = resolveLayout(project);
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
