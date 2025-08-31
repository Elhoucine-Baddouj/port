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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
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
  font-size: 4rem;
  color: var(--text-primary);
  z-index: 2;
`;

const ProjectContent = styled.div`
  padding: var(--spacing-xl);
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
      title: "Détection d'Anomalies en Temps Réel dans le Trafic Réseau",
      description: "Système de détection d'intrusions (IDS) basé sur l'IA pour identifier les menaces réseau en temps réel. Entraîné sur le jeu de données CIC-IDS2017 avec mécanisme d'alertes instantanées pour les anomalies détectées.",
      category: "network-ai",
      technologies: ["Python", "Machine Learning", "Analyse de trafic réseau", "CICflowMeter"],
      icon: <FaNetworkWired />,
      bgColor: "linear-gradient(135deg, #00ff41 0%, #008020 100%)",
      github: "https://github.com/Elhoucine-Baddouj/IDS",
      demo: null
    },
    {
      id: 2,
      title: "SecuHarden – Framework d'Automatisation du Durcissement Système",
      description: "Outil pour auditer et durcir automatiquement les systèmes Linux/Windows selon les standards de sécurité (CIS/NIST). Automatisation des vérifications de conformité et application de politiques de durcissement pour réduire la surface d'attaque de 40%.",
      category: "system-security",
      technologies: ["Python", "Durcissement système", "Conformité sécurité", "Scripting Bash"],
      icon: <FaShieldAlt />,
      bgColor: "linear-gradient(135deg, #ffaa00 0%, #804000 100%)",
      github: null,
      demo: null
    },
    {
      id: 3,
      title: "Area117 - Plateforme de Communication Pair-à-Pair Sécurisée",
      description: "Application de messagerie instantanée pair-à-pair avec WebRTC, permettant une communication sécurisée sans serveur central. Chiffrement de bout en bout via RSA pour protéger les messages et transferts de fichiers.",
      category: "web-security",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "Cryptographie RSA"],
      icon: <FaLock />,
      bgColor: "linear-gradient(135deg, #0066ff 0%, #003380 100%)",
      github: "https://github.com/Elhoucine-Baddouj/P2PChatApp",
      demo: null
    },
    {
      id: 4,
      title: "Pipeline d'Ingestion de Logs et Dashboard de Management",
      description: "Pipeline scalable d'ingestion de logs traitant 500+ événements/seconde, incluant collecte, normalisation et stockage des données de sécurité. Dashboard interactif avec visualisation des tendances, alertes personnalisées et analyse temps réel via ELK Stack.",
      category: "soc-analysis",
      technologies: ["Vector", "Nxlog", "ClickHouse", "React", "Node.js"],
      icon: <FaServer />,
      bgColor: "linear-gradient(135deg, #ff00ff 0%, #800080 100%)",
      github: "https://github.com/Elhoucine-Baddouj/logs_pepline",
      demo: null
    },
    {
      id: 5,
      title: "Keylogger Python - Outil de Pentesting",
      description: "Keylogger développé dans un cadre académique, capturant avec précision les frappes clavier et envoyant les données vers une adresse email spécifique via un protocole sécurisé. Mécanismes de furtivité et d'exfiltration discrète pour étudier les techniques d'accès.",
      category: "pentesting",
      technologies: ["Python", "SMTP"],
      icon: <FaBug />,
      bgColor: "linear-gradient(135deg, #ff0040 0%, #800020 100%)",
      github: "https://github.com/Elhoucine-Baddouj/Keylogger-pyhton",
      demo: null
    },
    {
      id: 6,
      title: "GAN Simulateur d'Attaques XSS - Projet de Recherche",
      description: "Simulateur d'attaques XSS basé sur une architecture GAN (Generative Adversarial Network) pour générer automatiquement des payloads XSS évolués capables de contourner les systèmes de détection traditionnels.",
      category: "pentesting-ai",
      technologies: ["Python", "Deep Learning", "GAN", "Cybersécurité offensive", "Web Security", "OWASP Top 10"],
      icon: <FaEye />,
      bgColor: "linear-gradient(135deg, #00ffff 0%, #008080 100%)",
      github: null,
      demo: null
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'network-ai', label: 'Réseau + IA' },
    { id: 'system-security', label: 'Sécurité Système' },
    { id: 'web-security', label: 'Sécurité Web' },
    { id: 'soc-analysis', label: 'Analyse SOC' },
    { id: 'pentesting', label: 'Pentesting' },
    { id: 'pentesting-ai', label: 'Pentesting + IA' }
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
          <SectionTitle>Projets de Cybersécurité</SectionTitle>
          <SectionSubtitle>
            Projets académiques et professionnels en sécurité informatique, pentesting et intelligence artificielle
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
                        Code Source
                      </ProjectLink>
                    )}
                    {project.demo && (
                      <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                        Démo
                      </ProjectLink>
                    )}
                    {!project.github && !project.demo && (
                      <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        Projet privé ou en cours de développement
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
