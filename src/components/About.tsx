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
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
`;

const StatCard = styled.div`
  background: var(--background-dark);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
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
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-2xs);
`;

const StatLabel = styled.div`
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.8px;
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
  overflow: hidden;

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

const ProfileImage = styled.img`
  position: relative;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 50%;
  object-fit: cover;
  z-index: 2;
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
           <SectionTitle>About Me</SectionTitle>
           <SectionSubtitle>
             Passionate about cybersecurity and protecting information systems
           </SectionSubtitle>
        </SectionHeader>

        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <AboutParagraph>
             I am a <HighlightText>cybersecurity engineering student</HighlightText> at <HighlightText>INPT</HighlightText>, passionate about system protection and 
             threat response. My experience includes SOC project management, conducting
              penetration tests, and developing automated security tools.
             </AboutParagraph>

             <AboutParagraph>
             Specialized in <HighlightText>SOC analysis</HighlightText>, I master <HighlightText>proactive threat monitoring</HighlightText>, 
             <HighlightText>incident investigation</HighlightText>, and <HighlightText>in-depth log analysis</HighlightText>. My expertise also includes
              <HighlightText>reverse engineering</HighlightText> for malware study and security event 
              correlation through <HighlightText>SIEM tools (Wazuh, Splunk, Elastic)</HighlightText>.
             </AboutParagraph>

             <AboutParagraph>
               My approach combines solid technical training with a deep understanding 
               of current security challenges, enabling me to develop robust and innovative 
               solutions.
             </AboutParagraph>

            <StatsGrid
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
               <StatCard>
                 <StatNumber>10+</StatNumber>
                 <StatLabel>Secured Projects</StatLabel>
               </StatCard>
               <StatCard>
                 <StatNumber>Top 1%</StatNumber>
                 <StatLabel>Global TryHackMe</StatLabel>
               </StatCard>
               <StatCard>
                 <StatNumber>5★</StatNumber>
                 <StatLabel>Freelancer Rating</StatLabel>
               </StatCard>
               <StatCard>
                 <StatNumber>150+</StatNumber>
                 <StatLabel>Rooms Completed</StatLabel>
               </StatCard>
            </StatsGrid>
          </AboutText>

          <AboutImage
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ImageContainer>
              <ProfileImage
                src={process.env.PUBLIC_URL + '/badoujZamlInterface.png'}
                alt="Elhoucine Baddouj profile"
                loading="eager"
                decoding="async"
              />
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