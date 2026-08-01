import React from 'react';
import { MapPin, GraduationCap } from 'lucide-react';
import './Education.css';

export const Education: React.FC = () => {
  const educationList = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Bangladesh University of Business & Technology (BUBT)',
      period: 'Oct 2017 – Dec 2021',
      location: 'Dhaka',
    },
    {
      degree: 'Higher Secondary Certificate (Science)',
      institution: 'Nilphamari Govt. College',
      period: 'Jun 2012 – Jun 2014',
      location: 'Nilphamari',
    },
    {
      degree: 'Secondary School Certificate (Science)',
      institution: 'Nilphamari Govt. High School',
      period: 'Jan 2007 – Dec 2011',
      location: 'Nilphamari',
    },
  ];

  const certifications = [
    {
      title: 'Software Quality Assurance & Cyber Security',
      provider: 'IT Training BD',
    },
  ];

  return (
    <section id="education" className="education-section container reveal-in">
      <div className="education-grid-layout">
        {/* Left Side: Editorial context */}
        <div className="education-info-col">
          <div className="section-header">
            <span className="section-subtitle">ACADEMICS</span>
            <h2 className="section-title">Education</h2>
          </div>
          <p className="education-lead-text">
            My academic foundation and technical certifications.
          </p>
          <p className="education-body-text">
            I hold a Bachelor of Science in Computer Science & Engineering from BUBT, where I focused on software engineering principles, agile management methodologies, and databases.
          </p>
          
          <div className="certs-block-spotlight">
            <span className="certs-section-title">Certifications</span>
            <div className="certs-list-spotlight">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-item-spotlight">
                  <h4 className="cert-title">{cert.title}</h4>
                  <span className="cert-provider">{cert.provider}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Education List */}
        <div className="education-list-col">
          <div className="education-card-spotlight">
            <div className="edu-card-header">
              <GraduationCap size={18} className="edu-card-icon" />
              <span className="edu-card-title">Education Timeline</span>
            </div>

            <div className="edu-timeline-list">
              {educationList.map((edu, idx) => (
                <div key={idx} className="edu-timeline-row">
                  <span className="edu-row-period mono-text">{edu.period}</span>
                  <div className="edu-row-details">
                    <h3 className="edu-row-degree">{edu.degree}</h3>
                    <div className="edu-row-meta">
                      <span className="edu-row-institution">{edu.institution}</span>
                      <span className="edu-row-loc mono-text">
                        <MapPin size={10} /> {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
