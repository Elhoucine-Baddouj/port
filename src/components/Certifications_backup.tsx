import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaTrophy, FaStar, FaExternalLinkAlt, FaCode, FaShieldAlt,
  FaUserTie, FaGlobe, FaCalendarAlt, FaMapMarkerAlt
} from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';

const AchievementsSection = styled.section`
  padding: var(--spacing-2xl) 0;
  background: linear-gradient(135deg, var(--background-dark) 0%, #1a1a2e 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 204, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: var(--spacing-3xl);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--primary-color) 0%, #00ccff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionDivider = styled.div`
  width: 100px;
  height: 4px;
  background: linear-gradient(135deg, var(--primary-color) 0%, #00ccff 100%);
  margin: 0 auto var(--spacing-2xl) auto;
  border-radius: 2px;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-3xl);
`;

const TryHackMeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: var(--spacing-2xl);
`;

const TryHackMeCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 2px solid var(--primary-color);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  position: relative;
  overflow: hidden;
  max-width: 800px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(0, 255, 136, 0.05) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.8s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

// TryHackMe Section

const TryHackMeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
`;

const TryHackMeIcon = styled.div`
  color: var(--primary-color);
  font-size: 3rem;
`;

const TryHackMeInfo = styled.div`
  flex: 1;
`;

const TryHackMeTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 var(--spacing-sm) 0;
`;

const TryHackMeSubtitle = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
`;

const TryHackMeDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  font-size: 0.95rem;
  text-align: justify;
`;

const RankingSection = styled.div`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`;

const RankingTitle = styled.h4`
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const RankingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--spacing-sm);
`;

const RankingCard = styled.div`
  text-align: center;
  padding: var(--spacing-sm);
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: var(--radius-md);
`;

const RankingNumber = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
`;

const RankingLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatCard = styled.div`
  text-align: center;
  padding: var(--spacing-sm);
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: var(--radius-md);
`;

const StatNumber = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TryHackMeLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  background: var(--primary-color);
  color: var(--background-dark);
  text-decoration: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: #00cc33;
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
  }
`;

// Reviews Section
const ReviewsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const ReviewsHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const TryHackMeSectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  text-align: center;
`;

const ReviewsTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
`;

const ReviewsSubtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`;

const ReviewCard = styled(motion.a)`
  background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: var(--spacing-md);
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.1);
    font-family: serif;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
    border-color: var(--primary-color);
  }

  &:hover::after {
    transform: translateX(100%);
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`;

const ProfilePicture = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ClientInfo = styled.div`
  flex: 1;
`;

const ClientName = styled.h4`
  color: white;
  font-weight: 600;
  margin: 0 0 var(--spacing-xs) 0;
  font-size: 1.1rem;
`;

const ClientHandle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 var(--spacing-xs) 0;
  font-size: 0.9rem;
`;

const ClientLocation = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
`;

const Rating = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
`;

const Star = styled.div`
  color: #fbbf24;
  font-size: 1.1rem;
`;

const ReviewText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0 0 var(--spacing-md) 0;
  font-style: italic;
`;

const ServiceTag = styled.div`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
`;

const ExternalLinkIcon = styled.div`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(-5px);

  ${ReviewCard}:hover & {
    opacity: 1;
    transform: translateY(0);
    color: var(--primary-color);
  }
`;

// Certification Section Styled Components
const CertificationIntro = styled(motion.div)`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CertificationIntroText = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  font-style: italic;
  opacity: 0.9;
`;

const CertificationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: var(--spacing-xl);
  width: 100%;
  margin-top: var(--spacing-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const CertificationCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 2px solid var(--primary-color);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  position: relative;
  overflow: hidden;
  max-width: 700px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 204, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const CertificationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const CertificationIcon = styled.div`
  color: var(--primary-color);
  font-size: 2.5rem;
  filter: drop-shadow(0 0 10px rgba(0, 255, 65, 0.3));
`;

const CertificationInfo = styled.div`
  flex: 1;
`;

const CertificationTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(135deg, var(--primary-color) 0%, #00ccff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CertificationSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
`;

const CertificationIssuer = styled.p`
  font-size: 0.9rem;
  color: var(--primary-color);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CertificationContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const CertificationImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CertificationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const CertificationDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: var(--spacing-lg);
`;

const CertificationActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const CertificationLink = styled(motion.a)<{ primary?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background: ${props => props.primary 
    ? 'linear-gradient(135deg, var(--primary-color) 0%, #00cc33 100%)' 
    : 'rgba(255, 255, 255, 0.1)'
  };
  color: ${props => props.primary ? 'var(--background-dark)' : 'var(--text-primary)'};
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.primary ? 'transparent' : 'rgba(255, 255, 255, 0.2)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.primary 
      ? '0 8px 25px rgba(0, 255, 65, 0.3)' 
      : '0 4px 15px rgba(255, 255, 255, 0.1)'
    };
    background: ${props => props.primary 
      ? 'linear-gradient(135deg, #00cc33 0%, var(--primary-color) 100%)' 
      : 'rgba(255, 255, 255, 0.15)'
    };
  }
