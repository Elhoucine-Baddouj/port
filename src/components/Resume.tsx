import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaExternalLinkAlt, FaStar, FaBuilding, FaCalendar, FaCode, FaShieldAlt, FaGraduationCap, FaAward, FaLanguage } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';

const ResumeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  padding: 1.5rem;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 65, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 204, 255, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 70%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="0.5" fill="white" opacity="0.15"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
    pointer-events: none;
  }
`;

const ResumeContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(26, 26, 46, 0.4);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 255, 65, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 255, 65, 0.3);
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #00ff41 0%, #00ccff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: #b0b0b0;
  margin-bottom: 1rem;
  font-weight: 400;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 255, 65, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 65, 0.1);
    border-color: #00ff41;
    transform: translateY(-2px);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ActionButton = styled.button`
  background: transparent;
  border: 1px solid #00ff41;
  color: #00ff41;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: #00ff41;
    color: #000000;
    transform: translateY(-2px);
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #00ff41;
`;

const SectionContent = styled.div`
  color: #e0e0e0;
  line-height: 1.6;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.2rem;
  background: rgba(0, 255, 65, 0.05);
  border-radius: 10px;
  border-left: 3px solid #00ff41;
`;

const JobTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #b0b0b0;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #00ff41;
  font-size: 0.8rem;
  font-weight: 500;
`;

const BulletPoints = styled.ul`
  margin: 0.8rem 0;
  padding-left: 1.2rem;
`;

const BulletPoint = styled.li`
  margin-bottom: 0.4rem;
  color: #e0e0e0;
  font-size: 0.9rem;
`;

const Tools = styled.div`
  margin-top: 0.4rem;
  font-style: italic;
  color: #00ccff;
  font-size: 0.85rem;
`;

const ProjectItem = styled.div`
  margin-bottom: 1.2rem;
  padding: 0.8rem;
  background: rgba(0, 204, 255, 0.05);
  border-radius: 6px;
  border-left: 3px solid #00ccff;
`;

const ProjectTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.4rem;
`;

const CertificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  background: rgba(0, 255, 65, 0.05);
  border-radius: 6px;
  margin-bottom: 0.4rem;
  border: 1px solid rgba(0, 255, 65, 0.2);
`;

const CertificationName = styled.span`
  color: #ffffff;
  font-weight: 500;
  font-size: 0.9rem;
`;

const CertificationIssuer = styled.span`
  color: #00ff41;
  font-size: 0.8rem;
`;

const LanguageItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const LanguageName = styled.span`
  color: #ffffff;
  font-size: 0.9rem;
`;

const LanguageLevel = styled.span`
  color: #00ff41;
  font-size: 0.8rem;
`;

const BackButton = styled.button`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid #00ff41;
  color: #00ff41;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #00ff41;
    color: #000000;
    transform: translateY(-2px);
  }
`;

