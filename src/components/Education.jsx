import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <div className="education-content">
        <h2>Education</h2>
        <div className="education-item">
          <div className="education-header">
            <h3>Harvard University</h3>
   
          </div>
          <p className="education-degree">S.B. in Electrical Engineering</p>
          <p className="education-minor">Secondary in Computer Science</p>
          <p className="education-gpa">GPA: 4.00</p>
        </div>
      </div>
    </section>
  );
};

export default Education;