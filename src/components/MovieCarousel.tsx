import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Plus, Star, Info } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
  description: string;
}

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
  showRank?: boolean;
}

export function MovieCarousel({ title, movies, showRank = false }: MovieCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative group py-8">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-4">
        <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wide">
          {title}
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-full bg-gradient-to-r from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <ChevronLeft className="w-8 h-8 text-foreground" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-full bg-gradient-to-l from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <ChevronRight className="w-8 h-8 text-foreground" />
        </button>

        {/* Movies Row */}
        <div
          ref={carouselRef}
          className="flex gap-3 overflow-x-auto no-scrollbar px-4 md:px-8 scroll-smooth"
        >
          {movies.map((movie, index) => (
            <motion.div
              key={movie.id}
              className="relative flex-shrink-0 w-[160px] md:w-[200px] lg:w-[230px] poster-card cursor-pointer"
              onMouseEnter={() => setHoveredId(movie.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Rank Number for Top 10 */}
              {showRank && (
                <div className="absolute -left-4 bottom-0 z-10 font-display text-8xl md:text-9xl text-foreground/20 leading-none select-none">
                  {index + 1}
                </div>
              )}

              {/* Poster Image */}
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden poster-shadow">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="poster-overlay flex flex-col justify-end p-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-cinema-gold mb-2">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-sm font-semibold">{movie.rating}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-foreground font-semibold text-sm mb-1 line-clamp-2">
                    {movie.title}
                  </h3>

                  {/* Genre & Year */}
                  <p className="text-muted-foreground text-xs mb-3">
                    {movie.genre} • {movie.year}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs line-clamp-2 mb-3">
                    {movie.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold flex items-center justify-center gap-1 transition-colors">
                      <Play className="w-3 h-3 fill-current" />
                      Trailer
                    </button>
                    <button className="p-2 rounded bg-secondary/80 hover:bg-secondary text-foreground transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded bg-secondary/80 hover:bg-secondary text-foreground transition-colors">
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
