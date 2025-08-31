# Configuration EmailJS pour le Formulaire de Contact

## 🚀 Installation et Configuration

### 1. Installer EmailJS
```bash
npm install @emailjs/browser
```

### 2. Configuration EmailJS

#### Étape 1: Créer un compte EmailJS
1. Allez sur [EmailJS.com](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez-vous à votre compte

#### Étape 2: Configurer un service email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Connectez votre compte email

#### Étape 3: Créer un template email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```html
Nouveau message de contact depuis votre portfolio

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis votre portfolio cybersécurité
```

#### Étape 4: Obtenir vos clés
1. Notez votre **Public Key** (dans Account > API Keys)
2. Notez votre **Service ID** (dans Email Services)
3. Notez votre **Template ID** (dans Email Templates)

### 3. Mettre à jour le code

Dans `src/components/Contact.tsx`, remplacez la fonction `handleSubmit` par :

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID', // Remplacez par votre Service ID
      'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'baddouj.elhoucine@ine.inpt.ac.ma'
      },
      'YOUR_PUBLIC_KEY' // Remplacez par votre Public Key
    );

    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
  } catch (error) {
    setIsSubmitting(false);
    alert('Erreur lors de l\'envoi du message. Veuillez réessayer ou me contacter directement par email.');
    console.error('Erreur d\'envoi:', error);
  }
};
```

### 4. Initialiser EmailJS

Dans `src/App.tsx`, ajoutez :

```typescript
import emailjs from '@emailjs/browser';

// Initialiser EmailJS
emailjs.init('YOUR_PUBLIC_KEY');
```

## 🔧 Alternative: Formspree

Si vous préférez une solution plus simple, vous pouvez utiliser Formspree :

1. Allez sur [Formspree.io](https://formspree.io/)
2. Créez un compte et un nouveau formulaire
3. Remplacez la fonction `handleSubmit` par :

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message envoyé avec succès !');
    } else {
      throw new Error('Erreur d\'envoi');
    }
  } catch (error) {
    setIsSubmitting(false);
    alert('Erreur lors de l\'envoi. Veuillez réessayer.');
  }
};
```

## ✅ Test

Une fois configuré, testez le formulaire en envoyant un message de test. Vous devriez recevoir l'email à l'adresse `baddouj.elhoucine@ine.inpt.ac.ma`.

## 🔒 Sécurité

- Les clés EmailJS sont publiques et sécurisées
- Formspree offre une protection anti-spam intégrée
- Tous les messages sont chiffrés en transit
