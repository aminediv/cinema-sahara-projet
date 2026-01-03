import { motion } from "framer-motion";
import { Gift, Ticket, Users, GraduationCap, PartyPopper, Briefcase, Star, ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CinemaFooter } from "@/components/CinemaFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import popcornImage from "@/assets/popcorn-hero.png";

interface Offer {
  id: string;
  titleEn: string;
  titleFr: string;
  descriptionEn: string;
  descriptionFr: string;
  image: string;
  icon: React.ReactNode;
  badge?: string;
  discount?: string;
}

const offers: Offer[] = [
  {
    id: "family-pack",
    titleEn: "Family Pack",
    titleFr: "Pack Famille",
    descriptionEn: "Special discounts for families. 4 tickets + popcorn combo at reduced price.",
    descriptionFr: "Réductions spéciales pour les familles. 4 billets + combo popcorn à prix réduit.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
    icon: <Users className="w-6 h-6" />,
    badge: "Popular",
    discount: "25%"
  },
  {
    id: "student-discount",
    titleEn: "Student Discount",
    titleFr: "Réduction Étudiant",
    descriptionEn: "Show your student ID and get 30% off on all movie tickets.",
    descriptionFr: "Présentez votre carte étudiant et obtenez 30% de réduction sur tous les billets.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    icon: <GraduationCap className="w-6 h-6" />,
    discount: "30%"
  },
  {
    id: "birthday-party",
    titleEn: "Birthday Party",
    titleFr: "Fête d'Anniversaire",
    descriptionEn: "Celebrate your special day at Cinema Sahara with exclusive party packages.",
    descriptionFr: "Célébrez votre jour spécial au Cinéma Sahara avec des forfaits fête exclusifs.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
    icon: <PartyPopper className="w-6 h-6" />,
    badge: "New"
  },
  {
    id: "corporate-events",
    titleEn: "Corporate Events",
    titleFr: "Événements Entreprise",
    descriptionEn: "Private screenings and corporate packages for your business events.",
    descriptionFr: "Projections privées et forfaits entreprise pour vos événements professionnels.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    id: "loyalty-card",
    titleEn: "5-Ticket Card",
    titleFr: "Carte 5 Places",
    descriptionEn: "Buy 5 tickets in advance and save 20% on each ticket.",
    descriptionFr: "Achetez 5 billets à l'avance et économisez 20% sur chaque billet.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
    icon: <Ticket className="w-6 h-6" />,
    badge: "Best Value",
    discount: "20%"
  },
  {
    id: "vip-experience",
    titleEn: "VIP Experience",
    titleFr: "Expérience VIP",
    descriptionEn: "Premium seating, exclusive lounge access, and complimentary refreshments.",
    descriptionFr: "Places premium, accès au salon exclusif et rafraîchissements offerts.",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=300&fit=crop",
    icon: <Star className="w-6 h-6" />
  }
];

const Offers = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Cinematic Dark Theme */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Dark gradient background with red/gold accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-red-600/20 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Sparkle particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left max-w-xl"
            >
              {/* Eyebrow */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">
                  {language === 'en' ? 'Exclusive Deals' : 'Offres Exclusives'}
                </span>
              </motion.div>

              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
                <span className="block text-white drop-shadow-2xl">
                  {language === 'en' ? 'OUR' : 'NOS'}
                </span>
                <span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary"
                  style={{
                    textShadow: '0 0 60px rgba(251, 191, 36, 0.5)'
                  }}
                >
                  {language === 'en' ? 'OFFERS' : 'OFFRES'}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-md mx-auto lg:mx-0">
                {language === 'en' 
                  ? 'Discover incredible savings on tickets, snacks & exclusive cinema experiences' 
                  : 'Découvrez des économies incroyables sur les billets, snacks et expériences cinéma exclusives'}
              </p>

              {/* Discount Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="inline-flex items-center gap-3"
              >
                <div className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-bold text-lg shadow-lg shadow-red-600/30">
                  {language === 'en' ? 'UP TO' : "JUSQU'À"} <span className="text-2xl">30%</span> OFF
                </div>
              </motion.div>
            </motion.div>

            {/* Popcorn Image */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-amber-500/20 to-transparent rounded-full blur-3xl scale-110" />
              
              <motion.img
                src={popcornImage}
                alt="Popcorn"
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Floating discount tags */}
              <motion.div 
                className="absolute -top-2 -right-2 md:top-4 md:right-0 px-4 py-2 bg-gradient-to-r from-primary to-amber-500 text-black font-bold rounded-full text-sm shadow-lg"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                20% OFF
              </motion.div>
              
              <motion.div 
                className="absolute bottom-16 -left-4 md:bottom-20 md:-left-8 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full text-sm shadow-lg"
                animate={{ rotate: [0, -5, 0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                30% OFF
              </motion.div>
            </motion.div>
          </div>

          {/* Brand tagline */}
          <motion.p 
            className="text-center mt-12 text-sm font-semibold text-primary/80 tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Cinema Sahara
          </motion.p>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Offers Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Explore Our Offers' : 'Découvrez Nos Offres'}
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Badge */}
                {offer.badge && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {offer.badge}
                  </div>
                )}

                {/* Discount Badge */}
                {offer.discount && (
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full">
                    {offer.discount} OFF
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={language === 'en' ? offer.titleEn : offer.titleFr}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center text-primary-foreground">
                    {offer.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {language === 'en' ? offer.titleEn : offer.titleFr}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {language === 'en' ? offer.descriptionEn : offer.descriptionFr}
                  </p>
                  <button className="inline-flex items-center gap-2 text-primary font-medium text-sm group/btn">
                    {language === 'en' ? 'Learn More' : 'En Savoir Plus'}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-amber-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Have Questions?' : 'Des Questions ?'}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              {language === 'en'
                ? 'Contact us to learn more about our offers and how to get the best cinema experience.'
                : 'Contactez-nous pour en savoir plus sur nos offres et comment obtenir la meilleure expérience cinéma.'}
            </p>
            <Link
              to="/help"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
            >
              {language === 'en' ? 'Contact Us' : 'Nous Contacter'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CinemaFooter />
    </div>
  );
};

export default Offers;
