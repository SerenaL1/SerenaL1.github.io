import React from 'react';
import { publications } from '../data/publicationsData';
import './Publications.css';

const SUPERSCRIPTS = ['¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];

const AuthorList = ({ authors }) => {
  if (!authors) {
    return <p className="publication-authors publication-authors--pending">Author list pending</p>;
  }

  return (
    <p className="publication-authors">
      {authors.map((author, idx) => (
        <span key={author.name} className={author.me ? 'publication-author is-me' : 'publication-author'}>
          {author.name}
          {author.affiliation && (
            <sup className="publication-affiliation-mark">{SUPERSCRIPTS[author.affiliation - 1]}</sup>
          )}
          {idx < authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  );
};

const AffiliationList = ({ affiliations }) => {
  if (!affiliations || affiliations.length === 0) return null;

  return (
    <p className="publication-affiliations">
      {affiliations.map((aff, idx) => (
        <span key={aff.name} className="publication-affiliation">
          <sup>{SUPERSCRIPTS[idx]}</sup>{' '}
          <a href={aff.url} target="_blank" rel="noopener noreferrer">
            {aff.name}
          </a>
        </span>
      ))}
    </p>
  );
};

const PublicationItem = ({ publication }) => {
  const { title, authors, affiliations, venue, year, links } = publication;
  const primaryLink = links && links[0];

  return (
    <li className="publication-item">
      {primaryLink ? (
        <a
          className="publication-title"
          href={primaryLink.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      ) : (
        <span className="publication-title publication-title--no-link">{title}</span>
      )}

      <AuthorList authors={authors} />
      <AffiliationList affiliations={affiliations} />

      <div className="publication-meta">
        {venue ? (
          <span className="publication-venue">
            {venue}
            {year ? ` · ${year}` : ''}
          </span>
        ) : (
          <span className="publication-venue publication-venue--pending">Venue TBD{year ? ` · ${year}` : ''}</span>
        )}

        {links && links.length > 0 && (
          <span className="publication-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link"
              >
                {link.label}
              </a>
            ))}
          </span>
        )}
      </div>
    </li>
  );
};

const Publications = () => {
  return (
    <section className="publications">
      <h2>Publications</h2>
      <ul className="publications-list">
        {publications.map((publication) => (
          <PublicationItem key={publication.id} publication={publication} />
        ))}
      </ul>
    </section>
  );
};

export default Publications;
