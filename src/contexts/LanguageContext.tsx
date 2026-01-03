import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.cinema': 'Cinema',
    'nav.offers': 'Offers',
    'nav.search': 'Search',
    
    // Hero
    'hero.bookNow': 'Book Now',
    'hero.availableIn': 'Available in',
    'hero.location': 'Location',
    'hero.watchTrailer': 'Watch Trailer',
    'hero.at': 'At?',
    'hero.agadirCity': 'Agadir - Talborjt',
    
    // Movie Grid
    'movies.currentlyInCinema': 'Currently in the cinema',
    'movies.comingSoon': 'Coming soon',
    'movies.seeAll': 'See all',
    'movies.bookNow': 'Book Now',
    'movies.notifyMe': 'Notify Me',
    'movies.notified': 'Notified',
    'movies.noMoviesFound': 'No movies found',
    'movies.allMovies': 'All Movies',
    
    // Movie Details
    'movie.director': 'Director',
    'movie.cast': 'Cast',
    'movie.genre': 'Genre',
    'movie.duration': 'Duration',
    'movie.rating': 'Rating',
    'movie.releaseDate': 'Release Date',
    'movie.synopsis': 'Synopsis',
    'movie.minutes': 'min',
    'movie.watchTrailer': 'Watch Trailer',
    'movie.close': 'Close',
    'movie.selectShowtime': 'Select Showtime',
    'movie.today': 'Today',
    'movie.tomorrow': 'Tomorrow',
    
    // Seat Selection
    'seats.title': 'Select Your Seats',
    'seats.screen': 'Screen',
    'seats.available': 'Available',
    'seats.selected': 'Selected',
    'seats.occupied': 'Occupied',
    'seats.vip': 'VIP',
    'seats.continue': 'Continue',
    'seats.selectedSeats': 'Selected Seats',
    'seats.total': 'Total',
    
    // Booking
    'booking.title': 'Booking Confirmation',
    'booking.movie': 'Movie',
    'booking.date': 'Date',
    'booking.time': 'Time',
    'booking.seats': 'Seats',
    'booking.confirm': 'Confirm Booking',
    'booking.cancel': 'Cancel',
    'booking.success': 'Booking Successful!',
    'booking.ticketId': 'Ticket ID',
    'booking.downloadTicket': 'Download Ticket',
    
    // Search
    'search.placeholder': 'Search movies...',
    'search.noResults': 'No movies found',
    'search.results': 'Search Results',
    
    // Help Section
    'help.title': 'Do you have a question?',
    'help.subtitle': 'Go to our Online Help to find the answer.',
    'help.goToHelp': 'Go to help center',
    'help.learnMore': 'Learn more',
    'help.faq1.question': 'How does the 5-seat card work?',
    'help.faq1.answer': 'Enjoy all the benefits of the CinéCard and share them with your friends and family!',
    'help.faq2.question': 'What experiences & technologies are offered?',
    'help.faq2.answer': 'Experience spectacular and immersive experiences with the best technological innovations.',
    'help.faq3.question': 'When can we check the programming?',
    'help.faq3.answer': 'The weekly programming is available every Wednesday.',
    
    // Footer
    'footer.cinema': 'Cinema',
    'footer.experience': 'Experience',
    'footer.help': 'Help',
    'footer.findCinema': 'Find a cinema',
    'footer.allFilms': 'All films',
    'footer.comingSoon': 'Coming soon',
    'footer.offers': 'Offers',
    'footer.imax': 'IMAX',
    'footer.4dx': '4DX',
    'footer.vip': 'VIP',
    'footer.dolby': 'Dolby Cinema',
    'footer.faq': 'FAQ',
    'footer.contact': 'Contact us',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': 'All rights reserved.',
    
    // General
    'general.searchPlaceholder': 'Search movies...',
    'general.loading': 'Loading...',
    'general.error': 'An error occurred',
    'general.retry': 'Retry',
    'general.back': 'Back',
    'general.next': 'Next',
    'general.previous': 'Previous',
  },
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.cinema': 'Cinéma',
    'nav.offers': 'Offres',
    'nav.search': 'Rechercher',
    
    // Hero
    'hero.bookNow': 'Réserver',
    'hero.availableIn': 'Disponible en',
    'hero.location': 'Localisation',
    'hero.watchTrailer': 'Voir la Bande-Annonce',
    'hero.at': 'Où ?',
    'hero.agadirCity': 'Agadir - Talborjt',
    
    // Movie Grid
    'movies.currentlyInCinema': 'Actuellement au cinéma',
    'movies.comingSoon': 'Prochainement',
    'movies.seeAll': 'Voir tout',
    'movies.bookNow': 'Réserver',
    'movies.notifyMe': 'Me notifier',
    'movies.notified': 'Notifié',
    'movies.noMoviesFound': 'Aucun film trouvé',
    'movies.allMovies': 'Tous les Films',
    
    // Movie Details
    'movie.director': 'Réalisateur',
    'movie.cast': 'Acteurs',
    'movie.genre': 'Genre',
    'movie.duration': 'Durée',
    'movie.rating': 'Classification',
    'movie.releaseDate': 'Date de sortie',
    'movie.synopsis': 'Synopsis',
    'movie.minutes': 'min',
    'movie.watchTrailer': 'Voir la Bande-Annonce',
    'movie.close': 'Fermer',
    'movie.selectShowtime': 'Choisir une Séance',
    'movie.today': 'Aujourd\'hui',
    'movie.tomorrow': 'Demain',
    
    // Seat Selection
    'seats.title': 'Sélectionnez Vos Places',
    'seats.screen': 'Écran',
    'seats.available': 'Disponible',
    'seats.selected': 'Sélectionné',
    'seats.occupied': 'Occupé',
    'seats.vip': 'VIP',
    'seats.continue': 'Continuer',
    'seats.selectedSeats': 'Places Sélectionnées',
    'seats.total': 'Total',
    
    // Booking
    'booking.title': 'Confirmation de Réservation',
    'booking.movie': 'Film',
    'booking.date': 'Date',
    'booking.time': 'Heure',
    'booking.seats': 'Places',
    'booking.confirm': 'Confirmer la Réservation',
    'booking.cancel': 'Annuler',
    'booking.success': 'Réservation Réussie !',
    'booking.ticketId': 'Numéro de Billet',
    'booking.downloadTicket': 'Télécharger le Billet',
    
    // Search
    'search.placeholder': 'Rechercher des films...',
    'search.noResults': 'Aucun film trouvé',
    'search.results': 'Résultats de Recherche',
    
    // Help Section
    'help.title': 'Vous avez une question ?',
    'help.subtitle': 'Rendez-vous sur notre Aide en ligne pour trouver la réponse.',
    'help.goToHelp': 'Aller au centre d\'aide',
    'help.learnMore': 'En savoir plus',
    'help.faq1.question': 'Comment fonctionne la carte 5 places ?',
    'help.faq1.answer': 'Profitez de tous les avantages de la CinéCarte et partagez-les avec vos amis et votre famille !',
    'help.faq2.question': 'Quelles sont les expériences & technologies proposées ?',
    'help.faq2.answer': 'Vivez des expériences spectaculaires et immersives grâce aux meilleures innovations technologiques.',
    'help.faq3.question': 'À partir de quand peut-on consulter la programmation ?',
    'help.faq3.answer': 'La programmation de la semaine est disponible chaque mercredi.',
    
    // Footer
    'footer.cinema': 'Cinéma',
    'footer.experience': 'Expérience',
    'footer.help': 'Aide',
    'footer.findCinema': 'Trouver un cinéma',
    'footer.allFilms': 'Tous les films',
    'footer.comingSoon': 'Prochainement',
    'footer.offers': 'Offres',
    'footer.imax': 'IMAX',
    'footer.4dx': '4DX',
    'footer.vip': 'VIP',
    'footer.dolby': 'Dolby Cinema',
    'footer.faq': 'FAQ',
    'footer.contact': 'Contactez-nous',
    'footer.terms': 'Conditions générales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.copyright': 'Tous droits réservés.',
    
    // General
    'general.searchPlaceholder': 'Rechercher des films...',
    'general.loading': 'Chargement...',
    'general.error': 'Une erreur est survenue',
    'general.retry': 'Réessayer',
    'general.back': 'Retour',
    'general.next': 'Suivant',
    'general.previous': 'Précédent',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