const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <ResumeContainer>
      <BackButton onClick={handleBack}>
        ← Retour
      </BackButton>
      
      <ResumeContent>
        <Header>
          <Name>Baddouj Elhoucine</Name>
          <Title>Cybersecurity Engineer | Full-Stack Developer</Title>
          
          <ContactInfo>
            <ContactItem>
              <FaEnvelope />
              houssinbaddouj209@gmail.com
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              Rabat, Morocco
            </ContactItem>
            <ContactItem>
              <FaPhone />
              0650820208
            </ContactItem>
          </ContactInfo>

          <SocialLinks>
            <SocialLink href="https://github.com/Elhoucine-Baddouj" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              Elhoucine-Baddouj
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/elhoucine-baddouj" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              elhoucine-baddouj
            </SocialLink>
            <SocialLink href="https://tryhackme.com/p/Elhoucine" target="_blank" rel="noopener noreferrer">
              <SiTryhackme />
              Elhoucine
            </SocialLink>
          </SocialLinks>

          <ActionButtons>
            <ActionButton onClick={handlePrint}>
              Print / PDF
            </ActionButton>
            <ActionButton>
              Hire Me
            </ActionButton>
          </ActionButtons>
        </Header>

        <Section>
          <SectionTitle>
            <FaStar />
            Personal Profile
          </SectionTitle>
          <SectionContent>
            Cybersecurity Engineer experienced in defensive and network security, SOC operations, and incident response,
            skilled in vulnerability analysis and threat detection.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>
            <FaGraduationCap />
            Education
          </SectionTitle>
          <SectionContent>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Third-year Engineering in Cybersecurity and Digital Trust</strong><br />
              INPT, Rabat
            </div>
            <div>
              <strong>Preparatory Classes, Mathematics and Physics (MP)</strong><br />
              CPGE - Ibn Tahir, Errachidia
            </div>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>
            <FaBuilding />
            Professional Experience
          </SectionTitle>
          
          <ExperienceItem>
            <JobTitle>
              Freelance Cybersecurity Consultant
              <Duration>
                <FaCalendar />
                Jan 2025 - Present
              </Duration>
            </JobTitle>
            <Company>
              <FaBuilding />
              Freelancer.com
            </Company>
            <BulletPoints>
              <BulletPoint>
                Freelance Cybersecurity Consultant delivering expert security services, clear client communication, and 5-star results.
              </BulletPoint>
            </BulletPoints>
          </ExperienceItem>

          <ExperienceItem>
            <JobTitle>
              Cybersecurity Intern - SEKERA
              <Duration>
                <FaCalendar />
                July-2025, September-2025
              </Duration>
            </JobTitle>
            <Company>
              <FaBuilding />
              SEKERA
            </Company>
            <BulletPoints>
              <BulletPoint>
                Developed log ingestion pipelines and a custom SIEM system for real-time threat detection in a large-scale
                SOC-as-a-Service project.
              </BulletPoint>
            </BulletPoints>
            <Tools>
              <strong>Tools:</strong> Elasticsearch, Vector, NXlog, React, RESTful API.
            </Tools>
          </ExperienceItem>

          <ExperienceItem>
            <JobTitle>
              Pentest Intern - OGSBC
              <Duration>
                <FaCalendar />
                June-2025, July-2025
              </Duration>
            </JobTitle>
            <Company>
              <FaBuilding />
              OGSBC
            </Company>
            <BulletPoints>
              <BulletPoint>
                Performed web application pentesting, identifying vulnerabilities and recommending fixes to improve security.
              </BulletPoint>
            </BulletPoints>
            <Tools>
              <strong>Tools:</strong> Metasploit, Burp Suite, OWASP ZAP, SQLMap, Wireshark.
            </Tools>
          </ExperienceItem>
        </Section>

        <Section>
          <SectionTitle>
            <FaCode />
            Projects
          </SectionTitle>
          
          <ProjectItem>
            <ProjectTitle>AI-Powered Real-Time Anomaly Detection in Network Traffic</ProjectTitle>
            <BulletPoints>
              <BulletPoint>
                Developed an AI-based IDS for real-time network threat detection, trained on CIC-IDS2017, with immediate
                anomaly alerts.
              </BulletPoint>
            </BulletPoints>
            <Tools>
              <strong>Tools:</strong> Python, Machine Learning, Network Traffic Analysis, CICflowMeter
            </Tools>
          </ProjectItem>

          <ProjectItem>
            <ProjectTitle>SecuHarden – System Hardening and Compliance Automation Framework</ProjectTitle>
            <BulletPoints>
              <BulletPoint>
                Built a tool to audit and harden Linux/Windows systems based on security standards.
              </BulletPoint>
              <BulletPoint>
                Automated compliance checks and applied system hardening to reduce attack surface.
              </BulletPoint>
            </BulletPoints>
            <Tools>
              <strong>Tools:</strong> Python, System Hardening, Security Compliance (CIS/NIST), Bash Scripting
            </Tools>
          </ProjectItem>
        </Section>

        <Section>
          <SectionTitle>
            <FaCode />
            Technical Skills
          </SectionTitle>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
            <div style={{ 
              background: 'rgba(0, 255, 65, 0.05)', 
              padding: '1rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(0, 255, 65, 0.2)' 
            }}>
              <h4 style={{ color: '#00ff41', marginBottom: '0.8rem', fontSize: '1rem' }}>Programming Languages</h4>
              <p style={{ color: '#e0e0e0', margin: 0, fontSize: '0.85rem' }}>Python, Java, Bash, PowerShell, SQL</p>
            </div>

            <div style={{ 
              background: 'rgba(0, 204, 255, 0.05)', 
              padding: '1rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(0, 204, 255, 0.2)' 
            }}>
              <h4 style={{ color: '#00ccff', marginBottom: '0.8rem', fontSize: '1rem' }}>Security Tools & Frameworks</h4>
              <p style={{ color: '#e0e0e0', margin: 0, fontSize: '0.85rem' }}>Wazuh, Suricata, Splunk, OpenVAS, Metasploit</p>
            </div>

            <div style={{ 
              background: 'rgba(0, 255, 65, 0.05)', 
              padding: '1rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(0, 255, 65, 0.2)' 
            }}>
              <h4 style={{ color: '#00ff41', marginBottom: '0.8rem', fontSize: '1rem' }}>Databases & Data Analysis</h4>
              <p style={{ color: '#e0e0e0', margin: 0, fontSize: '0.85rem' }}>ClickHouse, Elasticsearch, MongoDB, SIEM log management</p>
            </div>

            <div style={{ 
              background: 'rgba(0, 204, 255, 0.05)', 
              padding: '1rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(0, 204, 255, 0.2)' 
            }}>
              <h4 style={{ color: '#00ccff', marginBottom: '0.8rem', fontSize: '1rem' }}>Security Architectures</h4>
              <p style={{ color: '#e0e0e0', margin: 0, fontSize: '0.85rem' }}>SOC, SIEM, SOAR, Network Segmentation, Zero Trust</p>
            </div>

            <div style={{ 
              background: 'rgba(0, 255, 65, 0.05)', 
              padding: '1rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(0, 255, 65, 0.2)' 
            }}>
              <h4 style={{ color: '#00ff41', marginBottom: '0.8rem', fontSize: '1rem' }}>Automation & Scripting</h4>
              <p style={{ color: '#e0e0e0', margin: 0, fontSize: '0.85rem' }}>Python scripting, Ansible, PowerShell, Bash</p>
            </div>

            <div style={{ 
              background: 'rgba(0, 204, 255, 0.05)', 
              padding: '1rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(0, 204, 255, 0.2)' 
            }}>
              <h4 style={{ color: '#00ccff', marginBottom: '0.8rem', fontSize: '1rem' }}>Core Competencies</h4>
              <p style={{ color: '#e0e0e0', margin: 0, fontSize: '0.85rem' }}>Network Security, System Hardening, Incident Detection and Response, Vulnerability Management, Threat Hunting</p>
            </div>
          </div>
        </Section>

        <Section>
          <SectionTitle>
            <FaAward />
            Certifications
          </SectionTitle>
          
          <CertificationItem>
            <CertificationName>Introduction to Cybersecurity</CertificationName>
            <CertificationIssuer>Cisco</CertificationIssuer>
          </CertificationItem>
          
          <CertificationItem>
            <CertificationName>Google Cloud Cybersecurity</CertificationName>
            <CertificationIssuer>Google Cloud</CertificationIssuer>
          </CertificationItem>
          
          <CertificationItem>
            <CertificationName>SOC Analyst</CertificationName>
            <CertificationIssuer>LetsDefend</CertificationIssuer>
          </CertificationItem>
        </Section>

        <Section>
          <SectionTitle>
            <FaLanguage />
            Languages
          </SectionTitle>
          
          <LanguageItem>
            <LanguageName>French</LanguageName>
            <LanguageLevel>Professional Proficiency</LanguageLevel>
          </LanguageItem>
          
          <LanguageItem>
            <LanguageName>English</LanguageName>
            <LanguageLevel>Professional Proficiency</LanguageLevel>
          </LanguageItem>
          
          <LanguageItem>
            <LanguageName>Arabic</LanguageName>
            <LanguageLevel>Native Language</LanguageLevel>
          </LanguageItem>
        </Section>
      </ResumeContent>
    </ResumeContainer>
  );
};

export default Resume;
