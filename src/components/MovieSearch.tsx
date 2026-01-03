import { useState, useMemo } from 'react';
import { Search, X, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MovieDetails } from './MovieDetailModal';

interface MovieSearchProps {
  movies: MovieDetails[];
  onFilter: (filtered: MovieDetails[]) => void;
}

export function MovieSearch({ movies, onFilter }: MovieSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  // Extract all unique genres from movies
  const allGenres = useMemo(() => {
    const genres = new Set<string>();
    movies.forEach(movie => {
      movie.genre.forEach(g => genres.add(g));
    });
    return Array.from(genres).sort();
  }, [movies]);

  // Filter movies based on search and genre
  const handleFilter = (query: string, genre: string | null) => {
    let filtered = movies;

    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(lowerQuery) ||
        movie.director?.toLowerCase().includes(lowerQuery) ||
        movie.cast?.some(actor => actor.toLowerCase().includes(lowerQuery))
      );
    }

    if (genre) {
      filtered = filtered.filter(movie => movie.genre.includes(genre));
    }

    onFilter(filtered);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    handleFilter(value, selectedGenre);
  };

  const handleGenreClick = (genre: string) => {
    const newGenre = selectedGenre === genre ? null : genre;
    setSelectedGenre(newGenre);
    handleFilter(searchQuery, newGenre);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedGenre(null);
    onFilter(movies);
  };

  const hasActiveFilters = searchQuery.trim() || selectedGenre;

  return (
    <div className="container mx-auto px-4 py-6 space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search movies, directors, actors..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10 pr-10 bg-card/50 border-border/50 focus:border-primary"
        />
        {searchQuery && (
          <button
            onClick={() => handleSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Genre Filters */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground mr-2">Genres:</span>
        {allGenres.map(genre => (
          <Badge
            key={genre}
            variant={selectedGenre === genre ? "default" : "outline"}
            className={`cursor-pointer transition-all duration-200 ${
              selectedGenre === genre 
                ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                : 'hover:bg-muted'
            }`}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </Badge>
        ))}
        
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground ml-2"
          >
            <X className="w-3 h-3 mr-1" />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}
