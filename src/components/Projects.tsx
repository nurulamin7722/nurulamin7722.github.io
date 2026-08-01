import React from 'react';
import { Link2 } from 'lucide-react';
import './Projects.css';

interface Project {
  title: string;
  url: string;
  role: string;
  desc: string;
  tags: string[];
  logo: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'DeedSign',
      url: 'https://www.deedsign.com/',
      role: 'TPM/PM',
      desc: 'SaaS eSignature platform to simplify and automate document workflows.',
      tags: ['SaaS', 'eSignature', 'Web & Mobile'],
      logo: '/assets/DeedSign.jpeg',
    },
    {
      title: 'Flowfy',
      url: 'https://apps.shopify.com/store-flow-workflow-automation',
      role: 'TPM/PM',
      desc: 'Shopify workflow automation connecting e-commerce stores with CRMs.',
      tags: ['Shopify', 'No-code', 'Automation'],
      logo: '/assets/Flowfy.jpeg',
    },
    {
      title: 'Syncora: Backup & Restore',
      url: 'https://apps.shopify.com/syncora-backup-restore',
      role: 'TPM/PM',
      desc: 'Shopify application providing automatic, real-time store backups.',
      tags: ['Shopify', 'Backups', 'Security'],
      logo: '/assets/Syncora.jpeg',
    },
    {
      title: 'helloDeutsch',
      url: 'https://hellodeutsch.de/',
      role: 'TPM/PM',
      desc: 'German language learning mobile app featuring vocabulary and progressive lessons.',
      tags: ['Mobile App', 'EdTech'],
      logo: '/assets/helloDeutsch.jpeg',
    },
    {
      title: 'Bangladesh Family',
      url: 'https://www.bdfamily.net/',
      role: 'TPM/PM',
      desc: 'Local directory and community portal serving districts in Bangladesh.',
      tags: ['Local Directory', 'Portal'],
      logo: '/assets/Bangladesh Family.jpeg',
    },
    {
      title: 'Timetics | Arraytics',
      url: 'https://timetics.ai/',
      role: 'TPM/PM',
      desc: 'AI-driven booking system for meeting scheduling and ticket management.',
      tags: ['SaaS Booking', 'AI Scheduling'],
      logo: '/assets/Timetics.jpeg',
    },
    {
      title: 'iVendorz',
      url: 'https://ivendorz.com/',
      role: 'TPM/PM',
      desc: 'B2B marketplace portal connecting global sourcing buyers and supplier leads.',
      tags: ['Buyer Portal', 'B2B Sourcing'],
      logo: '/assets/iVendorz.png',
    },
    {
      title: 'Educarequiz',
      url: 'https://educarequiz.com/',
      role: 'TPM/PM',
      desc: 'Medical quiz portal delivering structured assessments and training.',
      tags: ['EdTech', 'Quiz Platform'],
      logo: '/assets/Educarequiz.png',
    },
  ];

  return (
    <section id="projects" className="projects-section container reveal-in">
      <div className="section-header">
        <span className="section-subtitle">SHOWROOM</span>
        <h2 className="section-title">Things I’ve Made</h2>
      </div>

      <div className="projects-spotlight-grid">
        {projects.map((proj, idx) => {
          // Format link text (strip https:// and trailing /)
          const displayLink = proj.url
            .replace('https://', '')
            .replace('www.', '')
            .split('/')[0];

          return (
            <div key={idx} className="project-card-spotlight">
              <div className="project-logo-frame">
                <img
                  className="project-logo-img"
                  src={proj.logo}
                  alt={`${proj.title} logo`}
                  loading="lazy"
                />
              </div>

              <h3 className="project-card-title">{proj.title}</h3>
              
              <span className="project-card-role mono-text">{proj.role}</span>
              
              <p className="project-card-desc">{proj.desc}</p>
              
              <a
                className="project-card-link"
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link2 size={13} />
                <span>{displayLink}</span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
