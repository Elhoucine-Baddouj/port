import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaShieldAlt, FaTerminal, FaNetworkWired, FaLock, 
  FaBug, FaEye, FaCode, FaServer, FaDatabase, FaCloud,
  FaLinux, FaWindows, FaDocker, FaGithub, FaPython,
  FaJs, FaJava, FaRust, FaUserShield, FaSearch, FaChartBar,
  FaDatabase as FaDatabaseIcon, FaSpider, FaExclamationTriangle,
  FaBinoculars, FaCheck, FaUserLock, FaKey
} from 'react-icons/fa';
import { SiCplusplus, SiGo, SiKalilinux, SiWireshark, SiSplunk, SiElastic } from 'react-icons/si';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
`;

const SkillCategory = styled(motion.div)`
  background: var(--background-light);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`;

const CategoryIcon = styled.div`
  color: var(--primary-color);
  font-size: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
`;

const SkillsList = styled.div`
  display: grid;
  gap: var(--spacing-md);
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  background: var(--background-dark);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    background: rgba(0, 255, 65, 0.05);
  }
`;

const SkillInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;

const SkillIcon = styled.div`
  color: var(--primary-color);
  font-size: 1.2rem;
`;

const SkillName = styled.span`
  color: var(--text-primary);
  font-weight: 500;
`;

const SkillLevel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`;

const SkillDot = styled.div<{ filled: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.filled ? 'var(--primary-color)' : 'var(--border-color)'};
`;

const ToolsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;

const ToolCard = styled(motion.div)`
  background: var(--background-light);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-3px);
    box-shadow: var(--shadow-glow);
  }
`;

const ToolIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
`;

