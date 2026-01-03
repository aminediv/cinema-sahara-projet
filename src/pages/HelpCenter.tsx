import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { CinemaFooter } from '@/components/CinemaFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import helpQuestionIcon from '@/assets/help-question-icon.png';
import cinemaSaharaHero from '@/assets/cinema-sahara-building.jpg';
export default function HelpCenter() {
  const {
    t,
    language
  } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cinema: '',
    theme: '',
    message: ''
  });
  const cinemas = [{
    value: 'sahara-agadir',
    label: 'Sahara Agadir'
  }];
  const themes = language === 'fr' ? [{
    value: 'online-purchase',
    label: 'Achat en ligne'
  }, {
    value: 'lost-objects',
    label: 'Objets perdus'
  }, {
    value: 'loyalty-program',
    label: 'Programme de fidélité'
  }, {
    value: 'your-account',
    label: 'Votre compte'
  }, {
    value: 'events',
    label: 'Événements'
  }, {
    value: 'birthday',
    label: 'Anniversaire Enfant'
  }, {
    value: 'school-business',
    label: 'École & Entreprises'
  }, {
    value: 'job-offers',
    label: "Offre d'emploi"
  }, {
    value: 'other',
    label: 'Autres'
  }] : [{
    value: 'online-purchase',
    label: 'Online Purchase'
  }, {
    value: 'lost-objects',
    label: 'Lost Objects'
  }, {
    value: 'loyalty-program',
    label: 'Loyalty Program'
  }, {
    value: 'your-account',
    label: 'Your Account'
  }, {
    value: 'events',
    label: 'Events'
  }, {
    value: 'birthday',
    label: 'Kids Birthday'
  }, {
    value: 'school-business',
    label: 'School & Business'
  }, {
    value: 'job-offers',
    label: 'Job Offers'
  }, {
    value: 'other',
    label: 'Other'
  }];
  const faqItems = [{
    question: t('help.faq1.question'),
    answer: t('help.faq1.answer')
  }, {
    question: t('help.faq2.question'),
    answer: t('help.faq2.answer')
  }, {
    question: t('help.faq3.question'),
    answer: t('help.faq3.answer')
  }];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success(language === 'fr' ? 'Message envoyé avec succès!' : 'Message sent successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      cinema: '',
      theme: '',
      message: ''
    });
    setIsSubmitting(false);
  };
  return <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section with Cinema Image */}
      <section className="relative h-[70vh] min-h-[550px] w-full overflow-hidden">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1.2,
        ease: "easeOut"
      }} className="absolute inset-0">
          <img src={cinemaSaharaHero} alt="Cinema Sahara" className="w-full h-full object-cover grayscale" style={{
          objectPosition: 'center 50%'
        }} />
          {/* Black & White Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        </motion.div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }}>
              <p className="text-white/70 text-sm md:text-base uppercase tracking-widest mb-3">
                Cinéma Sahara - Talborjt
              </p>
              <h1 className="font-waterfall text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white leading-none font-normal drop-shadow-2xl">
                Cinema Sahara
              </h1>
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.6
            }} className="mt-8">
                
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Contact Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center mb-12">
            <motion.img src={helpQuestionIcon} alt="Help" className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 drop-shadow-lg" initial={{
            scale: 0.8,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            duration: 0.6,
            type: "spring"
          }} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Nous contacter' : 'Contact Us'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'fr' ? 'Nos Articles | FAQ sont là pour vous aider. N\'hésitez pas à les consulter pour trouver rapidement la réponse à votre question.' : 'Our FAQ articles are here to help. Feel free to check them out to quickly find the answer to your question.'}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="lg:col-span-2">
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        {language === 'fr' ? 'Nom' : 'Last Name'} *
                      </label>
                      <Input required value={formData.lastName} onChange={e => setFormData({
                      ...formData,
                      lastName: e.target.value
                    })} placeholder={language === 'fr' ? 'Votre nom' : 'Your last name'} className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        {language === 'fr' ? 'Prénom' : 'First Name'} *
                      </label>
                      <Input required value={formData.firstName} onChange={e => setFormData({
                      ...formData,
                      firstName: e.target.value
                    })} placeholder={language === 'fr' ? 'Votre prénom' : 'Your first name'} className="bg-background border-border" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      E-mail *
                    </label>
                    <Input type="email" required value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} placeholder={language === 'fr' ? 'Votre email' : 'Your email'} className="bg-background border-border" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        {language === 'fr' ? 'Mon cinéma' : 'My Cinema'} *
                      </label>
                      <Select value={formData.cinema} onValueChange={value => setFormData({
                      ...formData,
                      cinema: value
                    })}>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder={language === 'fr' ? 'Sélectionner un cinéma' : 'Select a cinema'} />
                        </SelectTrigger>
                        <SelectContent>
                          {cinemas.map(cinema => <SelectItem key={cinema.value} value={cinema.value}>
                              {cinema.label}
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        {language === 'fr' ? 'Thème' : 'Theme'} *
                      </label>
                      <Select value={formData.theme} onValueChange={value => setFormData({
                      ...formData,
                      theme: value
                    })}>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder={language === 'fr' ? 'Sélectionner un thème' : 'Select a theme'} />
                        </SelectTrigger>
                        <SelectContent>
                          {themes.map(theme => <SelectItem key={theme.value} value={theme.value}>
                              {theme.label}
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea required value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} placeholder={language === 'fr' ? 'Votre message' : 'Your message'} className="bg-background border-border min-h-[150px]" />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="btn-pathe w-full md:w-auto">
                    {isSubmitting ? <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        {language === 'fr' ? 'Envoi en cours...' : 'Sending...'}
                      </span> : <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        {language === 'fr' ? 'Envoyer' : 'Send'}
                      </span>}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-6">
                  {language === 'fr' ? 'Sahara Agadir collecte vos données pour répondre à vos demandes adressées via notre Site. Vous disposez d\'un droit d\'accès, de rectification, de portabilité, d\'effacement de vos données à caractère personnel.' : 'Sahara Agadir collects your data to respond to your requests submitted through our Site. You have the right to access, rectify, port, and delete your personal data.'}
                </p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="space-y-6">
              {/* Contact Info */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {language === 'fr' ? 'Informations de contact' : 'Contact Information'}
                </h3>
                <div className="space-y-4">
                  <a href="https://maps.app.goo.gl/KaUPLViHH4ww7SBB9" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-primary transition-colors group">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground group-hover:text-primary transition-colors">Sahara Agadir</p>
                      <p className="text-sm text-muted-foreground">Cinéma Sahara - Talborjt, Agadir</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <p className="text-sm text-foreground">+212 5XX-XXXXXX</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <p className="text-sm text-foreground">contact@sahara-agadir.ma</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground">
                        {language === 'fr' ? 'Horaires d\'ouverture' : 'Opening Hours'}
                      </p>
                      <p className="text-sm text-muted-foreground">10:00 - 23:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  {language === 'fr' ? 'Articles suggérés' : 'Suggested Articles'}
                </h3>
                <div className="space-y-3">
                  {faqItems.map((item, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.4 + index * 0.1
                }} className="group cursor-pointer">
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                          {item.question}
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.div>)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <CinemaFooter />
    </div>;
}