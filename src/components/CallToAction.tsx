import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaComments, FaShieldAlt, FaRocket, FaCode, FaLock } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';

const CallToActionContainer = styled(motion.section)`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  padding: 6rem 2rem;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 65, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 204, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 70%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="0.5" fill="white" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(45deg, transparent 30%, rgba(0, 255, 65, 0.05) 50%, transparent 70%),
      linear-gradient(-45deg, transparent 30%, rgba(0, 204, 255, 0.05) 50%, transparent 70%);
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const MainTitle = styled(motion.h2)`
  font-size: 4rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 0 30px rgba(0, 255, 65, 0.3);

  .highlight {
    background: linear-gradient(135deg, #00ff41 0%, #00ccff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #00ff41 0%, #00ccff 100%);
      border-radius: 2px;
      box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.3rem;
  color: #e0e0e0;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(135deg, #00ff41 0%, #00cc33 100%);
  color: #000000;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 255, 65, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 255, 65, 0.4);
    background: linear-gradient(135deg, #00cc33 0%, #00ff41 100%);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled(motion.button)`
  background: rgba(0, 204, 255, 0.1);
  color: #00ccff;
  border: 2px solid rgba(0, 204, 255, 0.3);
  padding: 1.2rem 2.5rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 204, 255, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background: rgba(0, 204, 255, 0.2);
    border-color: rgba(0, 204, 255, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 204, 255, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ContactInfo = styled(motion.div)`
  color: #b0b0b0;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;

  a {
    color: #00ff41;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      color: #00ccff;
      text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, #00ff41 0%, #00ccff 100%);
        border-radius: 1px;
      }
    }
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
`;

const FloatingIcon = styled(motion.div)<{ top: string; left: string; delay: number }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  color: rgba(0, 255, 65, 0.3);
  font-size: 2rem;
  animation: float 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

const SecurityBadge = styled(motion.div)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid rgba(0, 255, 65, 0.3);
  border-radius: 15px;
  padding: 1rem 1.5rem;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #00ff41;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    right: auto;
    margin: 2rem auto;
    width: fit-content;
  }
`;

const CallToAction: React.FC = () => {
  const handleContactClick = () => {
    if ((window as any).navigateToPage) {
      (window as any).navigateToPage('contact');
    } else {
      window.location.href = '/contact';
    }
  };

  const handleProjectsClick = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CallToActionContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <FloatingElements>
        <FloatingIcon top="10%" left="10%" delay={0}>
          <FaShieldAlt />
        </FloatingIcon>
        <FloatingIcon top="20%" left="85%" delay={1}>
          <FaLock />
        </FloatingIcon>
        <FloatingIcon top="70%" left="15%" delay={2}>
          <FaCode />
        </FloatingIcon>
        <FloatingIcon top="60%" left="80%" delay={3}>
          <FaRocket />
        </FloatingIcon>
      </FloatingElements>

      <SecurityBadge
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <FaShieldAlt />
        Sécurisé & Certifié
      </SecurityBadge>

      <ContentWrapper>
        <MainTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Prêt à <span className="highlight">Sécuriser</span> Votre Projet ?
        </MainTitle>

        <Description
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Transformons ensemble vos défis de cybersécurité en solutions robustes. 
          De l'audit à la mise en œuvre, je livre des solutions sécurisées qui dépassent 
          les attentes et protègent réellement votre infrastructure.
        </Description>

        <ButtonContainer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <PrimaryButton
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
            Me Contacter
          </PrimaryButton>

          <SecondaryButton
            onClick={handleProjectsClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaComments />
            Voir Mes Projets
          </SecondaryButton>
        </ButtonContainer>

        <ContactInfo
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Une question rapide ? <a href="mailto:baddouj.elhoucine@ine.inpt.ac.ma">Contactez-moi directement</a> ou 
          connectez-vous sur <a href="https://www.linkedin.com/in/baddouj-elhoucine-bb904030a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </ContactInfo>
      </ContentWrapper>
    </CallToActionContainer>
  );
};

export default CallToAction;
