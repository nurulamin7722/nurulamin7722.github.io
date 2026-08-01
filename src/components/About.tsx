import React from 'react';
import { Award } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  const awards = [
    {
      title: 'Employee of the Month',
      issuer: 'Jouleslabs',
      year: 'September 2025',
    },
    {
      title: 'Employee of the Month',
      issuer: 'Jouleslabs',
      year: 'October 2025',
    },
  ];

  return (
    <section id="about" className="about-section container reveal-in">
      <div className="about-grid-layout">
        {/* Left Column: Narrative */}
        <div className="about-narrative-col">
          <div className="section-header">
            <span className="section-subtitle">PHILOSOPHY</span>
            <h2 className="section-title">About Me</h2>
          </div>
          <p className="about-lead-text">
            I bridge the gap between business strategy, design intent, and software delivery.
          </p>
          <p className="about-body-text">
            I work closely with engineering leads, product designers, and stakeholders to coordinate day-to-day agile execution. My goal is to ensure project scopes are clearly defined, dependencies are mapped, and milestones are hit predictably.
          </p>
          <p className="about-body-text muted-p">
            I specialize in optimizing scrum workflows, removing technical blockers, and establishing active, transparent reporting channels so that all teams remain aligned on the primary product goal.
          </p>
        </div>

        {/* Right Column: Awards */}
        <div className="about-awards-col">
          <span className="awards-section-title">Awards & Recognition</span>
          <div className="awards-stack">
            {awards.map((award, idx) => (
              <div key={idx} className="award-card-spotlight">
                <div className="award-icon-box">
                  <Award size={18} />
                </div>
                <div className="award-details">
                  <h3 className="award-title">{award.title}</h3>
                  <span className="award-issuer">
                    {award.issuer} &bull; {award.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
