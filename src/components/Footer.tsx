import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: var(--background-dark);
  border-top: 1px solid var(--border-color);
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--spacing-xl);
  align-items: center;
  margin-bottom: var(--spacing-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-lg);
  }
`;

const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const BrandIcon = styled(FaShieldAlt)`
  color: var(--primary-color);
  font-size: 2rem;
`;

const BrandText = styled.div`
  color: var(--text-primary);
`;

const BrandName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
`;

const BrandTagline = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: var(--background-light);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: var(--background-dark);
    transform: translateY(-3px);
    box-shadow: var(--shadow-glow);
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background: var(--border-color);
  margin: var(--spacing-xl) 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`;

const HeartIcon = styled(FaHeart)`
  color: var(--accent-color);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;

const FooterLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterBrand>
            <BrandIcon />
            <BrandText>
              <BrandName>CyberSec Expert</BrandName>
              <BrandTagline>Protection & Sécurité Numérique</BrandTagline>
            </BrandText>
          </FooterBrand>

          <SocialLinks>
            <SocialLink
              href="https://github.com/Elhoucine-Baddouj/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/baddouj-elhoucine-bb904030a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://tryhackme.com/p/Ace12"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaShieldAlt />
            </SocialLink>
          </SocialLinks>
        </FooterContent>

        <FooterDivider />

        <FooterBottom>
          <Copyright>
            © {currentYear} CyberSec Expert. Fait avec <HeartIcon /> par Elhoucine Baddouj.
          </Copyright>

          <FooterLinks>
            <FooterLink href="#home">Accueil</FooterLink>
            <FooterLink href="#about">À propos</FooterLink>
            <FooterLink href="#projects">Projets</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
