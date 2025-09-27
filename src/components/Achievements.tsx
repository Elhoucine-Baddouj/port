import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaTrophy, FaStar, FaExternalLinkAlt, FaBriefcase
} from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';

const AchievementsSection = styled.section`
  padding: 3rem 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
  background: linear-gradient(135deg, #00ff41 0%, #00ccff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 700px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
  text-align: center;
`;

const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

// Freelancer Section - Full Width
const FreelancerSection = styled(motion.div)`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 4rem 2rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(0, 255, 65, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 65, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 204, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const FreelancerContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

// TryHackMe Section
const TryHackMeCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 2px solid #00ff41;
  border-radius: 10px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const FreelancerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const FreelancerIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(0, 255, 65, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 255, 65, 0.2);
    border-color: rgba(0, 255, 65, 0.4);
  }
`;

const FreelancerLogo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const FreelancerInfo = styled.div`
  flex: 1;
`;

const FreelancerTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
`;

const FreelancerSubtitle = styled.p`
  font-size: 0.9rem;
  color: #b0b0b0;
  margin: 0;
`;

const FreelancerStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const FreelancerStat = styled.div`
  text-align: center;
  padding: 0.75rem;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  border-radius: 6px;
`;

const FreelancerStatNumber = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #00ff41;
  margin-bottom: 0.2rem;
`;

const FreelancerStatLabel = styled.div`
  color: #b0b0b0;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FreelancerDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: justify;
`;

const FreelancerProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(0, 255, 65, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(0, 255, 65, 0.2);
`;

const FreelancerProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #00ff41;
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
  margin-bottom: 0.75rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const FreelancerProfileName = styled.h3`
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 0.25rem;
  text-align: center;
`;

const FreelancerProfileTitle = styled.p`
  font-size: 0.8rem;
  color: #b0b0b0;
  margin-bottom: 0.75rem;
  text-align: center;
`;

const FreelancerProfileLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: linear-gradient(135deg, #00ff41 0%, #00cc33 100%);
  color: #0a0a0a;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #00cc33 0%, #00ff41 100%);
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
  }
`;

// Reviews Section - Style Freelancer
const ReviewsSection = styled.div`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-top: 0;
  padding: 1rem 1rem 2rem 1rem;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 255, 65, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 65, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 204, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ReviewsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ReviewsHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ReviewsTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
  
  .highlight {
    color: #00ccff;
  }
`;

const ReviewsSubtitle = styled.p`
  font-size: 0.9rem;
  color: #b0b0b0;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const ReviewCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid rgba(0, 255, 65, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 255, 65, 0.1);
    border-color: rgba(0, 255, 65, 0.4);
  }

  &::before {
    content: '"';
    position: absolute;
    top: 0.75rem;
    left: 1rem;
    font-size: 3rem;
    color: rgba(0, 255, 65, 0.1);
    font-family: serif;
    z-index: 1;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const ProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00ff41 0%, #00cc33 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0a0a;
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
`;

const ClientInfo = styled.div`
  flex: 1;
`;

const ClientName = styled.h4`
  color: #ffffff;
  font-weight: 600;
  margin: 0 0 0.2rem 0;
  font-size: 1rem;
`;

const ClientHandle = styled.p`
  color: #b0b0b0;
  margin: 0 0 0.2rem 0;
  font-size: 0.8rem;
`;

const ClientLocation = styled.p`
  color: #888888;
  margin: 0;
  font-size: 0.75rem;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-bottom: 0.75rem;
`;

const Star = styled.div`
  color: #ffaa00;
  font-size: 0.9rem;
`;

const ReviewText = styled.p`
  color: #ffffff;
  line-height: 1.5;
  margin: 0 0 1rem 0;
  font-style: italic;
  font-size: 0.9rem;
  position: relative;
  z-index: 2;
`;

const ProjectTag = styled.div`
  background: rgba(0, 255, 65, 0.1);
  color: #00ff41;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  border: 1px solid rgba(0, 255, 65, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  console.log('Achievements component rendering, inView:', inView);

  const reviews = [
    {
      id: 1,
      name: "Albert S.",
      handle: "@albertsareh26",
      location: "Bucharest, Romania",
      rating: 5,
      review: "He was just amazing. He managed the project with professionalism and he delivered the project even faster than the deadline. Great communication in English and he helped me each step of the process and answered me questions.",
      project: "GUI HTTP SNIFFER",
      profileInitial: "A"
    },
    {
      id: 2,
      name: "May A.",
      handle: "@Ma3333",
      location: "Riyadh, Saudi Arabia",
      rating: 5,
      review: "He worked hard to fix the simulation issue, he is a hard working person and I would be happy to work with him in the future.",
      project: "NS3 NETWORK SIMULATION",
      profileInitial: "M"
    },
    {
      id: 3,
      name: "B",
      handle: "@Bscrab",
      location: "Ancien client (inactif)",
      rating: 5,
      review: "Elhoucine B is of outstanding character and goes above and beyond what is necessary to complete a project. I will definitely use him again.",
      project: "KEYHELP CONTROL PANEL",
      profileInitial: "B"
    }
  ];

  return (
    <AchievementsSection id="achievements" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Skills in Action</SectionTitle>
          <SectionSubtitle>
            Discover my achievements and certifications in the cybersecurity field
          </SectionSubtitle>
        </motion.div>

        {/* Freelancer Section - Full Width */}
        <FreelancerSection
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FreelancerContent>
            <FreelancerHeader>
              <FreelancerIcon>
                <FreelancerLogo 
                  src="https://s3-eu-west-1.amazonaws.com/tpd/logos/4bdc0b310000640005057f15/0x0.png" 
                  alt="Freelancer.com Logo"
                />
              </FreelancerIcon>
              <FreelancerInfo>
                <FreelancerTitle>Freelancer.com</FreelancerTitle>
                <FreelancerSubtitle></FreelancerSubtitle>
              </FreelancerInfo>
            </FreelancerHeader>

            <FreelancerStats>
              <FreelancerStat>
                <FreelancerStatNumber>5.0★</FreelancerStatNumber>
                <FreelancerStatLabel>Overall Rating</FreelancerStatLabel>
              </FreelancerStat>
              <FreelancerStat>
                <FreelancerStatNumber>7</FreelancerStatNumber>
                <FreelancerStatLabel>Client Reviews</FreelancerStatLabel>
              </FreelancerStat>
              <FreelancerStat>
                <FreelancerStatNumber>100%</FreelancerStatNumber>
                <FreelancerStatLabel>On-Time Delivery</FreelancerStatLabel>
              </FreelancerStat>
              <FreelancerStat>
                <FreelancerStatNumber>86%</FreelancerStatNumber>
                <FreelancerStatLabel>Acceptance Rate</FreelancerStatLabel>
              </FreelancerStat>
            </FreelancerStats>

            <FreelancerDescription>
              As a cybersecurity freelancer, I have developed solid expertise 
              in delivering high-quality solutions within tight deadlines. My 
              communication skills allow me to collaborate effectively with international clients, 
              ensuring clear understanding of needs and total transparency throughout 
              the project. I excel in technical analysis, secure development, and complex problem 
              solving, guaranteeing results that exceed expectations.
            </FreelancerDescription>

            <FreelancerProfileSection>
              <FreelancerProfileImage 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjMWExYTJlIi8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNDAiIHI9IjI1IiBmaWxsPSIjMDBmZjQxIi8+CjxyZWN0IHg9IjMwIiB5PSI3NSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMDBmZjQxIi8+Cjx0ZXh0IHg9IjYwIiB5PSIxMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwZmY0MSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RUw8L3RleHQ+Cjwvc3ZnPgo="
                alt="Elhoucine Baddouj - Profil Freelancer"
              />
              <FreelancerProfileName>Elhoucine Baddouj</FreelancerProfileName>
              <FreelancerProfileTitle>Full-Stack Developer | Cybersecurity | Networking</FreelancerProfileTitle>
              <FreelancerProfileLink 
                href="https://www.fr.freelancer.com/u/houssinb9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
                View my Freelancer Profile
              </FreelancerProfileLink>
            </FreelancerProfileSection>
          </FreelancerContent>
        </FreelancerSection>

        {/* Reviews Section */}
        <ReviewsSection>
          <ReviewsContent>
            <ReviewsHeader>
              <ReviewsTitle>
                What My Clients <span className="highlight">Say</span>
              </ReviewsTitle>
              <ReviewsSubtitle>
                Real feedback from clients on Freelancer.com who achieved remarkable results.
              </ReviewsSubtitle>
            </ReviewsHeader>

            <ReviewsGrid>
            {reviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <ReviewHeader>
                  <ProfilePicture>
                    {review.profileInitial}
                  </ProfilePicture>
                  <ClientInfo>
                    <ClientName>{review.name}</ClientName>
                    <ClientHandle>{review.handle}</ClientHandle>
                    <ClientLocation>{review.location}</ClientLocation>
                  </ClientInfo>
                </ReviewHeader>

                <Rating>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i}>
                      <FaStar />
                    </Star>
                  ))}
                </Rating>

                <ReviewText>{review.review}</ReviewText>

                <ProjectTag>{review.project}</ProjectTag>
              </ReviewCard>
            ))}
          </ReviewsGrid>
          </ReviewsContent>
        </ReviewsSection>

        {/* TryHackMe Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              background: 'linear-gradient(135deg, #00ff41 0%, #00cc33 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0, 255, 65, 0.3)',
              border: '2px solid rgba(0, 255, 65, 0.2)'
            }}>
              <SiTryhackme style={{ fontSize: '24px', color: '#000' }} />
            </div>
            <SectionTitle style={{ marginBottom: '0' }}>
              TryHackMe Journey
            </SectionTitle>
          </div>
          <SectionSubtitle style={{ maxWidth: '100%', margin: '0 auto', width: '100%' }}>
            Leading platform in cybersecurity learning, offering secure virtual 
            environments to practice ethical hacking, digital forensics and 
            information defense. Each "room" represents a unique challenge allowing to acquire 
            essential practical skills.
          </SectionSubtitle>
        </motion.div>

        <ContentGrid>
          {/* TryHackMe Section */}
          <TryHackMeCard
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FreelancerHeader>
              <FreelancerIcon>
                <SiTryhackme style={{ fontSize: '24px', color: '#000' }} />
              </FreelancerIcon>
              <FreelancerInfo>
                <FreelancerTitle>TryHackMe</FreelancerTitle>
                <FreelancerSubtitle>Cybersecurity training platform</FreelancerSubtitle>
              </FreelancerInfo>
            </FreelancerHeader>

            <FreelancerStats>
              <FreelancerStat>
                <FreelancerStatNumber>Top 1%</FreelancerStatNumber>
                <FreelancerStatLabel>Global</FreelancerStatLabel>
              </FreelancerStat>
              <FreelancerStat>
                <FreelancerStatNumber>#195</FreelancerStatNumber>
                <FreelancerStatLabel>Morocco</FreelancerStatLabel>
              </FreelancerStat>
              <FreelancerStat>
                <FreelancerStatNumber>150+</FreelancerStatNumber>
                <FreelancerStatLabel>Rooms Completed</FreelancerStatLabel>
              </FreelancerStat>
            </FreelancerStats>


            <FreelancerProfileLink 
              href="https://tryhackme.com/p/Ace12" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              View my TryHackMe Profile
            </FreelancerProfileLink>
            </TryHackMeCard>
        </ContentGrid>

        {/* Certifications Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}
        >
          <SectionTitle style={{ marginBottom: '1rem' }}>
            Professional Certifications
          </SectionTitle>
          <SectionSubtitle style={{ maxWidth: '100%', margin: '0 auto', width: '100%' }}>
            Recognized certifications in the cybersecurity field, obtained from reference 
            organizations like Cisco, Google Cloud and LetsDefend, validating my technical skills 
            and expertise in information security.
          </SectionSubtitle>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem', 
            maxWidth: '1200px', 
            margin: '0 auto',
            padding: '0 2rem'
          }}
        >
          {/* Cisco Certification */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            border: '2px solid #00ff41',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 255, 65, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <img 
              src="https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png" 
              alt="Cisco Introduction to Cybersecurity"
              style={{ 
                width: '120px', 
                height: '120px', 
                objectFit: 'contain',
                marginBottom: '1rem',
                borderRadius: '8px'
              }}
            />
            <h3 style={{ 
              color: '#ffffff', 
              fontSize: '1.2rem', 
              fontWeight: '600', 
              marginBottom: '0.5rem' 
            }}>
              Introduction to Cybersecurity
            </h3>
            <p style={{ 
              color: '#b0b0b0', 
              fontSize: '0.9rem', 
              marginBottom: '1rem' 
            }}>
              Cisco
            </p>
            <p style={{ 
              color: '#ffffff', 
              fontSize: '0.85rem', 
              lineHeight: '1.5' 
            }}>
              Fondamentaux de la cybersécurité, identification des menaces et 
              mise en place de mesures de protection.
            </p>
          </div>

          {/* SOC Analyst Certification */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            border: '2px solid #00ff41',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 255, 65, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <img 
              src="https://media.licdn.com/dms/image/sync/v2/D5627AQEAZ2JVvA-aEA/articleshare-shrink_800/articleshare-shrink_800/0/1734346434823?e=2147483647&v=beta&t=sSNhYmNbsC2yrZ8hvxtXX5STQt6QLUd12Xdk9dnoizY" 
              alt="SOC Analyst LetsDefend"
              style={{ 
                width: '120px', 
                height: '120px', 
                objectFit: 'contain',
                marginBottom: '1rem',
                borderRadius: '8px'
              }}
            />
            <h3 style={{ 
              color: '#ffffff', 
              fontSize: '1.2rem', 
              fontWeight: '600', 
              marginBottom: '0.5rem' 
            }}>
              SOC Analyst
            </h3>
            <p style={{ 
              color: '#b0b0b0', 
              fontSize: '0.9rem', 
              marginBottom: '1rem' 
            }}>
              LetsDefend
            </p>
            <p style={{ 
              color: '#ffffff', 
              fontSize: '0.85rem', 
              lineHeight: '1.5' 
            }}>
              Analyse des incidents de sécurité, monitoring des systèmes et 
              réponse aux cyberattaques en temps réel.
            </p>
          </div>

          {/* Google Cloud Certification */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            border: '2px solid #00ff41',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 255, 65, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <img 
              src="https://media.licdn.com/dms/image/v2/D5622AQFcumpx8gsfLA/feedshare-shrink_800/feedshare-shrink_800/0/1720736907960?e=2147483647&v=beta&t=VSv7JXFfE3hyDtynCLQfczTVex4gtzpVPWUcoTzI1eM" 
              alt="Google Cloud Cybersecurity Certificate"
              style={{ 
                width: '120px', 
                height: '120px', 
                objectFit: 'contain',
                marginBottom: '1rem',
                borderRadius: '8px'
              }}
            />
            <h3 style={{ 
              color: '#ffffff', 
              fontSize: '1.2rem', 
              fontWeight: '600', 
              marginBottom: '0.5rem' 
            }}>
              Google Cloud Cybersecurity
            </h3>
            <p style={{ 
              color: '#b0b0b0', 
              fontSize: '0.9rem', 
              marginBottom: '1rem' 
            }}>
              Google Cloud
            </p>
            <p style={{ 
              color: '#ffffff', 
              fontSize: '0.85rem', 
              lineHeight: '1.5' 
            }}>
              Sécurisation des infrastructures cloud, gestion des identités et 
              protection des données dans l'environnement Google Cloud.
            </p>
          </div>
        </motion.div>

        </Container>
      </AchievementsSection>
    );
  };

  export default Achievements;