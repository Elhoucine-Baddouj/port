import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';

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

const BrandName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, var(--primary-color) 0%, #00cc33 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const BrandTagline = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  border-radius: 50%;
  color: var(--primary-color);
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: var(--background-dark);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 255, 65, 0.3);
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--border-color) 50%, transparent 100%);
  margin: var(--spacing-xl) 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`;

const HeartIcon = styled(FaHeart)`
  color: #ff6b6b;
  font-size: 0.8rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
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
              <BrandTagline>Cybersecurity & Information Security Specialist</BrandTagline>
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
              <SiTryhackme />
            </SocialLink>
          </SocialLinks>
        </FooterContent>

        <FooterDivider />

        <FooterBottom>
          <Copyright>
            © {currentYear} CyberSec Expert. Made with <HeartIcon /> by Elhoucine Baddouj.
          </Copyright>

          <FooterLinks>
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#experience">Experience</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
