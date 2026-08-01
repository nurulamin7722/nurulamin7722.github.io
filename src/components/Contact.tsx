import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import './Contact.css';

const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact: React.FC = () => {
  const contactLinks = [
    {
      label: 'Email',
      value: 'amin.shuzan@gmail.com',
      href: 'mailto:amin.shuzan@gmail.com',
      icon: <Mail size={16} />,
      isExternal: false,
    },
    {
      label: 'Phone',
      value: '+8801521467334',
      href: 'tel:+8801521467334',
      icon: <Phone size={16} />,
      isExternal: false,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/amin-nurul-md',
      href: 'https://www.linkedin.com/in/amin-nurul-md',
      icon: <Linkedin size={16} />,
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="contact-section container reveal-in">
      <div className="contact-grid-layout">
        {/* Left Side: Text Description */}
        <div className="contact-info-col">
          <div className="section-header">
            <span className="section-subtitle">LET'S CONNECT</span>
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <p className="contact-lead-text">
            Have a project, requirement, or role in mind? Let’s coordinate.
          </p>
          <p className="contact-body-text">
            I’m always open to discussing new technical project coordination pipelines, delivery bottlenecks, or Agile workflow optimization systems. Feel free to shoot me an email or connect with me on LinkedIn.
          </p>
        </div>

        {/* Right Side: Contact Channels Card */}
        <div className="contact-links-col">
          <div className="contact-card-spotlight">
            <div className="contact-card-header">
              <Mail size={18} className="contact-card-icon" />
              <span className="contact-card-title">Channels</span>
            </div>

            <div className="contact-channels-list">
              {contactLinks.map((link, idx) => (
                <a
                  key={idx}
                  className="contact-channel-row"
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact-channel-icon-box">
                    {link.icon}
                  </div>
                  <div className="contact-channel-details">
                    <span className="contact-channel-label">{link.label}</span>
                    <span className="contact-channel-value">{link.value}</span>
                  </div>
                  <ExternalLink size={12} className="contact-channel-arrow" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
