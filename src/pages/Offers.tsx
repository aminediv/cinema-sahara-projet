import { motion } from "framer-motion";
import { Gift, Ticket, Users, GraduationCap, PartyPopper, Briefcase, Star, ArrowRight, Film } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CinemaFooter } from "@/components/CinemaFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

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

      {/* Hero Section - Cinema themed */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Cream/White gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-orange-50/80 to-background" />
        
        {/* Film reel decorations - Top Left */}
        <motion.div 
          className="absolute -top-4 -left-8 md:top-8 md:left-8 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Film className="w-24 h-24 md:w-32 md:h-32 text-gray-700" />
        </motion.div>
        
        {/* Film reel decorations - Top Right */}
        <motion.div 
          className="absolute -top-4 -right-8 md:top-8 md:right-8 opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Film className="w-20 h-20 md:w-28 md:h-28 text-gray-700" />
        </motion.div>
        
        {/* Film reel decorations - Bottom Right */}
        <motion.div 
          className="absolute -bottom-4 -right-12 md:bottom-12 md:right-16 opacity-15"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Film className="w-28 h-28 md:w-36 md:h-36 text-gray-700" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Title with glow effect */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              <span 
                className="block text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300"
                style={{
                  textShadow: '0 0 40px rgba(251, 191, 36, 0.4), 0 0 80px rgba(251, 191, 36, 0.2)',
                  WebkitTextStroke: '2px rgba(180, 140, 80, 0.5)'
                }}
              >
                {language === 'en' ? 'OUR' : 'NOS'}
              </span>
              <span 
                className="block text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300"
                style={{
                  textShadow: '0 0 40px rgba(251, 191, 36, 0.4), 0 0 80px rgba(251, 191, 36, 0.2)',
                  WebkitTextStroke: '2px rgba(180, 140, 80, 0.5)'
                }}
              >
                {language === 'en' ? 'OFFERS' : 'OFFRES'}
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {language === 'en' 
                ? 'Exclusive deals and promotions for the ultimate cinema experience' 
                : 'Offres exclusives et promotions pour une expérience cinéma ultime'}
            </motion.p>

            {/* Discount Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-full font-bold text-lg shadow-lg"
            >
              <span className="text-2xl md:text-3xl">UP TO 30% OFF</span>
            </motion.div>

            {/* Brand */}
            <motion.p 
              className="mt-8 text-sm md:text-base font-semibold text-amber-700 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Cinema Sahara
            </motion.p>
          </motion.div>
        </div>
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
