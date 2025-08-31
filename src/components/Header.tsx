import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaBars, FaTimes } from 'react-icons/fa';

interface HeaderProps {
  currentSection: string;
}

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(8, 8, 8, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(0, 255, 65, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--primary-color);
  cursor: pointer;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 65, 0.1);
    transform: translateY(-1px);
  }
`;

const LogoIcon = styled(FaShieldAlt)`
  font-size: 1.8rem;
  filter: drop-shadow(0 0 8px rgba(0, 255, 65, 0.5));
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  height: 100%;

  @media (max-width: 1024px) {
    gap: var(--spacing-sm);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)<{ active: boolean }>`
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--primary-color);
    background: rgba(0, 255, 65, 0.08);
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 255, 65, 0.1) 0%, transparent 100%);
    border-radius: var(--radius-md);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.active ? '80%' : '0'};
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color) 0%, #00cc33 100%);
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
  }

  &:hover::after {
    width: 80%;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 65, 0.1);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(8, 8, 8, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(0, 255, 65, 0.2);
  padding: var(--spacing-xl);
  display: none;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const MobileNavLink = styled.a<{ active: boolean }>`
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  border-left: 4px solid ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  background: ${props => props.active ? 'rgba(0, 255, 65, 0.05)' : 'transparent'};

  &:hover {
    color: var(--primary-color);
    background: rgba(0, 255, 65, 0.08);
    transform: translateX(5px);
  }
`;

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projects', label: 'Projets' },
    { id: 'achievements', label: 'Compétences en action' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        background: isScrolled ? 'rgba(8, 8, 8, 0.98)' : 'rgba(8, 8, 8, 0.95)',
        borderBottomColor: isScrolled ? 'rgba(0, 255, 65, 0.3)' : 'rgba(0, 255, 65, 0.2)',
        boxShadow: isScrolled ? '0 8px 40px rgba(0, 0, 0, 0.6)' : '0 4px 30px rgba(0, 0, 0, 0.5)'
      }}
    >
      <HeaderContent>
        <Logo
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LogoIcon />
          <span>CyberSec</span>
        </Logo>

        <Nav>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              active={currentSection === item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </HeaderContent>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <MobileNav>
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.id}
                  active={currentSection === item.id}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </MobileNavLink>
              ))}
            </MobileNav>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
