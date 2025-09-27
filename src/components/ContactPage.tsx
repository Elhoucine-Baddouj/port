import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub, FaShieldAlt, FaArrowLeft, FaPaperPlane, FaUser, FaAt } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';
import Footer from './Footer';

const ContactPageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px),
      linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 65, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 204, 255, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }
`;

const ContactPageContent = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 80px;
  min-height: 100vh;
`;

const BackButton = styled(motion.button)`
  position: fixed;
  top: 100px;
  left: 2rem;
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  z-index: 100;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(0, 255, 65, 0.2);
    border-color: rgba(0, 255, 65, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 65, 0.3);
  }

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    margin: 1rem auto;
    display: block;
    width: fit-content;
  }
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem 3rem 2rem;
  position: relative;
`;

const PageTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 30px rgba(0, 255, 65, 0.4);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #00ff41 0%, #00ccff 100%);
    border-radius: 2px;
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.3rem;
  color: #e0e0e0;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
`;

const ContactSection = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #00ff41;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #b0b0b0;
  text-align: center;
  margin-bottom: 2rem;
`;

const ContactCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(0, 255, 65, 0.2);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 255, 65, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: rgba(0, 255, 65, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 255, 65, 0.2);

    &::before {
      opacity: 1;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #00ff41 0%, #00cc33 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 1.2rem;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(0, 255, 65, 0.3);
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: 0.9rem;
  color: #00ff41;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.div`
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid rgba(0, 255, 65, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00ff41;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(0, 255, 65, 0.2);
    border-color: rgba(0, 255, 65, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 255, 65, 0.3);
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(0, 255, 65, 0.2);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 204, 255, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  color: #00ff41;
  font-weight: 600;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(10, 10, 10, 0.8);
  border: 2px solid rgba(0, 255, 65, 0.2);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:focus {
    outline: none;
    border-color: rgba(0, 255, 65, 0.5);
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
  }

  &::placeholder {
    color: #666666;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(10, 10, 10, 0.8);
  border: 2px solid rgba(0, 255, 65, 0.2);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: rgba(0, 255, 65, 0.5);
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
  }

  &::placeholder {
    color: #666666;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #00ff41 0%, #00cc33 100%);
  color: #000000;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  box-shadow: 0 8px 25px rgba(0, 255, 65, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(0, 255, 65, 0.4);
    background: linear-gradient(135deg, #00cc33 0%, #00ff41 100%);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleBackToHome = () => {
    if ((window as any).navigateToPage) {
      (window as any).navigateToPage('home');
    } else {
      window.location.href = '/';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi d'email
    console.log('Form submitted:', formData);
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactPageContainer>
      <ContactPageContent>
        <BackButton
          onClick={handleBackToHome}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft />
          Retour à l'accueil
        </BackButton>
        
        <PageHeader
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PageTitle>Contactez-moi</PageTitle>
          <PageSubtitle>
            Prêt à collaborer sur votre prochain projet de cybersécurité ? 
            N'hésitez pas à me contacter pour discuter de vos besoins.
          </PageSubtitle>
        </PageHeader>

        <ContactSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Informations de contact */}
          <ContactInfo>
            <SectionTitle>Contact</SectionTitle>
            <SectionSubtitle>Discutons de vos projets de cybersécurité</SectionSubtitle>
            
            <ContactCard
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ContactItem>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>Email</ContactLabel>
                  <ContactValue>baddouj.elhoucine@ine.inpt.ac.ma</ContactValue>
                </ContactDetails>
              </ContactItem>

              <ContactItem>
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>Localisation</ContactLabel>
                  <ContactValue>Rabat, Maroc</ContactValue>
                </ContactDetails>
              </ContactItem>

              <ContactItem>
                <ContactIcon>
                  <FaShieldAlt />
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>Spécialité</ContactLabel>
                  <ContactValue>Cybersécurité & Pentesting</ContactValue>
                </ContactDetails>
              </ContactItem>
            </ContactCard>

            <SocialLinks>
              <SocialLink
                href="https://github.com/Elhoucine-Baddouj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/baddouj-elhoucine-bb904030a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href="https://tryhackme.com/p/Ace12"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SiTryhackme />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          {/* Formulaire de contact */}
          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormLabel htmlFor="name">Nom complet</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Votre nom complet"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="votre.email@exemple.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Décrivez votre projet de cybersécurité..."
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane />
              Envoyer le message
            </SubmitButton>
          </ContactForm>
        </ContactSection>

        <Footer />
      </ContactPageContent>
    </ContactPageContainer>
  );
};

export default ContactPage;
