import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary-color);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: var(--spacing-3xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);

  &:nth-child(odd) {
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 40px;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 40px;
    }
  }
`;

const TimelineContent = styled.div`
  background: var(--background-dark);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  width: 48%;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border-style: solid;
    transform: translateY(-50%);

    @media (max-width: 768px) {
      display: none;
    }
  }

  ${TimelineItem}:nth-child(odd) &::before {
    right: -10px;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent var(--background-dark);
  }

  ${TimelineItem}:nth-child(even) &::before {
    left: -10px;
    border-width: 10px 10px 10px 0;
    border-color: transparent var(--background-dark) transparent transparent;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border: 4px solid var(--background-dark);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  box-shadow: var(--shadow-glow);

  @media (max-width: 768px) {
    left: 20px;
    transform: translate(-50%, -50%);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
`;

const CompanyName = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
`;

const JobMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const JobDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`;

const JobTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
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

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "SEKERA",
      location: "Casablanca, Maroc",
      period: "07/2025 - Présent",
      description: "J’ai travaillé sur un projet SOC en tant que service, en participant à la conception et à la mise en place de pipelines de logs, de solutions SOAR, de systèmes SIEM, de gestion centralisée des logs et de règles de détection des menaces.",
      technologies: ["Vecor", "NXlog", "Clickhouse", "Threat Hunting", "Incident Response","SIEM","SOAR"]
    },
    {
      title: "Penetration Tester intern",
      company: "OGSBC",
      location: "Tanger, Maroc",
      period: "06/2025 - 07/2025",
      description: "J’ai effectué des tests d’intrusion sur des applications web afin d’identifier et d’exploiter les vulnérabilités, et j’ai rédigé des rapports détaillant ces failles tout en proposant des recommandations pour renforcer la sécurité des systèmes.",
      technologies: ["OWASP", "Burp Suite", "Metasploit", "Nmap", "SQLmap", "Nikto", "Acunetix"]
    },
    {
      title: "Cybersecurity Freelancer",
      company: "freelancer.com",
      location: "",
      period: "",
      description: "J’ai travaillé sur plusieurs projets en cybersécurité, allant de la détection de vulnérabilités à la sécurisation d’applications et de systèmes, et j’ai obtenu un rank de 5 étoiles pour la qualité et l’efficacité de mes livrables.",
      technologies: ["Automatisation & scripting", "Analyse et résolution de problèmes", "Network&Web security", "Cryptographie"]
    },
   
  ];

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Expérience Professionnelle</SectionTitle>
          <SectionSubtitle>
            Parcours professionnel dans le domaine de la cybersécurité
          </SectionSubtitle>
        </SectionHeader>

        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <TimelineDot />
              <TimelineContent>
                <JobTitle>{experience.title}</JobTitle>
                <CompanyName>{experience.company}</CompanyName>
                
                <JobMeta>
                  <MetaItem>
                    <FaCalendarAlt />
                    {experience.period}
                  </MetaItem>
                  <MetaItem>
                    <FaMapMarkerAlt />
                    {experience.location}
                  </MetaItem>
                </JobMeta>

                <JobDescription>{experience.description}</JobDescription>

                <JobTechnologies>
                  {experience.technologies.map((tech) => (
                    <TechnologyTag key={tech}>{tech}</TechnologyTag>
                  ))}
                </JobTechnologies>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
