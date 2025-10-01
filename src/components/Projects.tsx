import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGithub, FaExternalLinkAlt, FaShieldAlt, FaBug, 
  FaEye, FaNetworkWired, FaCode, FaLock, FaServer,
  FaPython, FaJs, FaDocker, FaLinux
} from 'react-icons/fa';
import { SiKalilinux, SiWireshark } from 'react-icons/si';

const ProjectsSection = styled.section`
  padding: var(--spacing-2xl) 0;
  background: var(--background-dark);
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
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(135deg, var(--primary-color) 0%, #00cc33 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'var(--background-dark)' : 'var(--text-secondary)'};
  border: 2px solid var(--primary-color);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &:hover {
    background: var(--primary-color);
    color: var(--background-dark);
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
`;

const ProjectCard = styled(motion.div)`
  background: var(--background-light);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-10px);
    box-shadow: var(--shadow-glow);
  }
`;

const ProjectImage = styled.div<{ bgColor: string }>`
  height: 200px;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  ${ProjectCard}:hover &::before {
    transform: translateX(100%);
  }
`;

const ProjectIcon = styled.div`
  font-size: 3.2rem;
  color: var(--text-primary);
  z-index: 2;
`;

const ProjectContent = styled.div`
  padding: var(--spacing-lg);
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`;

const TechnologyTag = styled.span`
  background: rgba(0, 255, 65, 0.1);
  color: var(--primary-color);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(0, 255, 65, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--text-primary);
    transform: translateX(5px);
  }
`;

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
     {
       id: 1,
       title: "Real-Time Network Traffic Anomaly Detection",
       description: "AI-based Intrusion Detection System (IDS) to identify network threats in real-time. Trained on the CIC-IDS2017 dataset with instant alert mechanisms for detected anomalies.",
       category: "network-ai",
       technologies: ["Python", "Machine Learning", "Network Traffic Analysis", "CICflowMeter"],
       icon: <FaNetworkWired />,
       bgColor: "linear-gradient(135deg, #00ff41 0%, #008020 100%)",
       github: "https://github.com/Elhoucine-Baddouj/IDS",
       demo: null
     },
     {
       id: 2,
       title: "SecuHarden – System Hardening Automation Framework",
       description: "Tool to automatically audit and harden Linux/Windows systems according to security standards (CIS/NIST). Automation of compliance checks and hardening policy application to reduce attack surface by 40%.",
       category: "system-security",
       technologies: ["Python", "System Hardening", "Security Compliance", "Bash Scripting"],
       icon: <FaShieldAlt />,
       bgColor: "linear-gradient(135deg, #ffaa00 0%, #804000 100%)",
       github: null,
       demo: null
     },
     {
       id: 3,
       title: "Area117 - Secure Peer-to-Peer Communication Platform",
       description: "Peer-to-peer instant messaging application with WebRTC, enabling secure communication without a central server. End-to-end encryption via RSA to protect messages and file transfers.",
       category: "web-security",
       technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "RSA Cryptography"],
       icon: <FaLock />,
       bgColor: "linear-gradient(135deg, #0066ff 0%, #003380 100%)",
       github: "https://github.com/Elhoucine-Baddouj/P2PChatApp",
       demo: null
     },
     {
       id: 4,
       title: "Log Ingestion Pipeline and Management Dashboard",
       description: "Scalable log ingestion pipeline processing 500+ events/second, including collection, normalization, and storage of security data. Interactive dashboard with trend visualization, custom alerts, and real-time analysis via ELK Stack.",
       category: "soc-analysis",
       technologies: ["Vector", "Nxlog", "ClickHouse", "React", "Node.js"],
       icon: <FaServer />,
       bgColor: "linear-gradient(135deg, #ff00ff 0%, #800080 100%)",
       github: "https://github.com/Elhoucine-Baddouj/logs_pepline",
       demo: null
     },
     {
       id: 5,
       title: "Python Keylogger - Pentesting Tool",
       description: "Keylogger developed in an academic context, accurately capturing keystrokes and sending data to a specific email address via a secure protocol. Stealth and discrete exfiltration mechanisms to study access techniques.",
       category: "pentesting",
       technologies: ["Python", "SMTP"],
       icon: <FaBug />,
       bgColor: "linear-gradient(135deg, #ff0040 0%, #800020 100%)",
       github: "https://github.com/Elhoucine-Baddouj/Keylogger-pyhton",
       demo: null
     },
     {
       id: 6,
       title: "GAN XSS Attack Simulator - Research Project",
       description: "XSS attack simulator based on a GAN (Generative Adversarial Network) architecture to automatically generate advanced XSS payloads capable of bypassing traditional detection systems.",
       category: "pentesting-ai",
       technologies: ["Python", "Deep Learning", "GAN", "Offensive Cybersecurity", "Web Security", "OWASP Top 10"],
       icon: <FaEye />,
       bgColor: "linear-gradient(135deg, #00ffff 0%, #008080 100%)",
       github: null,
       demo: null
     }
  ];

   const filters = [
     { id: 'all', label: 'All' },
     { id: 'network-ai', label: 'Network + AI' },
     { id: 'system-security', label: 'System Security' },
     { id: 'web-security', label: 'Web Security' },
     { id: 'soc-analysis', label: 'SOC Analysis' },
     { id: 'pentesting', label: 'Pentesting' },
     { id: 'pentesting-ai', label: 'Pentesting + AI' }
   ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
           <SectionTitle>Cybersecurity Projects</SectionTitle>
           <SectionSubtitle>
             Academic and professional projects in information security, penetration testing, and artificial intelligence
           </SectionSubtitle>
        </SectionHeader>

        <FilterContainer>
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectImage bgColor={project.bgColor}>
                  <ProjectIcon>{project.icon}</ProjectIcon>
                </ProjectImage>
                
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <ProjectTechnologies>
                    {project.technologies.map((tech) => (
                      <TechnologyTag key={tech}>{tech}</TechnologyTag>
                    ))}
                  </ProjectTechnologies>
                  
                  <ProjectLinks>
                     {project.github && (
                       <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                         <FaGithub />
                         Source Code
                       </ProjectLink>
                     )}
                     {project.demo && (
                       <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                         <FaExternalLinkAlt />
                         Demo
                       </ProjectLink>
                     )}
                     {!project.github && !project.demo && (
                       <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                         Private project or under development
                       </span>
                     )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;