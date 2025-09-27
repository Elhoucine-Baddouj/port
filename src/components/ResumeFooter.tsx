import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';

const FooterContainer = styled.div`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  padding: 3rem 2rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 65, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 204, 255, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 70%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="0.5" fill="white" opacity="0.15"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ConnectSection = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 2rem;
  background: rgba(0, 255, 65, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(0, 255, 65, 0.2);
  backdrop-filter: blur(10px);
`;

const ConnectTitle = styled.h2`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const ConnectDescription = styled.p`
  color: #e0e0e0;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const ActionButton = styled(motion.button)`
  background: transparent;
  border: 2px solid #00ff41;
  color: #00ff41;
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    background: #00ff41;
    color: #000000;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 255, 65, 0.3);
  }
`;

const PortfolioButton = styled(motion.button)`
  background: transparent;
  border: 2px solid #00ccff;
  color: #00ccff;
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    background: #00ccff;
    color: #000000;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 204, 255, 0.3);
  }
`;

const FooterGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 255, 65, 0.2);
`;

const PersonalInfo = styled.div`
  h3 {
    color: #00ff41;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .initials {
    font-size: 1.4rem;
    background: linear-gradient(135deg, #00ff41 0%, #00ccff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    color: #e0e0e0;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .copyright {
    color: #b0b0b0;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const QuickLinks = styled.div`
  h4 {
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  a {
    color: #e0e0e0;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s ease;
    padding: 0.5rem 0;
    border-radius: 5px;
    position: relative;

    &:hover {
      color: #00ff41;
      transform: translateX(5px);
    }

    &::before {
      content: '';
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 2px;
      background: #00ff41;
      transition: width 0.3s ease;
    }

    &:hover::before {
      width: 5px;
    }
  }
`;

const Connect = styled.div`
  h4 {
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  a {
    color: #e0e0e0;
    font-size: 2rem;
    transition: all 0.3s ease;
    padding: 0.5rem;
    border-radius: 8px;

    &:hover {
      color: #00ff41;
      transform: translateY(-3px) scale(1.1);
      background: rgba(0, 255, 65, 0.1);
    }
  }

  .tech-stack {
    color: #b0b0b0;
    font-size: 0.9rem;
    margin: 0;
    text-align: right;
  }
`;

interface ResumeFooterProps {
  onNavigateToHome?: () => void;
}

const ResumeFooter: React.FC<ResumeFooterProps> = ({ onNavigateToHome }) => {
  const scrollToSection = (sectionId: string) => {
    // Si on est sur la page resume, naviguer vers la page d'accueil d'abord
    if (onNavigateToHome) {
      onNavigateToHome();
      // Attendre un peu que la navigation se fasse, puis faire défiler
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Fallback si onNavigateToHome n'est pas fourni
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSendMessage = () => {
    // Naviguer directement vers la page contact
    if ((window as any).navigateToPage) {
      (window as any).navigateToPage('contact');
    } else {
      window.location.href = '/contact';
    }
  };

  const handleViewPortfolio = () => {
    if (onNavigateToHome) {
      onNavigateToHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        {/* Let's Connect Section */}
        <ConnectSection
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ConnectTitle>Let's Connect</ConnectTitle>
          <ConnectDescription>
            Interested in working together? I'd love to discuss how my skills and experience can contribute to your next project.
          </ConnectDescription>
          <ButtonContainer>
            <ActionButton
              onClick={handleSendMessage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              Send Message
            </ActionButton>
            <PortfolioButton
              onClick={handleViewPortfolio}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt />
              View Portfolio
            </PortfolioButton>
          </ButtonContainer>
        </ConnectSection>

        {/* Footer Grid */}
        <FooterGrid
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Personal Information */}
          <PersonalInfo>
            <h3>
              <span className="initials">EB</span>
              Baddouj Elhoucine
            </h3>
            <p>
              Cybersecurity Engineer & Full-Stack Developer building secure, reliable solutions for organizations worldwide.
            </p>
            <p className="copyright">
              © 2025 Baddouj Elhoucine. All rights reserved.
            </p>
          </PersonalInfo>

          {/* Quick Links */}
          <QuickLinks>
            <h4>Quick Links</h4>
            <div className="links">
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                Projects
              </a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
                Experience
              </a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About
              </a>
              <a href="#contact" onClick={(e) => { 
                e.preventDefault(); 
                if ((window as any).navigateToPage) {
                  (window as any).navigateToPage('contact');
                } else {
                  window.location.href = '/contact';
                }
              }}>
                Contact
              </a>
            </div>
          </QuickLinks>

          {/* Connect */}
          <Connect>
            <h4>Connect</h4>
            <div className="social-links">
              <a 
                href="https://github.com/Elhoucine-Baddouj" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/elhoucine-baddouj" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://tryhackme.com/p/Elhoucine" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiTryhackme />
              </a>
            </div>
            <p className="tech-stack">
              Built with React + TypeScript
            </p>
          </Connect>
        </FooterGrid>
      </FooterContent>
    </FooterContainer>
  );
};

export default ResumeFooter;
