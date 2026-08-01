import React from 'react';
import { Mail, ArrowDown, ExternalLink } from 'lucide-react';
import './Hero.css';

const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="hero-section container reveal-in">
      <div className="hero-grid">
        {/* Left Side: Editorial Intro */}
        <div className="hero-intro-col">
          <h1 className="hero-headline">
            Technical Project Manager steering digital execution.
          </h1>
          <p className="hero-paragraph">
            Hello! I’m Md. Nurul Amin 👋. As a Technical Project Manager with 3+ years of experience, my passion is coordinating cross-functional engineering teams to ship high-performing products.
          </p>
          <p className="hero-paragraph">
            From my base in Dhaka, Bangladesh 🇧🇩, I use modern Agile frameworks, project planning tools, and clear communication channels to turn complex product requirements into predictable software releases. I'm excited to help teams optimize their delivery lifecycle and build the future of the web.
          </p>
        </div>

        {/* Right Side: Portrait Image + Links */}
        <div className="hero-portrait-col">
          <div className="portrait-image-wrapper">
            <img
              className="hero-avatar-spotlight"
              src="/assets/profile.jpg"
              alt="Portrait of Md. Nurul Amin"
              loading="eager"
            />
          </div>

          <div className="portrait-social-block">
            <span className="social-connect-label">Connect with me</span>
            <div className="social-connect-links">
              <a href="https://github.com/nurulamin7722" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/amin-nurul-md" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:amin.shuzan@gmail.com" className="social-icon-btn" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>

            <div className="portrait-actions-stack">
              <button onClick={() => handleScrollTo('contact')} className="btn btn-primary action-stack-btn">
                Get In Touch
              </button>
              <a
                href="/assets/resume - md. nurul amin.pdf"
                download="MD-NURUL-AMIN-Resume.pdf"
                className="btn btn-secondary action-stack-btn"
              >
                Download Resume <ArrowDown size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