`;

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });


  const reviews = [
    {
      id: 1,
      name: "Albert S.",
      handle: "@albertsareh26",
      location: "Bucharest, Romania",
      rating: 5,
      review: "He was just amazing. He managed the project with professionalism and he delivered the project even faster than the deadline. Great communication in English and he helped me each step of the process and answered me questions.",
      service: "GUI HTTP Sniffer",
      technologies: ["Python", "Visual Studio"],
      profileInitial: "A",
      freelancerLink: "https://www.fr.freelancer.com/u/houssinb9?review_context_id=38972646&review_type=project&frm=houssinb9&sb=t"
    },
    {
      id: 2,
      name: "May A.",
      handle: "@Ma3333",
      location: "Riyadh, Saudi Arabia",
      rating: 5,
      review: "He worked hard to fix the simulation issue, he is a hard working person and I would be happy to work with him in the future.",
      service: "ns3 Expert Needed for Network Simulation Fix",
      technologies: ["Wireless", "Engineering", "Computer Security", "Cisco", "Network Administration"],
      profileInitial: "M",
      freelancerLink: "https://www.fr.freelancer.com/u/houssinb9?review_context_id=38890378&review_type=project&frm=houssinb9&sb=t"
    },
    {
      id: 3,
      name: "B",
      handle: "@Bscrab",
      location: "Ancien client (inactif)",
      rating: 5,
      review: "Elhoucine B is of outstanding character and goes above and beyond what is necessary to complete a project. I will definitely use him again.",
      service: "KeyHelp Control Panel Configuration Assistance",
      technologies: ["System Admin", "Linux", "Web Security", "DNS", "Network Administration"],
      profileInitial: "B",
      freelancerLink: "https://www.fr.freelancer.com/u/houssinb9?review_context_id=38906883&review_type=project&frm=houssinb9&sb=t"
    }
  ];

  return (
    <AchievementsSection id="achievements" ref={ref}>
      <Container>
                 <SectionHeader
           initial={{ opacity: 0, y: 50 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
         >
                       <SectionTitle>Compétences en Action</SectionTitle>
           <SectionDivider />
           <SectionSubtitle>
             Parcours TryHackMe et retours d'expérience de mes clients Freelancer
           </SectionSubtitle>
         </SectionHeader>

                 <ContentGrid>
           {/* TryHackMe Section */}
           <TryHackMeContainer>
             <TryHackMeCard
               initial={{ opacity: 0, y: 50 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
               <TryHackMeSectionTitle>TryHackMe</TryHackMeSectionTitle>
               
               <TryHackMeHeader>
                 <TryHackMeIcon>
                   <SiTryhackme />
                 </TryHackMeIcon>
                 <TryHackMeInfo>
                   <TryHackMeTitle>Plateforme de formation cybersécurité</TryHackMeTitle>
                   <TryHackMeSubtitle>Apprentissage pratique et immersif</TryHackMeSubtitle>
                 </TryHackMeInfo>
               </TryHackMeHeader>

               <TryHackMeDescription>
                 TryHackMe est une plateforme leader dans l'apprentissage de la cybersécurité, 
                 offrant des environnements virtuels sécurisés pour pratiquer le hacking éthique, 
                 la forensique numérique et la défense informatique. Chaque "room" représente 
                 un défi unique permettant d'acquérir des compétences pratiques essentielles.
               </TryHackMeDescription>

                               <RankingSection>
                  <RankingTitle>Classements & Performances</RankingTitle>
                  <RankingGrid>
                    <RankingCard>
                      <RankingNumber>Top 1%</RankingNumber>
                      <RankingLabel>Mondial</RankingLabel>
                    </RankingCard>
                    <RankingCard>
                      <RankingNumber>#195</RankingNumber>
                      <RankingLabel>Maroc</RankingLabel>
                    </RankingCard>
                    <StatCard>
                      <StatNumber>150+</StatNumber>
                      <StatLabel>Rooms Complétées</StatLabel>
                    </StatCard>
                    <StatCard>
                      <StatNumber>5★</StatNumber>
                      <StatLabel>Évaluation</StatLabel>
                    </StatCard>
                  </RankingGrid>
                </RankingSection>

               <TryHackMeLink 
                 href="https://tryhackme.com/p/Ace12" 
                 target="_blank" 
                 rel="noopener noreferrer"
               >
                 <FaExternalLinkAlt />
                 Voir mon profil
               </TryHackMeLink>
                        </TryHackMeCard>
         </TryHackMeContainer>

         {/* Certification Section */}
         <CertificationIntro
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 0.25 }}
         >
           <CertificationIntroText>
             En plus de mon parcours pratique, j'ai également obtenu des certifications reconnues 
             qui valident mes compétences théoriques en cybersécurité.
           </CertificationIntroText>
         </CertificationIntro>
         
         <CertificationContainer>
           {/* Certification Cisco */}
           <CertificationCard
             initial={{ opacity: 0, y: 50 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.3 }}
           >
             <CertificationHeader>
               <CertificationIcon>
                 <FaTrophy />
               </CertificationIcon>
               <CertificationInfo>
                 <CertificationTitle>Introduction to Cybersecurity</CertificationTitle>
                 <CertificationSubtitle>Certification Cisco Networking Academy</CertificationSubtitle>
                 <CertificationIssuer>Délivrée par Cisco</CertificationIssuer>
               </CertificationInfo>
             </CertificationHeader>

             <CertificationContent>
               <CertificationImage>
                 <img 
                   src="/introduction-to-cybersecurity.png" 
                   alt="Certification Introduction to Cybersecurity"
                   loading="eager"
                   decoding="sync"
                   fetchPriority="high"
                   style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                 />
               </CertificationImage>
               
               <CertificationDetails>
                 <CertificationDescription>
                   Cette certification valide mes compétences fondamentales en cybersécurité, 
                   couvrant les concepts essentiels de protection des systèmes informatiques, 
                   la gestion des menaces et les bonnes pratiques de sécurité.
                 </CertificationDescription>
                 
                 <CertificationActions>
                   <CertificationLink 
                     href="/I2CSUpdate20250831-29-nbe22v.pdf" 
                     target="_blank" 
                     rel="noopener noreferrer"
                   >
                     <FaExternalLinkAlt />
                     Voir le certificat PDF
                   </CertificationLink>
                   
                   <CertificationLink 
                     href="https://www.credly.com/badges/58ccbe78-41a8-4925-948d-952f452214da/linked_in_profile" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     primary
                   >
                     <FaExternalLinkAlt />
                     Vérifier sur Credly
                   </CertificationLink>
                 </CertificationActions>
               </CertificationDetails>
             </CertificationContent>
           </CertificationCard>

           {/* Certification OffSec */}
           <CertificationCard
             initial={{ opacity: 0, y: 50 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.5 }}
           >
             <CertificationHeader>
               <CertificationIcon>
                 <FaShieldAlt />
               </CertificationIcon>
               <CertificationInfo>
                 <CertificationTitle>Certified Cloud Security Professional (CCSP)</CertificationTitle>
                 <CertificationSubtitle>Certification OffSec</CertificationSubtitle>
                 <CertificationIssuer>Délivrée par OffSec</CertificationIssuer>
               </CertificationInfo>
             </CertificationHeader>

             <CertificationContent>
               <CertificationImage>
                 <img 
                   src="/0334458ee7c3.png" 
                   alt="Certification CCSP OffSec"
                   loading="eager"
                   decoding="sync"
                   fetchPriority="high"
                   style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                 />
               </CertificationImage>
               
               <CertificationDetails>
                 <CertificationDescription>
                   Cette certification valide mes compétences avancées en sécurité cloud, 
                   couvrant l'architecture, la conception et la sécurisation des environnements cloud, 
                   ainsi que la gestion des risques et la conformité dans le cloud.
                 </CertificationDescription>
                 
                 <CertificationActions>
                   <CertificationLink 
                     href="https://www.coursera.org/learn/ccsp1" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     primary
                   >
                     <FaExternalLinkAlt />
                     Voir le cours sur Coursera
                   </CertificationLink>
                 </CertificationActions>
               </CertificationDetails>
             </CertificationContent>
           </CertificationCard>
         </CertificationContainer>

         {/* Reviews Section */}
           <ReviewsSection>
             <ReviewsHeader
               initial={{ opacity: 0, y: 30 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
             >
               <ReviewsTitle>💼 Avis Clients Freelancer</ReviewsTitle>
               <ReviewsSubtitle>
                 Retours d'expérience de mes clients sur la plateforme Freelancer.com
               </ReviewsSubtitle>
             </ReviewsHeader>

             <ReviewsGrid>
               {reviews.map((review, index) => (
                 <ReviewCard
                   key={review.id}
                   href={review.freelancerLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   initial={{ opacity: 0, y: 50 }}
                   animate={inView ? { opacity: 1, y: 0 } : {}}
                   transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                   whileHover={{ scale: 1.02 }}
                 >
                  <ReviewHeader>
                    <ProfilePicture>
                      {review.profileInitial}
                    </ProfilePicture>
                    <ClientInfo>
                      <ClientName>{review.name}</ClientName>
                      <ClientHandle>{review.handle}</ClientHandle>
                      <ClientLocation>
                        <FaMapMarkerAlt />
                        {review.location}
                      </ClientLocation>
                    </ClientInfo>
                  </ReviewHeader>

                  <Rating>
                    {[...Array(review.rating)].map((_, i) => {return (
                      <Star key={i}>
                        <FaStar />
                      </Star>
                    )})}
                  </Rating>

                  <ReviewText>{review.review}</ReviewText>

                  <ServiceTag>
                    {review.service}
                    <ExternalLinkIcon>
                      <FaExternalLinkAlt />
                    </ExternalLinkIcon>
                  </ServiceTag>
                </ReviewCard>
               ))}
             </ReviewsGrid>
           </ReviewsSection>
         </ContentGrid>
      </Container>
    </AchievementsSection>
  );
};

export default Achievements;
