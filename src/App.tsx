import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { CinemaHero } from './components/CinemaHero';
import { MovieGrid } from './components/MovieGrid';
import { MovieSearch } from './components/MovieSearch';
import { HelpSection } from './components/HelpSection';
import { CinemaFooter } from './components/CinemaFooter';
import { moviesData, upcomingMoviesData, getTranslatedMovies, MovieDetails } from './data/movies';
import { useLanguage } from './contexts/LanguageContext';

export default function App() {
  const { t, language } = useLanguage();
  
  // Get translated movies based on current language
  const currentlyShowingDetails = useMemo(() => 
    getTranslatedMovies(moviesData, language), [language]
  );
  const nextReleasesDetails = useMemo(() => 
    getTranslatedMovies(upcomingMoviesData, language), [language]
  );
  
  const [filteredCurrentMovies, setFilteredCurrentMovies] = useState<MovieDetails[]>(currentlyShowingDetails);
  const [filteredUpcomingMovies, setFilteredUpcomingMovies] = useState<MovieDetails[]>(nextReleasesDetails);

  // Update filtered movies when language changes
  useMemo(() => {
    setFilteredCurrentMovies(currentlyShowingDetails);
    setFilteredUpcomingMovies(nextReleasesDetails);
  }, [currentlyShowingDetails, nextReleasesDetails]);

  // Combine all movies for the search component
  const allMovies = [...currentlyShowingDetails, ...nextReleasesDetails];
  const handleFilter = (filtered: MovieDetails[]) => {
    // Separate filtered results back into current and upcoming
    const currentIds = new Set(currentlyShowingDetails.map(m => m.id));
    setFilteredCurrentMovies(filtered.filter(m => currentIds.has(m.id)));
    setFilteredUpcomingMovies(filtered.filter(m => !currentIds.has(m.id)));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <CinemaHero />
        
        {filteredCurrentMovies.length > 0 && (
          <MovieGrid title={t('movies.currentlyInCinema')} movies={filteredCurrentMovies} />
        )}
        {filteredUpcomingMovies.length > 0 && (
          <>
            <div className="border-t border-border" />
            <MovieGrid title={t('movies.comingSoon')} movies={filteredUpcomingMovies} showSeeAll={true} showBookButton={false} />
          </>
        )}
        {filteredCurrentMovies.length === 0 && filteredUpcomingMovies.length === 0 && (
          <div className="container mx-auto px-4 py-16 text-center">
            <p className="text-muted-foreground text-lg">{t('movies.noMoviesFound')}</p>
          </div>
        )}
        <HelpSection />
      </main>
      <CinemaFooter />
    </div>
  );
}