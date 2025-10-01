import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Resume from './components/Resume';
import ResumeFooter from './components/ResumeFooter';
import ContactPage from './components/ContactPage';
import CallToAction from './components/CallToAction';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, var(--background-dark) 0%, var(--background-light) 100%);
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

const BackgroundGrid = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  pointer-events: none;
`;

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const preloadImages = (sources: string[]) => {
      return Promise.all(
        sources.map((src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
          })
        )
      );
    };

    const preloadOther = async () => {
      // Précharge d'autres ressources statiques (ex: PDF) sans bloquer en cas d'échec
      try {
        await fetch('/I2CSUpdate20250831-29-nbe22v.pdf', { method: 'HEAD', cache: 'force-cache' });
      } catch {}
    };

    const run = async () => {
      const imagesToPreload = [
        '/introduction-to-cybersecurity.png'
      ];

      await Promise.all([
        preloadImages(imagesToPreload),
        preloadOther()
      ]);

      setIsLoading(false);
    };

    run();
  }, []);

  useEffect(() => {
    // Gestion des routes
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/resume') {
        setCurrentPage('resume');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    // Écouter les changements d'URL
    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange(); // Vérifier l'URL initiale

    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  useEffect(() => {
    if (currentPage !== 'home') return;

    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements'];
          const scrollPosition = window.scrollY + 100;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;
              const offsetHeight = element.offsetHeight;

              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setCurrentSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Fonction pour naviguer vers une page
  const navigateToPage = (page: string) => {
    if (page === 'resume') {
      window.history.pushState({}, '', '/resume');
      setCurrentPage('resume');
    } else if (page === 'contact') {
      window.history.pushState({}, '', '/contact');
      setCurrentPage('contact');
    } else {
      window.history.pushState({}, '', '/');
      setCurrentPage('home');
    }
  };

  // Exposer les fonctions de navigation globalement
  useEffect(() => {
    const originalOpenResume = (window as any).openResume;
    (window as any).openResume = () => navigateToPage('resume');
    (window as any).navigateToPage = navigateToPage;
    
    return () => {
      if (originalOpenResume) {
        (window as any).openResume = originalOpenResume;
      }
      delete (window as any).navigateToPage;
    };
  }, []);

  // Always scroll to top when switching pages (resume, contact, home)
  useEffect(() => {
    // Use instant jump to avoid intermediate animation focusing lower content
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [currentPage]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (currentPage === 'resume') {
    return (
      <>
        <Resume />
        <ResumeFooter onNavigateToHome={() => navigateToPage('home')} />
      </>
    );
  }

  if (currentPage === 'contact') {
    return <ContactPage />;
  }

  return (
    <AppContainer>
      <BackgroundGrid />
      <Header currentSection={currentSection} />
      <MainContent>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <CallToAction />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </MainContent>
    </AppContainer>
  );
};

export default App;
