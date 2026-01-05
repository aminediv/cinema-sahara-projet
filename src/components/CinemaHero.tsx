import { motion } from 'framer-motion';
import { Ticket, Plus, MapPin, Navigation, ChevronDown } from 'lucide-react';
import { useState, useMemo } from 'react';
import imaxLogo from '@/assets/imax-logo.png';
import fourDxLogo from '@/assets/4dx-logo.png';
import movieLogo from '@/assets/mission-impossible-logo.png';
import { MovieDetailModal } from './MovieDetailModal';
import { moviesData, getTranslatedMovies } from '@/data/movies';
import { useLanguage } from '@/contexts/LanguageContext';

const featuredMovie = {
  formats: ["4DX", "IMAX"],
  image: "https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
};

export function CinemaHero() {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get translated movies based on current language
  const currentlyShowingDetails = useMemo(() => getTranslatedMovies(moviesData, language), [language]);
  
  // Get Mission Impossible Dead Reckoning Part One from the movies data
  const missionImpossibleMovie = useMemo(() => 
    currentlyShowingDetails.find(movie => 
      movie.title.includes("Dead Reckoning") || movie.title.includes("Mission")
    ),
    [currentlyShowingDetails]
  );

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          src={featuredMovie.image}
          alt="Mission: Impossible - Dead Reckoning Part Two"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays - Sahara brown tones */}
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 gradient-overlay-bottom" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 min-h-[80vh] flex items-center pt-24 sm:pt-32 md:pt-40 pb-24">
        <div className="max-w-3xl space-y-6 sm:space-y-8 ml-0 sm:-ml-4 mt-8 md:mt-12">
          {/* Movie Logo */}
          <div>
            <img 
              src={movieLogo} 
              alt="Mission: Impossible - Dead Reckoning Part Two" 
              className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[500px] lg:max-w-[550px] drop-shadow-2xl"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 mt-16 sm:mt-24">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 bg-gray-200 text-primary-foreground font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-gray-200/30 hover:shadow-2xl"
            >
              <Ticket className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
              {t('hero.bookNow')}
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/20 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
              <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Available Formats */}
          <div className="flex items-center gap-3 sm:gap-5 mt-4 flex-wrap">
            <span className="text-foreground/70 text-xs sm:text-sm font-medium tracking-wide uppercase">{t('hero.availableIn')}</span>
            {/* 4DX Logo */}
            <img src={fourDxLogo} alt="4DX" className="h-6 sm:h-8 object-contain" />
            {/* IMAX Logo */}
            <img src={imaxLogo} alt="IMAX" className="h-14 sm:h-20 object-contain mt-1 sm:mt-2" />
          </div>
        </div>
      </div>

      {/* Cinema Selector Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bottom-8 left-4 right-4 md:left-auto md:right-auto md:bottom-10 md:left-1/2 md:-translate-x-1/2 max-w-3xl w-full px-4"
      >
        <div className="flex items-center gap-2 p-2 pr-4 bg-gray-800/80 backdrop-blur-sm rounded-full">
          {/* At? Button */}
          <button className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 text-primary-foreground font-bold text-sm flex items-center justify-center hover:bg-gray-100 transition-colors">
            {t('hero.at')}
          </button>

          {/* Cinema Dropdown */}
          <div className="flex-1 flex items-center gap-2 px-4 text-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm truncate">{t('hero.agadirCity')}</span>
            <ChevronDown className="w-4 h-4 flex-shrink-0 ml-auto text-muted-foreground" />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-border" />

          {/* Nearby */}
          <a 
            href="https://maps.app.goo.gl/KaUPLViHH4ww7SBB9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary/20 transition-colors text-foreground text-sm"
          >
            <Navigation className="w-4 h-4" />
            {t('hero.location')}
          </a>

        </div>
      </motion.div>

      {/* Movie Detail Modal */}
      {missionImpossibleMovie && (
        <MovieDetailModal
          movie={missionImpossibleMovie}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}
