import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { useNavigation } from './NavigationContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Header.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { currentPath, navigateTo } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for header background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigateTo(path);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container-wrapper">
          <a
            href="/"
            className="header-logo-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            aria-label="Go to home"
          >
            <img
              className="header-avatar-img"
              src="/assets/profile.jpg"
              alt="Md. Nurul Amin"
            />
          </a>

          {/* Floating Pill Desktop Navigation */}
          <nav className="desktop-nav-pill">
            <ul className="nav-pill-list">
              {navItems.map((item) => (
                <li key={item.path} className="nav-pill-item">
                  <a
                    href={item.path}
                    className={`nav-pill-link ${currentPath === item.path ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.path);
                    }}
                  >
                    {item.label}
                    {currentPath === item.path && <span className="active-dot"></span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Mobile Menu Toggler */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-toggle-btn"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="drawer-header">
          <span className="logo-text">NAVIGATION</span>
          <button onClick={() => setIsOpen(false)} className="close-btn" aria-label="Close menu">
            <X size={18} />
          </button>
        </div>
        <nav className="mobile-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className={currentPath === item.path ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
