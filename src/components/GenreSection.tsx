import { motion } from 'framer-motion';

const genres = [
  { name: "Action", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80", color: "from-red-600 to-orange-600" },
  { name: "Comedy", image: "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=400&q=80", color: "from-yellow-500 to-amber-600" },
  { name: "Drama", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80", color: "from-purple-600 to-indigo-600" },
  { name: "Horror", image: "https://images.unsplash.com/photo-1626958390898-162d3577f293?w=400&q=80", color: "from-gray-800 to-red-900" },
  { name: "Sci-Fi", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80", color: "from-cyan-600 to-blue-600" },
  { name: "Romance", image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&q=80", color: "from-pink-500 to-rose-600" },
  { name: "Thriller", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80", color: "from-slate-700 to-zinc-800" },
  { name: "Animation", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80", color: "from-emerald-500 to-teal-600" },
];

export function GenreSection() {
  return (
    <section id="genres" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            BROWSE BY <span className="text-gradient">GENRE</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our vast collection of movies across all your favorite genres
          </p>
        </motion.div>

        {/* Genre Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {genres.map((genre, index) => (
            <motion.div
              key={genre.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
            >
              {/* Background Image */}
              <img
                src={genre.image}
                alt={genre.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${genre.color} opacity-70 group-hover:opacity-80 transition-opacity`} />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide group-hover:scale-110 transition-transform">
                  {genre.name.toUpperCase()}
                </h3>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
