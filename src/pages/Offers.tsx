import { Gift, Ticket, Users, GraduationCap, PartyPopper, Briefcase, Star, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CinemaFooter } from "@/components/CinemaFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import cinemaHeroImage from "@/assets/cinema-hero-clapperboard.png";
import "@/index.css";

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
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=300&fit=crop&q=80",
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

      {/* Hero Section - Transparent Background */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            
            {/* Text Content */}
            <div className="text-center lg:text-left max-w-xl">
              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
                <span className="block text-foreground drop-shadow-lg">
                  {language === 'en' ? 'OUR' : 'NOS'}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-primary">
                  {language === 'en' ? 'OFFERS' : 'OFFRES'}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
                {language === 'en' 
                  ? 'Discover incredible savings on tickets, snacks & exclusive cinema experiences' 
                  : 'Découvrez des économies incroyables sur les billets, snacks et expériences cinéma exclusives'}
              </p>

              {/* Discount Badge */}
              <div className="inline-flex items-center gap-3">
                <div className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-bold text-lg shadow-lg shadow-red-600/30">
                  {language === 'en' ? 'UP TO' : "JUSQU'À"} <span className="text-2xl">30%</span> OFF
                </div>
              </div>
            </div>

            {/* Cinema Hero Image */}
            <div className="relative">
              <img
                src={cinemaHeroImage}
                alt="Cinema"
                className="relative w-80 h-auto sm:w-96 md:w-[500px] lg:w-[550px] object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Brand tagline */}
          <p className="text-center mt-12 text-sm font-semibold text-primary/80 tracking-[0.3em] uppercase">
            Cinema Sahara
          </p>
        </div>
      </section>

      {/* Offers Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Explore Our Offers' : 'Découvrez Nos Offres'}
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offers.map((offer) => (
              <div
                key={offer.id}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-amber-500/10">
        <div className="container mx-auto px-4 text-center">
          <div>
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
          </div>
        </div>
      </section>

      <CinemaFooter />
    </div>
  );
};

export default Offers;
