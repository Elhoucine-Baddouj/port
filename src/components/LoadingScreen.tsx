import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--background-dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const TerminalWindow = styled.div`
  background: var(--background-light);
  border: 2px solid var(--primary-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-xl);
  min-width: 400px;
  box-shadow: var(--shadow-glow);
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  font-family: var(--font-mono);
  color: var(--primary-color);
`;

const TerminalButtons = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-right: var(--spacing-md);
`;

const TerminalButton = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const TerminalTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const TerminalContent = styled.div`
  font-family: var(--font-mono);
  color: var(--text-primary);
  line-height: 1.6;
`;

const LoadingText = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
`;

const Cursor = styled.span`
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: var(--border-color);
  border-radius: var(--radius-sm);
  overflow: hidden;
  margin-top: var(--spacing-lg);
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: var(--primary-color);
  border-radius: var(--radius-sm);
`;

const LoadingScreen: React.FC = () => {
  const loadingSteps = [
    "Initialisation...",
    "Sécurité...",
    "Modules...",
    "Connexion...",
    "Prêt..."
  ];

  return (
    <LoadingContainer>
      <TerminalWindow>
        <TerminalHeader>
          <TerminalButtons>
            <TerminalButton color="#ff5f56" />
            <TerminalButton color="#ffbd2e" />
            <TerminalButton color="#27ca3f" />
          </TerminalButtons>
          <TerminalTitle>cybersecurity-portfolio.exe</TerminalTitle>
        </TerminalHeader>
        
        <TerminalContent>
          {loadingSteps.map((step, index) => (
            <LoadingText key={index}>
              <span style={{ color: '#00ff88' }}>$</span>
              <span>{step}</span>
              {index === loadingSteps.length - 1 && <Cursor>_</Cursor>}
            </LoadingText>
          ))}
          
                     <ProgressBar>
             <ProgressFill
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               transition={{ duration: 1, ease: "easeInOut" }}
             />
           </ProgressBar>
        </TerminalContent>
      </TerminalWindow>
    </LoadingContainer>
  );
};

export default LoadingScreen;
