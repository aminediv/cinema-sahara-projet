import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Search, X, Film, User, Clock, Star, Sparkles, TrendingUp, Play, Ticket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useEffect, useRef } from 'react';
import { MovieDetails } from './MovieDetailModal';
import { moviesData, upcomingMoviesData, getTranslatedMovies } from '@/data/movies';
import { useLanguage } from '@/contexts/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMovie: (movie: MovieDetails) => void;
}

interface SearchResult {
  type: 'movie' | 'actor';
  movie?: MovieDetails;
  actorName?: string;
  movies?: MovieDetails[];
}

export function SearchModal({ isOpen, onClose, onSelectMovie }: SearchModalProps) {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Get translated movies based on current language
  const currentlyShowingDetails = useMemo(() => getTranslatedMovies(moviesData, language), [language]);
  const nextReleasesDetails = useMemo(() => getTranslatedMovies(upcomingMoviesData, language), [language]);
  const allMovies = useMemo(() => [...currentlyShowingDetails, ...nextReleasesDetails], [currentlyShowingDetails, nextReleasesDetails]);
  
  // Featured movie - El Sett
  const featuredMovie = useMemo(() => 
    currentlyShowingDetails.find(movie => movie.title.toLowerCase().includes("el sett") || movie.title.toLowerCase().includes("la dame")) || currentlyShowingDetails[0],
    [currentlyShowingDetails]
  );

  useEffect(() => {
    const stored = localStorage.getItem('recentSearches');
    if (stored) {
      setRecentSearches(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  const saveSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    const searchResults: SearchResult[] = [];
    
    allMovies.forEach(movie => {
      if (movie.title.toLowerCase().includes(lowerQuery)) {
        searchResults.push({ type: 'movie', movie });
      }
    });

    const actorMap = new Map<string, MovieDetails[]>();
    allMovies.forEach(movie => {
      movie.cast?.forEach(actor => {
        if (actor.toLowerCase().includes(lowerQuery)) {
          if (!actorMap.has(actor)) {
            actorMap.set(actor, []);
          }
          actorMap.get(actor)?.push(movie);
        }
      });
    });

    actorMap.forEach((movies, actorName) => {
      searchResults.push({ type: 'actor', actorName, movies });
    });

    return searchResults;
  }, [query, allMovies]);

  const handleSelectMovie = (movie: MovieDetails) => {
    saveSearch(query);
    onSelectMovie(movie);
    onClose();
    setQuery('');
  };

  const handleRecentSearch = (search: string) => {
    setQuery(search);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent hideCloseButton className="max-w-2xl p-0 border border-white/10 shadow-2xl bg-transparent overflow-hidden top-[12%] translate-y-0 rounded-3xl">
        {/* Layered Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 rounded-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent rounded-3xl" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        <div className="relative z-10">
          {/* Search Header */}
          <div className="relative p-6 pb-0">
            <div className="relative">
              {/* Glowing input border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-2xl blur-sm opacity-50" />
              <div className="relative flex items-center bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="pl-5 pr-3">
                  <Search className="w-5 h-5 text-white/40" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('search.placeholder')}
                  className="flex-1 py-4 pr-4 bg-transparent text-white text-base placeholder:text-white/30 focus:outline-none font-light tracking-wide"
                />
                {query ? (
                  <button
                    onClick={() => setQuery('')}
                    className="mr-3 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="mr-4 px-2 py-1 rounded-md bg-white/5 border border-white/10">
                    <span className="text-white/30 text-xs font-mono">⌘K</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[55vh] overflow-y-auto p-6 pt-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            <AnimatePresence mode="wait">
              {!query.trim() ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Featured Spotlight */}
                  {featuredMovie && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => handleSelectMovie(featuredMovie)}
                      className="w-full relative rounded-2xl overflow-hidden group"
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img 
                          src={featuredMovie.backdrop || featuredMovie.image} 
                          alt={featuredMovie.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="relative flex items-center gap-5 p-5">
                        {/* Poster */}
                        <div className="relative flex-shrink-0 w-24 h-36 rounded-xl overflow-hidden ring-2 ring-white/20 shadow-2xl">
                          <img 
                            src={featuredMovie.image} 
                            alt={featuredMovie.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Play overlay */}
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            </div>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 text-left min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-semibold uppercase tracking-wider">
                              {language === 'fr' ? 'À la une' : 'Featured'}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/60 text-[10px] font-medium">
                              {language === 'fr' ? 'En salle' : 'Now Playing'}
                            </span>
                          </div>
                          <h3 className="text-white text-lg font-semibold mb-1 truncate group-hover:text-white/90 transition-colors">
                            {featuredMovie.title}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-white/50 mb-3">
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                              {featuredMovie.rating}
                            </span>
                            <span>{featuredMovie.duration}</span>
                            <span>{featuredMovie.genre[0]}</span>
                          </div>
                          <p className="text-white/40 text-xs line-clamp-2 leading-relaxed">
                            {featuredMovie.description}
                          </p>
                          {/* Book Now hint */}
                          <div className="mt-3 flex items-center gap-2 text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                            <Ticket className="w-3.5 h-3.5" />
                            <span>{language === 'fr' ? 'Cliquez pour réserver' : 'Click to book tickets'}</span>
                          </div>
                        </div>

                        {/* Formats */}
                        <div className="flex-shrink-0 flex flex-col gap-1.5">
                          {featuredMovie.formats?.map(format => (
                            <span key={format} className="px-2.5 py-1 rounded-lg bg-white/10 text-white/70 text-[10px] font-bold text-center">
                              {format}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </motion.button>
                  )}
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-white/30" />
                          <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
                            {language === 'fr' ? 'Récent' : 'Recent'}
                          </span>
                        </div>
                        <button 
                          onClick={clearRecentSearches}
                          className="text-white/30 hover:text-white/60 text-xs transition-colors"
                        >
                          {language === 'fr' ? 'Effacer' : 'Clear'}
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((search, index) => (
                          <motion.button
                            key={search}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.03 }}
                            onClick={() => handleRecentSearch(search)}
                            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-white/60 hover:text-white text-sm transition-all duration-200"
                          >
                            {search}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trending / Popular Movies */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-white/30" />
                      <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
                        {language === 'fr' ? 'Tendances' : 'Trending Now'}
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {allMovies.slice(0, 8).map((movie, index) => (
                        <motion.button
                          key={movie.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.04, duration: 0.3 }}
                          onClick={() => handleSelectMovie(movie)}
                          className="group relative aspect-[2/3] rounded-xl overflow-hidden"
                        >
                          <img 
                            src={movie.image} 
                            alt={movie.title}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          {/* Title */}
                          <div className="absolute inset-x-0 bottom-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-white text-xs font-medium line-clamp-2 drop-shadow-lg">{movie.title}</span>
                          </div>
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : results.length > 0 ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  {results.map((result, index) => (
                    <motion.div
                      key={result.type === 'movie' ? `movie-${result.movie?.id}` : `actor-${result.actorName}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.25 }}
                    >
                      {result.type === 'movie' && result.movie && (
                        <button
                          onClick={() => handleSelectMovie(result.movie!)}
                          className="w-full flex items-center gap-4 p-3 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all duration-300 text-left group"
                        >
                          <div className="relative w-14 h-20 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-white/10">
                            <img 
                              src={result.movie.image} 
                              alt={result.movie.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Film className="w-3.5 h-3.5 text-white/30" />
                              <span className="text-white font-medium truncate group-hover:text-white/90 transition-colors">{result.movie.title}</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-white/40">
                              <span className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                {result.movie.rating}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-white/20" />
                              <span>{result.movie.releaseDate}</span>
                              <span className="w-1 h-1 rounded-full bg-white/20" />
                              <span>{result.movie.genre[0]}</span>
                            </div>
                            <div className="mt-1.5 flex gap-1.5">
                              {result.movie.formats?.slice(0, 2).map(format => (
                                <span key={format} className="px-2 py-0.5 rounded-md bg-white/5 text-white/50 text-[10px] font-medium">
                                  {format}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Sparkles className="w-4 h-4 text-white/30" />
                          </div>
                        </button>
                      )}

                      {result.type === 'actor' && result.actorName && (
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center ring-1 ring-white/10">
                              <User className="w-5 h-5 text-white/50" />
                            </div>
                            <div>
                              <span className="text-white font-medium">{result.actorName}</span>
                              <div className="flex items-center gap-2 text-white/40 text-xs">
                                <span>Actor</span>
                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                <span>{result.movies?.length} {result.movies?.length === 1 ? 'movie' : 'movies'}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
                            {result.movies?.map(movie => (
                              <button
                                key={movie.id}
                                onClick={() => handleSelectMovie(movie)}
                                className="flex-shrink-0 w-20 group/movie"
                              >
                                <div className="aspect-[2/3] rounded-xl overflow-hidden mb-2 ring-1 ring-white/10 group-hover/movie:ring-white/20 transition-all">
                                  <img 
                                    src={movie.image} 
                                    alt={movie.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover/movie:scale-105"
                                  />
                                </div>
                                <span className="text-white/50 text-xs line-clamp-2 group-hover/movie:text-white/80 transition-colors leading-tight">{movie.title}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 ring-1 ring-white/10">
                    <Search className="w-8 h-8 text-white/20" />
                  </div>
                  <p className="text-white/50 font-medium">No results for "{query}"</p>
                  <p className="text-white/30 text-sm mt-2">Try a different search term</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="border-t border-white/5 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4 text-white/20 text-xs">
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px]">↵</kbd>
                Select
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px]">ESC</kbd>
                Close
              </span>
            </div>
            <span className="text-white/20 text-xs">
              {results.length > 0 ? `${results.length} ${results.length === 1 ? 'result' : 'results'}` : 'Start typing to search'}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}