import React from 'react';
import { Briefcase, ArrowDown, MapPin } from 'lucide-react';
import './Experience.css';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Project Manager',
      company: 'JoulesLabs',
      logo: '/assets/jouleslabs.jpg',
      period: '2023 — Present',
      location: 'Dhaka',
      desc: 'Coordinate development deliverables for SaaS, e-commerce automation, and client portals. Track milestones, facilitate ceremonies, and unblock engineers.',
    },
    {
      role: 'Project Manager',
      company: 'Animoox Studio',
      logo: '/assets/animoox.png',
      period: '2023',
      location: 'Dhaka',
      desc: 'Clarified technical requirements, managed scrum logs, and facilitated product coordination.',
    },
  ];

  return (
    <section id="experience" className="experience-section container reveal-in">
      <div className="experience-grid-layout">
        {/* Left Side: Editorial Context */}
        <div className="experience-info-col">
          <div className="section-header">
            <span className="section-subtitle">PROFESSIONAL JOURNEY</span>
            <h2 className="section-title">Work Experience</h2>
          </div>
          <p className="experience-lead-text">
            Steering development delivery across SaaS, e-commerce, and digital platforms.
          </p>
          <p className="experience-body-text">
            I’ve spent the past 3+ years managing cross-functional product deliveries. In my role at JoulesLabs, I partner with developers and designers to release high-impact web and mobile products.
          </p>
          <p className="experience-body-text muted-p">
            I focus on establishing active scrum loops, refining backlog targets, and maintaining clear communication channels to keep all stakeholders aligned.
          </p>
        </div>

        {/* Right Side: Spotlight Work Card */}
        <div className="experience-card-col">
          <div className="work-card-spotlight">
            <div className="work-card-header">
              <Briefcase size={18} className="work-card-icon" />
              <span className="work-card-title">Work</span>
            </div>

            <div className="work-list">
              {experiences.map((exp, idx) => (
                <div key={idx} className="work-item-row">
                  <img
                    className="work-company-logo"
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                  />
                  <div className="work-item-details">
                    <h3 className="work-company">{exp.company}</h3>
                    <div className="work-meta-row">
                      <span className="work-role">{exp.role}</span>
                      <span className="work-period mono-text">{exp.period}</span>
                    </div>
                    <p className="work-desc-text">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/assets/resume - md. nurul amin.pdf"
              download="MD-NURUL-AMIN-Resume.pdf"
              className="btn btn-secondary work-cv-btn"
            >
              Download CV <ArrowDown size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
