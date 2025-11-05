'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(80, 'Le nom est trop long'),
  email: z.string().email('Adresse email invalide'),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(2000, 'Le message est trop long'),
});

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateField = (field: 'name' | 'email' | 'message', value: string) => {
    const parsed = ContactSchema.safeParse({
      name: field === 'name' ? value.trim() : formData.name.trim(),
      email: field === 'email' ? value.trim() : formData.email.trim(),
      message: field === 'message' ? value.trim() : formData.message.trim(),
    });
    if (!parsed.success) {
      const issue = parsed.error.issues.find((i) => i.path[0] === field);
      setErrors((prev) => ({ ...prev, [field]: issue?.message }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const trimmed = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };
      const parsed = ContactSchema.safeParse(trimmed);
      if (!parsed.success) {
        const fieldErrors: { name?: string; email?: string; message?: string } = {};
        for (const issue of parsed.error.issues) {
          const field = issue.path[0] as 'name' | 'email' | 'message';
          if (!fieldErrors[field]) fieldErrors[field] = issue.message;
        }
        setErrors(fieldErrors);
        return;
      }
      setErrors({});

      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trimmed),
      });
  
      const result = await res.json();
    
  
      if (result.success) {
        alert('✅ Merci de nous avoir contactés ! Nous vous répondrons très vite.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(`❌ Erreur lors de l’envoi du message${result.error ? ` : ${result.error}` : ''}`);
      }
    } catch (error) {
      console.error(error);
      alert('⚠️ Une erreur est survenue, veuillez réessayer.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-[#ffda96] to-[#D6CFC6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#b77d43] text-center mb-4">
          Contactez-nous
        </h2>
        <div className="w-20 h-1 bg-[#b77d43] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-[#533F2F] mb-4">Entrer en contact</h3>
            
            <div className="flex items-start space-x-4">
              <MapPin className="text-[#b77d43] mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-[#533F2F]">
                  Bangui, République Centrafricaine
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-[#b77d43] mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-[#533F2F]">
                  +236 XX XX XX XX
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-[#b77d43] mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-[#533F2F]">
                  contact@mbaytanbeauty.com
                </p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-[#533F2F] mb-3">Business Hours</h4>
              <p className="text-[#533F2F]">
                Lundi - Samedi: 9:00 - 19:00 
              </p>
              <p className="text-[#533F2F]">
                Dimanche: Sur rendez-vous
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form noValidate onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#533F2F] mb-2">
                  Votre Nom
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) validateField('name', e.target.value);
                  }}
                  onBlur={(e) => validateField('name', e.target.value)}
                  required
                  className="w-full border-[#D6CFC6] focus:border-[#b77d43] focus:ring-[#b77d43]"
                  placeholder="Entrer votre nom"
                />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-[#533F2F] mb-2">
                  Adresse Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) validateField('email', e.target.value);
                  }}
                  onBlur={(e) => validateField('email', e.target.value)}
                  required
                  className="w-full border-[#D6CFC6] focus:border-[#b77d43] focus:ring-[#b77d43]"
                  placeholder="Entrer votre email"
                />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-[#533F2F] mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) validateField('message', e.target.value);
                  }}
                  onBlur={(e) => validateField('message', e.target.value)}
                  required
                  rows={5}
                  className="w-full border-[#D6CFC6] focus:border-[#b77d43] focus:ring-[#b77d43]"
                  placeholder="Dites-nous comment nous pouvons vous aider..."
                />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              <button 
                type="submit"
                className="w-full bg-[#533F2F] text-white px-8 py-3 rounded-full hover:bg-[#b77d43] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Envoyer le message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
