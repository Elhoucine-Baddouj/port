import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserShield, FaGraduationCap, FaAward, FaCode } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: var(--spacing-2xl) 0;
  background: var(--background-light);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: var(--spacing-2xl);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--primary-color) 0%, #00cc33 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
`;

const AboutText = styled(motion.div)`
  color: var(--text-secondary);
  line-height: 1.8;
`;

const AboutParagraph = styled.p`
  margin-bottom: var(--spacing-lg);
  font-size: 1.1rem;
`;

const HighlightText = styled.span`
  color: var(--primary-color);
  font-weight: 600;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`;

const StatCard = styled.div`
  background: var(--background-dark);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-3px);
    box-shadow: var(--shadow-glow);
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const AboutImage = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color) 0%, #00cc33 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-glow);

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: var(--background-dark);
    border-radius: 50%;
  }
`;

const ProfileIcon = styled(FaUserShield)`
  font-size: 4rem;
  color: var(--primary-color);
  z-index: 2;
  position: relative;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  color: var(--primary-color);
  opacity: 0.3;
  font-size: 1.5rem;
`;

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>À Propos de Moi</SectionTitle>
          <SectionSubtitle>
            Passionné par la cybersécurité et la protection des systèmes informatiques
          </SectionSubtitle>
        </SectionHeader>

        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AboutParagraph>
            Je suis un <HighlightText>étudiant-ingénieur en cybersécurité</HighlightText> à l'<HighlightText>INPT</HighlightText>, passionné par la protection des systèmes et 
            la réponse aux menaces. Mon expérience inclut la gestion de projets SOC, la réalisation de
             tests d'intrusion et le développement d'outils de sécurisation automatisés.
            </AboutParagraph>

            <AboutParagraph>
            Spécialisé en <HighlightText>analyse SOC</HighlightText>, je maîtrise la <HighlightText>surveillance proactive des menaces</HighlightText>, 
            l’<HighlightText>investigation d’incidents</HighlightText> et l’<HighlightText>analyse approfondie de logs</HighlightText>. Mon expertise inclut
             également le <HighlightText>reverse engineering</HighlightText> pour l’étude de malware et la correlation d’événements 
             de sécurité via des outils <HighlightText>SIEM (Wazuh, Splunk, Elastic)</HighlightText>.
            </AboutParagraph>

            <AboutParagraph>
              Mon approche combine une solide formation technique avec une compréhension 
              approfondie des enjeux de sécurité actuels, permettant de développer des 
              solutions robustes et innovantes.
            </AboutParagraph>

            <StatsGrid
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <StatCard>
                <StatNumber>10+</StatNumber>
                <StatLabel>Projets Sécurisés</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>Top 1%</StatNumber>
                <StatLabel>TryHackMe Mondial</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>5★</StatNumber>
                <StatLabel>Évaluation Freelancer</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>150+</StatNumber>
                <StatLabel>Rooms Complétées</StatLabel>
              </StatCard>
            </StatsGrid>
          </AboutText>

          <AboutImage
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ImageContainer>
              <ProfileIcon />
            </ImageContainer>
            
            <FloatingElements>
              <FloatingElement
                style={{ top: '10%', left: '10%' }}
                animate={{ y: [0, -10, 0], rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <FaGraduationCap />
              </FloatingElement>
              <FloatingElement
                style={{ top: '20%', right: '15%' }}
                animate={{ y: [0, 15, 0], rotate: [0, -360] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <FaAward />
              </FloatingElement>
              <FloatingElement
                style={{ bottom: '20%', left: '15%' }}
                animate={{ y: [0, -12, 0], rotate: [0, 360] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
              >
                <FaCode />
              </FloatingElement>
            </FloatingElements>
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;