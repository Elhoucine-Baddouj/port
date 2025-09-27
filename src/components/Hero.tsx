import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaTerminal, FaLock, FaEye } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 var(--spacing-lg);
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  background: linear-gradient(135deg, var(--primary-color) 0%, #00cc33 50%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  position: relative;
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-color) 0%, #00cc33 50%, var(--accent-color) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: glitchText 3s infinite;
  }
  
  &::before {
    animation-delay: 0.1s;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-2px, -2px);
  }
  
  &::after {
    animation-delay: 0.2s;
    clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    transform: translate(2px, 2px);
  }
  
  @keyframes glitchText {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  font-weight: 300;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: var(--spacing-2xl);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  font-family: 'JetBrains Mono', monospace;
  position: relative;
  
  &::after {
    content: '|';
    color: var(--primary-color);
    animation: blink 1s infinite;
    margin-left: 2px;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;


const FloatingIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  color: var(--primary-color);
  opacity: 0.1;
  font-size: 2rem;
`;

const BackgroundEffects = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const Scanlines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 255, 65, 0.03) 2px,
    rgba(0, 255, 65, 0.03) 4px
  );
  z-index: 2;
  pointer-events: none;
`;

const GlitchOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 255, 65, 0.05) 50%,
    transparent 100%
  );
  animation: glitchScan 12s ease-in-out infinite;
  z-index: 3;
  pointer-events: none;
  will-change: transform;
  
  @keyframes glitchScan {
    0%, 100% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
  }
`;

const SecurityGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 65, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 65, 0.08) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridPulse 6s ease-in-out infinite;
  z-index: 0;
  will-change: opacity;
  
  @keyframes gridPulse {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.4; }
  }
`;


const HackingEffects = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  align-items: center;
  margin-top: var(--spacing-xl);
`;

const TerminalWindow = styled.div`
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid var(--primary-color);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 600px;
  font-family: 'JetBrains Mono', monospace;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  overflow: hidden;
`;

const TerminalHeader = styled.div`
  background: rgba(0, 255, 136, 0.1);
  padding: var(--spacing-sm) var(--spacing-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  border-bottom: 1px solid var(--primary-color);
`;

const TerminalButtons = styled.div`
  display: flex;
  gap: var(--spacing-xs);
`;

const TerminalButton = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const TerminalTitle = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
  flex: 1;
`;

const TerminalContent = styled.div`
  padding: var(--spacing-md);
  min-height: 120px;
`;

const TerminalLine = styled.div`
  color: var(--text-primary);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-xs);
  font-family: 'JetBrains Mono', monospace;
`;

const TerminalCursor = styled.span`
  color: var(--primary-color);
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const HackingStats = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
  padding: var(--spacing-md);
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: var(--radius-md);
  min-width: 120px;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
  }
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const texts = [
    "Pentesting & Audit de Sécurité",
    "Analyse de Malware",
    "Sécurité des Réseaux",
    "Cryptographie Appliquée"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <HeroSection id="home">
      <BackgroundEffects>
        <SecurityGrid />
        <Scanlines />
        <GlitchOverlay />
      </BackgroundEffects>
      
             <FloatingIcons>
         <FloatingIcon
           style={{ top: '20%', left: '10%' }}
           animate={{ y: [0, -15, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         >
           <FaShieldAlt />
         </FloatingIcon>
         <FloatingIcon
           style={{ top: '60%', right: '15%' }}
           animate={{ y: [0, 15, 0] }}
           transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
         >
           <FaTerminal />
         </FloatingIcon>
         <FloatingIcon
           style={{ top: '30%', right: '25%' }}
           animate={{ y: [0, -10, 0] }}
           transition={{ duration: 4.5, repeat: Infinity, delay: 2, ease: "easeInOut" }}
         >
           <FaLock />
         </FloatingIcon>
         <FloatingIcon
           style={{ top: '70%', left: '20%' }}
           animate={{ y: [0, 20, 0] }}
           transition={{ duration: 5.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
         >
           <FaEye />
         </FloatingIcon>
       </FloatingIcons>

      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-text="Ingénieur en Cybersécurité"
        >
          Ingénieur en Cybersécurité
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Expert en sécurité informatique & protection des systèmes
        </HeroSubtitle>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HeroDescription>
            Spécialisé en {texts[currentText]}
          </HeroDescription>
        </motion.div>

        <HackingEffects
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TerminalWindow>
            <TerminalHeader>
              <TerminalButtons>
                <TerminalButton color="#ff5f56" />
                <TerminalButton color="#ffbd2e" />
                <TerminalButton color="#27ca3f" />
              </TerminalButtons>
              <TerminalTitle>hack@cybersec:~$</TerminalTitle>
            </TerminalHeader>
            <TerminalContent>
              <TerminalLine>
                <span style={{ color: '#00ff88' }}>$</span> whoami
              </TerminalLine>
              <TerminalLine>
                <span style={{ color: '#00ccff' }}>Elhoucine_Baddouj</span>
              </TerminalLine>
              <TerminalLine>
                <span style={{ color: '#00ff88' }}>$</span> cat skills.txt
              </TerminalLine>
              <TerminalLine>
                <span style={{ color: '#ff6b6b' }}>Pentesting</span> | <span style={{ color: '#4ecdc4' }}>SOC Analyst</span> | <span style={{ color: '#45b7d1' }}>Network Security</span>
              </TerminalLine>
              <TerminalLine>
                <span style={{ color: '#00ff88' }}>$</span> <TerminalCursor>_</TerminalCursor>
              </TerminalLine>
            </TerminalContent>
          </TerminalWindow>
          
          <HackingStats>
            <StatItem>
              <StatNumber>10+</StatNumber>
              <StatLabel>Projects</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>Top 1%</StatNumber>
              <StatLabel>TryHackMe</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>5★</StatNumber>
              <StatLabel>Freelancer</StatLabel>
            </StatItem>
          </HackingStats>
        </HackingEffects>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