const ToolName = styled.div`
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.9rem;
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: calc(100% + 10px);
  transform: translateX(-50%);
  width: 280px;
  max-width: 80vw;
  background: rgba(10, 14, 14, 0.98);
  backdrop-filter: blur(6px);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.4;
  z-index: 10;
  box-shadow: 0 8px 30px rgba(0,0,0,0.35);

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: rgba(10, 14, 14, 0.98);
    border-left: 1px solid var(--border-color);
    border-top: 1px solid var(--border-color);
    transform: translateX(-50%) rotate(45deg);
  }
`;

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [activeTool, setActiveTool] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveTool(null);
    };
    window.addEventListener('keydown', onKey, { passive: true } as any);
    return () => window.removeEventListener('keydown', onKey as any);
  }, []);

  const skillCategories = [
    {
      title: "Detection & Monitoring",
      icon: <FaShieldAlt />,
      skills: [
        { name: "SIEM", level: 5, icon: <FaServer /> },
        { name: "Suricata & Snort", level: 4, icon: <FaExclamationTriangle /> },
        { name: "ELK Stack", level: 4, icon: <FaDatabase /> },
        { name: "Log Analysis", level: 4, icon: <FaWindows /> },
        { name: "Threat Hunting", level: 3, icon: <FaBinoculars /> }
      ]
    },
    {
      title: "Pentesting & Audit",
      icon: <FaBug />,
      skills: [
        { name: "Web Pentesting", level: 5, icon: <FaEye /> },
        { name: "Network Pentesting", level: 5, icon: <FaNetworkWired /> },
        { name: "Mobile Pentesting", level: 2, icon: <FaShieldAlt /> },
        { name: "Social Engineering", level: 4, icon: <FaUserShield /> },
        { name: "Code Audit", level: 4, icon: <FaCode /> }
      ]
    },
    {
      title: "Malware Analysis",
      icon: <FaEye />,
      skills: [
        { name: "Static Analysis", level: 5, icon: <FaCode /> },
        { name: "Dynamic Analysis", level: 5, icon: <FaTerminal /> },
        { name: "Reverse Engineering", level: 4, icon: <FaBug /> },
        { name: "Packet Analysis", level: 4, icon: <FaNetworkWired /> },
        { name: "Digital Forensics", level: 3, icon: <FaServer /> }
      ]
    },
    {
      title: "Application Security",
      icon: <FaCode />,
      skills: [
        { name: "Secure Coding (OWASP)", level: 5, icon: <FaLock /> },
        { name: "Input Validation", level: 5, icon: <FaCheck /> },
        { name: "Encryption (AES, RSA, TLS)", level: 4, icon: <FaShieldAlt /> },
        { name: "Secure Authentication", level: 4, icon: <FaUserLock /> },
        { name: "API Security (JWT, OAuth2)", level: 4, icon: <FaKey /> }
      ]
    },
    {
      title: "Network Security",
      icon: <FaNetworkWired />,
      skills: [
        { name: "Security Architecture", level: 5, icon: <FaServer /> },
        { name: "Firewall & IDS/IPS", level: 5, icon: <FaLock /> },
        { name: "VPN & Cryptography", level: 4, icon: <FaShieldAlt /> },
        { name: "Cloud Security", level: 4, icon: <FaCloud /> },
        { name: "IoT Security", level: 3, icon: <FaNetworkWired /> }
      ]
    },
    {
      title: "Secure Development",
      icon: <FaCode />,
      skills: [
        { name: "Python", level: 5, icon: <FaPython /> },
        { name: "JavaScript/Node.js", level: 4, icon: <FaJs /> },
        { name: "Java", level: 4, icon: <FaJava /> },
        { name: "C/C++", level: 3, icon: <SiCplusplus /> },
        { name: "Bash", level: 3, icon: <FaRust /> }
      ]
    }
  ];

  const tools = [
    { name: "Kali Linux", icon: <SiKalilinux /> },
    { name: "Wireshark", icon: <SiWireshark /> },
    { name: "Metasploit", icon: <FaBug /> },
    { name: "Nmap", icon: <FaNetworkWired /> },
    { name: "Burp Suite", icon: <FaShieldAlt /> },
    { name: "Splunk", icon: <SiSplunk /> },
    { name: "Wazuh", icon: <FaShieldAlt /> },
    { name: "OWASP ZAP", icon: <FaBug /> },
    { name: "ELK Stack", icon: <SiElastic /> },
    { name: "SQLMap", icon: <FaDatabaseIcon /> },
    { name: "WhatWeb", icon: <FaSpider /> },
    { name: "pfSense", icon: <FaShieldAlt /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGithub /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Windows", icon: <FaWindows /> }
  ];

  const toolDescriptions: Record<string, string> = {
    'Kali Linux': "Linux distribution focused on cybersecurity, used for penetration testing, auditing, and forensics, with many integrated tools (Nmap, Metasploit, Wireshark, etc.).",
    'Wireshark': "Network packet analyzer for capturing and inspecting traffic to detect anomalies, attacks, or data leaks.",
    'Metasploit': "Exploitation framework for developing, testing, and executing exploits against vulnerable systems.",
    'Nmap': "Network scanner for discovering hosts, services, and versions, and conducting security audits.",
    'Burp Suite': "HTTP(S) interception/analysis tool for identifying and exploiting web vulnerabilities.",
    'Splunk': "Platform for collecting, indexing, and visualizing logs in real-time for monitoring and incident detection.",
    'Wazuh': "Open-source SIEM offering intrusion detection, log management, integrity monitoring, and threat response.",
    'OWASP ZAP': "Open-source web security scanner for automatically detecting vulnerabilities (XSS, SQLi, etc.).",
    'ELK Stack': "Elasticsearch, Logstash, Kibana: centralize, process, and visualize large volumes of logs.",
    'SQLMap': "Automated tool for testing/exploiting SQL injections to demonstrate unauthorized access risks.",
    'WhatWeb': "Scanner identifying technologies and frameworks of a website (CMS, servers, languages, plugins).",
    'pfSense': "Open-source firewall and router based on FreeBSD, offering advanced network security features, VPN, and traffic monitoring.",
    'Docker': "Container platform for deploying applications in a portable and isolated way.",
    'Git': "Version control system for managing and tracking code changes in teams.",
    'Linux': "Open-source operating system, stable and flexible, widely used in cybersecurity.",
    'Windows': "Microsoft operating system, very present in enterprises and often targeted by attacks."
  };

  const renderSkillLevel = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <SkillDot key={i} filled={i < level} />
    ));
  };

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Technical Skills</SectionTitle>
          <SectionSubtitle>
            Deep expertise in cybersecurity domains
          </SectionSubtitle>
        </SectionHeader>

        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <CategoryHeader>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              
              <SkillsList>
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name}>
                    <SkillInfo>
                      <SkillIcon>{skill.icon}</SkillIcon>
                      <SkillName>{skill.name}</SkillName>
                    </SkillInfo>
                    <SkillLevel>
                      {renderSkillLevel(skill.level)}
                    </SkillLevel>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <SectionTitle style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            Tools & Technologies
          </SectionTitle>
          
          <ToolsGrid>
            {tools.map((tool, index) => (
              <ToolCard
                key={tool.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onHoverStart={() => setHoveredTool(index)}
                onHoverEnd={() => setHoveredTool((h) => (h === index ? null : h))}
                onFocus={() => setHoveredTool(index)}
                onBlur={() => setHoveredTool((h) => (h === index ? null : h))}
                onClick={() => setActiveTool((a) => (a === index ? null : index))}
                role="button"
                tabIndex={0}
              >
                <ToolIcon>{tool.icon}</ToolIcon>
                <ToolName>{tool.name}</ToolName>
                <Tooltip
                  initial={{ opacity: 0, scale: 0.95, y: -4 }}
                  animate={hoveredTool === index || activeTool === index ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: -4 }}
                  transition={{ duration: 0.18 }}
                >
                  {toolDescriptions[tool.name]}
                </Tooltip>
              </ToolCard>
            ))}
          </ToolsGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
