import { motion } from 'framer-motion';
import { ChevronRight, Ticket, Bell, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { MovieDetailModal, MovieDetails } from './MovieDetailModal';
import { NotifyMeModal } from './NotifyMeModal';
import { useLanguage } from '@/contexts/LanguageContext';

interface MovieGridProps {
  title: string;
  movies: MovieDetails[];
  showSeeAll?: boolean;
  showBookButton?: boolean;
}

export function MovieGrid({ title, movies, showSeeAll = true, showBookButton = true }: MovieGridProps) {
  const { t } = useLanguage();
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notifyMovie, setNotifyMovie] = useState<MovieDetails | null>(null);
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);
  const [notifiedMovies, setNotifiedMovies] = useState<Set<number>>(new Set());

  // Load notified movies from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('notifiedMovies');
    if (stored) {
      setNotifiedMovies(new Set(JSON.parse(stored)));
    }
  }, []);

  const handleOpenModal = (movie: MovieDetails) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleOpenNotifyModal = (movie: MovieDetails) => {
    if (notifiedMovies.has(movie.id)) return;
    setNotifyMovie(movie);
    setIsNotifyModalOpen(true);
  };

  const handleCloseNotifyModal = () => {
    setIsNotifyModalOpen(false);
    setNotifyMovie(null);
  };

  const handleMovieNotified = (movieId: number) => {
    setNotifiedMovies(prev => new Set([...prev, movieId]));
  };

  return (
    <>
      <section id={title === t('movies.currentlyInCinema') ? "currently-playing" : undefined} className="py-12">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground tracking-tight font-montserrat capitalize" style={{ fontWeight: 698 }}>
              {title}
            </h2>
            {showSeeAll && (
              <a
                href="#"
                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {t('movies.seeAll')}
                <ChevronRight className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Movie Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
            {movies.map((movie, index) => (
              <motion.div
                key={movie.id}
                className="group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
              >
                {/* Poster */}
                <div className="aspect-[2/3] rounded-lg overflow-hidden bg-card relative shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay with Book Now Button - only for currently showing */}
                  {showBookButton && (
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 left-3 right-3">
                        <button
                          onClick={() => handleOpenModal(movie)}
                          className="w-full py-2 rounded-lg bg-gray-200 hover:bg-gray-100 text-primary-foreground text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                        >
                          <Ticket className="w-4 h-4" />
                          {t('movies.bookNow')}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Notify Me Button for upcoming movies */}
                  {!showBookButton && (
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      {notifiedMovies.has(movie.id) ? (
                        <div className="w-full py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold flex items-center justify-center gap-2">
                          <Check className="w-4 h-4" />
                          {t('movies.notified')}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleOpenNotifyModal(movie)}
                          className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors backdrop-blur-sm"
                        >
                          <Bell className="w-4 h-4" />
                          {t('movies.notifyMe')}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-3 text-sm font-medium text-foreground/90 line-clamp-1 group-hover:text-foreground transition-colors">
                  {movie.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Movie Detail Modal */}
      <MovieDetailModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Notify Me Modal */}
      <NotifyMeModal
        isOpen={isNotifyModalOpen}
        onClose={handleCloseNotifyModal}
        movieTitle={notifyMovie?.title || ''}
        movieId={notifyMovie?.id || 0}
        onNotified={handleMovieNotified}
      />
    </>
  );
}
