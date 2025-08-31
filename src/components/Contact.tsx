import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaShieldAlt } from 'react-icons/fa';

const ContactSection = styled.section`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
`;

const ContactInfo = styled(motion.div)`
  color: var(--text-secondary);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--background-light);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateX(10px);
  }
`;

const ContactIcon = styled.div`
  color: var(--primary-color);
  font-size: 1.5rem;
  min-width: 24px;
`;

const ContactText = styled.div`
  color: var(--text-primary);
`;

const ContactLabel = styled.div`
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
`;

const ContactValue = styled.div`
  color: var(--text-secondary);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--background-light);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: var(--background-dark);
    transform: translateY(-3px);
    box-shadow: var(--shadow-glow);
  }
`;

const ContactForm = styled(motion.form)`
  background: var(--background-light);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const FormLabel = styled.label`
  display: block;
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
`;

const FormInput = styled.input`
  width: 100%;
  padding: var(--spacing-md);
  background: var(--background-dark);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(0, 255, 65, 0.2);
  }

  &::placeholder {
    color: var(--text-muted);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: var(--spacing-md);
  background: var(--background-dark);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(0, 255, 65, 0.2);
  }

  &::placeholder {
    color: var(--text-muted);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--primary-color) 0%, #00cc33 100%);
  color: var(--background-dark);
  border: none;
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Utiliser EmailJS pour envoyer l'email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'baddouj.elhoucine@ine.inpt.ac.ma'
      };

      // Envoyer via EmailJS (vous devrez configurer EmailJS)
      // Pour l'instant, on simule l'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Alternative: utiliser un service comme Formspree ou Netlify Forms
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(templateParams)
      // });

      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
    } catch (error) {
      setIsSubmitting(false);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer ou me contacter directement par email.');
      console.error('Erreur d\'envoi:', error);
    }
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Contact</SectionTitle>
          <SectionSubtitle>
            Discutons de vos projets de cybersécurité
          </SectionSubtitle>
        </SectionHeader>

        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>baddouj.elhoucine@ine.inpt.ac.ma</ContactValue>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>
                <ContactLabel>Localisation</ContactLabel>
                <ContactValue>Rabat , Maroc</ContactValue>
              </ContactText>
            </ContactItem>

                         <SocialLinks>
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
                 href="https://github.com/Elhoucine-Baddouj/"
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
               >
                 <FaGithub />
               </SocialLink>
               <SocialLink
                 href="https://tryhackme.com/p/Ace12"
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
               >
                 <FaShieldAlt />
               </SocialLink>
             </SocialLinks>
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
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
              <FormLabel htmlFor="subject">Sujet</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Sujet de votre message"
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
                placeholder="Décrivez votre projet ou votre demande..."
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;
