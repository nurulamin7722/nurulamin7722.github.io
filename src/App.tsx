import { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { NavigationProvider, useNavigation } from './components/NavigationContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { ArrowUp } from 'lucide-react';

function AppContent() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { currentPath, navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleFooterLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigateTo(path);
  };

  // Page Routing Logic
  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return (
          <>
            <About />
            <Skills />
            <Education />
          </>
        );
      case '/projects':
        return <Projects />;
      case '/contact':
        return <Contact />;
      case '/':
      default:
        return (
          <>
            <Hero />
            <Experience />
          </>
        );
    }
  };

  return (
    <div className="page-outer-wrapper">
      <div className="page-inner-sheet">
        {/* Navigation Header */}
        <Header />

        {/* Main Sections */}
        <main id="main-content" style={{ flexGrow: 1 }}>
          {renderPage()}
        </main>

        {/* Premium Footer */}
        <footer style={{
          borderTop: '1px solid var(--border)',
          padding: '36px 0',
          marginTop: '60px',
          color: 'var(--muted)',
          fontSize: '13px',
        }}>
          <div className="container" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            padding: '0'
          }}>
            <div style={{
              display: 'flex',
              gap: '16px',
              fontWeight: 500
            }}>
              <a href="/" style={{ color: 'var(--muted)' }} onClick={(e) => handleFooterLink(e, '/')}>Home</a>
              <a href="/about" style={{ color: 'var(--muted)' }} onClick={(e) => handleFooterLink(e, '/about')}>About</a>
              <a href="/projects" style={{ color: 'var(--muted)' }} onClick={(e) => handleFooterLink(e, '/projects')}>Projects</a>
              <a href="/contact" style={{ color: 'var(--muted)' }} onClick={(e) => handleFooterLink(e, '/contact')}>Contact</a>
            </div>

            <p style={{ margin: 0 }}>
              &copy; {new Date().getFullYear()} Md. Nurul Amin. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Floating Scroll to Top button */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${showScrollTop ? 'show' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        {/* Skip to Content for Screen Readers */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
