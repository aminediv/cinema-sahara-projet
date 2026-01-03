import avatarPoster from '@/assets/avatar-fire-and-ash.jpg';
import shrek5Poster from '@/assets/poster-shrek-5.jpg';
import odysseyPoster from '@/assets/poster-odyssey.jpg';
import zotopiaPoster from '@/assets/poster-zootopia-2.webp';
import housemaidPoster from '@/assets/poster-housemaid.webp';
import spongebobPoster from '@/assets/poster-spongebob.webp';
import elSettPoster from '@/assets/poster-el-sett.webp';
import hungerGamesPoster from '@/assets/poster-hunger-games.jpg';
import scream7Poster from '@/assets/poster-scream-7.jpg';
import supergirlPoster from '@/assets/poster-supergirl.jpg';
import yearsLaterPoster from '@/assets/poster-28-years-later.jpg';
import avatar4Poster from '@/assets/poster-avatar-4.jpg';
import missionImpossible8Poster from '@/assets/poster-mission-impossible-8.jpg';

export interface MovieTranslation {
  title: string;
  description: string;
  genre: string[];
  director: string;
  cast: string[];
}

export interface MovieData {
  id: number;
  image: string;
  backdrop?: string;
  duration: string;
  rating: number;
  releaseDate: string;
  trailerUrl?: string;
  formats: string[];
  showtimes: {
    date: string;
    times: string[];
  }[];
  isNew?: boolean;
  translations: {
    en: MovieTranslation;
    fr: MovieTranslation;
  };
}

// Base movie data with translations
export const moviesData: MovieData[] = [
  {
    id: 22,
    image: "https://image.tmdb.org/t/p/original/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    backdrop: "https://i.ytimg.com/vi/avz06PDqDbM/maxresdefault.jpg",
    duration: "2h 43min",
    rating: 7.8,
    releaseDate: "Jul 12, 2023",
    trailerUrl: "https://www.youtube.com/watch?v=avz06PDqDbM",
    formats: ["IMAX", "4DX"],
    showtimes: [
      { date: "Today", times: ["14:30", "18:00", "21:30"] },
      { date: "Tomorrow", times: ["13:00", "16:30", "20:00"] },
      { date: "Sun, Dec 29", times: ["15:00", "18:30", "22:00"] },
    ],
    translations: {
      en: {
        title: "Mission: Impossible - Dead Reckoning Part One",
        description: "Ethan Hunt and his IMF team must track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands.",
        genre: ["Action", "Adventure", "Thriller"],
        director: "Christopher McQuarrie",
        cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg", "Rebecca Ferguson"],
      },
      fr: {
        title: "Mission : Impossible - Dead Reckoning Partie 1",
        description: "Ethan Hunt et son équipe de l'IMF doivent traquer une nouvelle arme terrifiante qui menace toute l'humanité avant qu'elle ne tombe entre de mauvaises mains.",
        genre: ["Action", "Aventure", "Thriller"],
        director: "Christopher McQuarrie",
        cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg", "Rebecca Ferguson"],
      },
    },
  },
  {
    id: 21,
    image: elSettPoster,
    backdrop: "https://i.ytimg.com/vi/Tod1uGBkw2k/maxresdefault.jpg",
    duration: "2h 20min",
    rating: 8.2,
    releaseDate: "Dec 25, 2024",
    trailerUrl: "https://www.youtube.com/watch?v=Tod1uGBkw2k",
    formats: ["Standard"],
    showtimes: [
      { date: "Today", times: ["15:00", "18:00", "21:00"] },
      { date: "Tomorrow", times: ["14:00", "17:00", "20:00"] },
      { date: "Sun, Dec 29", times: ["16:00", "19:00", "22:00"] },
    ],
    translations: {
      en: {
        title: "El Sett",
        description: "A biographical drama about the legendary Egyptian singer Umm Kulthum, known as the 'Star of the East', chronicling her rise to become one of the most influential voices in Arab music history.",
        genre: ["Drama", "Biography", "Music"],
        director: "TBA",
        cast: ["Menna Shalabi", "Khaled El Nabawy"],
      },
      fr: {
        title: "La Dame",
        description: "Un drame biographique sur la légendaire chanteuse égyptienne Oum Kalthoum, connue comme 'l'Étoile de l'Orient', retraçant son ascension pour devenir l'une des voix les plus influentes de l'histoire de la musique arabe.",
        genre: ["Drame", "Biographie", "Musique"],
        director: "À confirmer",
        cast: ["Menna Shalabi", "Khaled El Nabawy"],
      },
    },
  },
  {
    id: 1,
    image: avatarPoster,
    backdrop: "https://i.ytimg.com/vi/Gmr2III_5EY/maxresdefault.jpg",
    duration: "3h 10min",
    rating: 8.5,
    releaseDate: "Dec 19, 2025",
    trailerUrl: "https://www.youtube.com/watch?v=Gmr2III_5EY",
    formats: ["IMAX", "4DX", "3D"],
    showtimes: [
      { date: "Today", times: ["14:00", "17:30", "21:00"] },
      { date: "Tomorrow", times: ["11:00", "14:30", "18:00", "21:30"] },
      { date: "Sun, Dec 29", times: ["13:00", "16:30", "20:00"] },
    ],
    translations: {
      en: {
        title: "Avatar: Fire and Ash",
        description: "Jake Sully and Neytiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora when an ancient threat resurfaces.",
        genre: ["Action", "Adventure", "Sci-Fi"],
        director: "James Cameron",
        cast: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Stephen Lang"],
      },
      fr: {
        title: "Avatar : Le Feu et les Cendres",
        description: "Jake Sully et Neytiri ont fondé une famille et font tout pour rester ensemble. Cependant, ils doivent quitter leur foyer et explorer les régions de Pandora lorsqu'une menace ancestrale refait surface.",
        genre: ["Action", "Aventure", "Science-Fiction"],
        director: "James Cameron",
        cast: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Stephen Lang"],
      },
    },
  },
  {
    id: 2,
    image: zotopiaPoster,
    backdrop: "https://i.ytimg.com/vi/5AwtptT8X8k/maxresdefault.jpg",
    duration: "1h 48min",
    rating: 7.8,
    releaseDate: "Nov 26, 2025",
    trailerUrl: "https://www.youtube.com/watch?v=5AwtptT8X8k",
    formats: ["Standard", "3D"],
    showtimes: [
      { date: "Today", times: ["10:30", "13:00", "15:30", "18:00"] },
      { date: "Tomorrow", times: ["10:00", "12:30", "15:00", "17:30", "20:00"] },
      { date: "Sun, Dec 29", times: ["11:00", "14:00", "16:30", "19:00"] },
    ],
    isNew: true,
    translations: {
      en: {
        title: "Zootopia 2",
        description: "Judy Hopps and Nick Wilde return to Zootopia for an all-new adventure that takes them deep into the unexplored regions of the city.",
        genre: ["Animation", "Adventure", "Comedy"],
        director: "Byron Howard",
        cast: ["Ginnifer Goodwin", "Jason Bateman", "Idris Elba"],
      },
      fr: {
        title: "Zootopie 2",
        description: "Judy Hopps et Nick Wilde retournent à Zootopie pour une toute nouvelle aventure qui les emmène au plus profond des régions inexplorées de la ville.",
        genre: ["Animation", "Aventure", "Comédie"],
        director: "Byron Howard",
        cast: ["Ginnifer Goodwin", "Jason Bateman", "Idris Elba"],
      },
    },
  },
  {
    id: 3,
    image: housemaidPoster,
    backdrop: "https://i.ytimg.com/vi/48CtX6OgU3s/maxresdefault.jpg",
    duration: "2h 5min",
    rating: 7.2,
    releaseDate: "Dec 20, 2024",
    trailerUrl: "https://www.youtube.com/watch?v=48CtX6OgU3s",
    formats: ["Standard"],
    showtimes: [
      { date: "Today", times: ["19:00", "21:30"] },
      { date: "Tomorrow", times: ["16:00", "18:30", "21:00"] },
      { date: "Sun, Dec 29", times: ["17:00", "20:00", "22:30"] },
    ],
    isNew: true,
    translations: {
      en: {
        title: "The Housemaid",
        description: "A psychological thriller about a young woman who takes a job as a housemaid for a wealthy family, only to discover dark secrets that threaten her life.",
        genre: ["Thriller", "Drama", "Horror"],
        director: "Paul Feig",
        cast: ["Sydney Sweeney", "Amanda Seyfried", "Brandon Sklenar"],
      },
      fr: {
        title: "La Femme de Ménage",
        description: "Un thriller psychologique sur une jeune femme qui accepte un emploi de femme de ménage pour une famille riche, pour découvrir des secrets sombres qui menacent sa vie.",
        genre: ["Thriller", "Drame", "Horreur"],
        director: "Paul Feig",
        cast: ["Sydney Sweeney", "Amanda Seyfried", "Brandon Sklenar"],
      },
    },
  },
  {
    id: 4,
    image: spongebobPoster,
    backdrop: "https://i.ytimg.com/vi/XdPt8QWTypI/maxresdefault.jpg",
    duration: "1h 35min",
    rating: 6.9,
    releaseDate: "Dec 19, 2024",
    trailerUrl: "https://www.youtube.com/watch?v=XdPt8QWTypI",
    formats: ["Standard", "3D"],
    showtimes: [
      { date: "Today", times: ["10:00", "12:00", "14:00", "16:00"] },
      { date: "Tomorrow", times: ["10:30", "12:30", "14:30", "16:30", "18:30"] },
      { date: "Sun, Dec 29", times: ["11:00", "13:00", "15:00", "17:00"] },
    ],
    isNew: true,
    translations: {
      en: {
        title: "SpongeBob SquarePants",
        description: "SpongeBob and his friends embark on an epic adventure to save Bikini Bottom from a new threat.",
        genre: ["Animation", "Comedy", "Family"],
        director: "Tim Hill",
        cast: ["Tom Kenny", "Bill Fagerbakke", "Clancy Brown"],
      },
      fr: {
        title: "Bob l'Éponge : Le Film",
        description: "Bob l'Éponge et ses amis se lancent dans une aventure épique pour sauver Bikini Bottom d'une nouvelle menace.",
        genre: ["Animation", "Comédie", "Famille"],
        director: "Tim Hill",
        cast: ["Tom Kenny", "Bill Fagerbakke", "Clancy Brown"],
      },
    },
  },
  {
    id: 6,
    image: missionImpossible8Poster,
    backdrop: "https://i.ytimg.com/vi/kLzsazwBanE/maxresdefault.jpg",
    duration: "2h 43min",
    rating: 8.1,
    releaseDate: "May 23, 2025",
    trailerUrl: "https://www.youtube.com/watch?v=kLzsazwBanE",
    formats: ["IMAX", "4DX"],
    showtimes: [
      { date: "Today", times: ["15:00", "18:30", "22:00"] },
      { date: "Tomorrow", times: ["14:00", "17:30", "21:00"] },
      { date: "Sun, Dec 29", times: ["16:00", "19:30", "22:30"] },
    ],
    translations: {
      en: {
        title: "Mission: Impossible 8",
        description: "Ethan Hunt and his IMF team embark on their most dangerous mission yet.",
        genre: ["Action", "Adventure", "Thriller"],
        director: "Christopher McQuarrie",
        cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg"],
      },
      fr: {
        title: "Mission : Impossible 8",
        description: "Ethan Hunt et son équipe de l'IMF se lancent dans leur mission la plus dangereuse à ce jour.",
        genre: ["Action", "Aventure", "Thriller"],
        director: "Christopher McQuarrie",
        cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg"],
      },
    },
  },
  {
    id: 7,
    image: "https://image.tmdb.org/t/p/original/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
    backdrop: "https://i.ytimg.com/vi/qSu6i2iFMO0/maxresdefault.jpg",
    duration: "1h 50min",
    rating: 7.6,
    releaseDate: "Dec 20, 2024",
    trailerUrl: "https://www.youtube.com/watch?v=qSu6i2iFMO0",
    formats: ["Standard", "3D", "4DX"],
    showtimes: [
      { date: "Today", times: ["10:30", "13:00", "15:30", "18:00", "20:30"] },
      { date: "Tomorrow", times: ["11:00", "13:30", "16:00", "18:30", "21:00"] },
      { date: "Sun, Dec 29", times: ["10:00", "12:30", "15:00", "17:30", "20:00"] },
    ],
    translations: {
      en: {
        title: "Sonic the Hedgehog 3",
        description: "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain.",
        genre: ["Action", "Adventure", "Comedy"],
        director: "Jeff Fowler",
        cast: ["Ben Schwartz", "Jim Carrey", "Keanu Reeves", "Idris Elba"],
      },
      fr: {
        title: "Sonic le Hérisson 3",
        description: "Sonic, Knuckles et Tails se réunissent contre un nouvel adversaire puissant, Shadow, un méchant mystérieux.",
        genre: ["Action", "Aventure", "Comédie"],
        director: "Jeff Fowler",
        cast: ["Ben Schwartz", "Jim Carrey", "Keanu Reeves", "Idris Elba"],
      },
    },
  },
  {
    id: 8,
    image: "https://image.tmdb.org/t/p/original/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg",
    backdrop: "https://i.ytimg.com/vi/6COmYeLsz4c/maxresdefault.jpg",
    duration: "2h 40min",
    rating: 8.0,
    releaseDate: "Nov 22, 2024",
    trailerUrl: "https://www.youtube.com/watch?v=6COmYeLsz4c",
    formats: ["IMAX", "Standard"],
    showtimes: [
      { date: "Today", times: ["14:30", "18:00", "21:30"] },
      { date: "Tomorrow", times: ["13:00", "16:30", "20:00"] },
      { date: "Sun, Dec 29", times: ["15:00", "18:30", "22:00"] },
    ],
    translations: {
      en: {
        title: "Wicked",
        description: "The untold story of the witches of Oz - Elphaba and Glinda - and how they became unlikely friends.",
        genre: ["Musical", "Fantasy", "Drama"],
        director: "Jon M. Chu",
        cast: ["Cynthia Erivo", "Ariana Grande", "Michelle Yeoh", "Jeff Goldblum"],
      },
      fr: {
        title: "Wicked",
        description: "L'histoire inédite des sorcières d'Oz - Elphaba et Glinda - et comment elles sont devenues des amies improbables.",
        genre: ["Comédie Musicale", "Fantastique", "Drame"],
        director: "Jon M. Chu",
        cast: ["Cynthia Erivo", "Ariana Grande", "Michelle Yeoh", "Jeff Goldblum"],
      },
    },
  },
  {
    id: 9,
    image: "https://image.tmdb.org/t/p/original/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    backdrop: "https://i.ytimg.com/vi/4rgYUipGJNo/maxresdefault.jpg",
    duration: "2h 28min",
    rating: 7.8,
    releaseDate: "Nov 15, 2024",
    trailerUrl: "https://www.youtube.com/watch?v=4rgYUipGJNo",
    formats: ["IMAX", "Standard"],
    showtimes: [
      { date: "Today", times: ["16:00", "19:30", "22:30"] },
      { date: "Tomorrow", times: ["15:00", "18:30", "21:30"] },
      { date: "Sun, Dec 29", times: ["14:00", "17:30", "21:00"] },
    ],
    translations: {
      en: {
        title: "Gladiator II",
        description: "Years after witnessing the death of Maximus, Lucius must enter the Colosseum and fight for his life.",
        genre: ["Action", "Drama", "Adventure"],
        director: "Ridley Scott",
        cast: ["Paul Mescal", "Denzel Washington", "Pedro Pascal", "Connie Nielsen"],
      },
      fr: {
        title: "Gladiateur II",
        description: "Des années après avoir été témoin de la mort de Maximus, Lucius doit entrer dans le Colisée et se battre pour sa vie.",
        genre: ["Action", "Drame", "Aventure"],
        director: "Ridley Scott",
        cast: ["Paul Mescal", "Denzel Washington", "Pedro Pascal", "Connie Nielsen"],
      },
    },
  },
  {
    id: 10,
    image: "https://image.tmdb.org/t/p/original/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg",
    backdrop: "https://i.ytimg.com/vi/hDZ7y8RP5HE/maxresdefault.jpg",
    duration: "1h 40min",
    rating: 7.4,
    releaseDate: "Nov 27, 2024",
    trailerUrl: "https://www.youtube.com/watch?v=hDZ7y8RP5HE",
    formats: ["Standard", "3D"],
    showtimes: [
      { date: "Today", times: ["10:00", "12:30", "15:00", "17:30"] },
      { date: "Tomorrow", times: ["10:30", "13:00", "15:30", "18:00", "20:30"] },
      { date: "Sun, Dec 29", times: ["11:00", "13:30", "16:00", "18:30"] },
    ],
    translations: {
      en: {
        title: "Moana 2",
        description: "Moana sets sail on a new adventure with a crew of unlikely seafarers to break a curse and reconnect her people.",
        genre: ["Animation", "Adventure", "Family"],
        director: "David Derrick Jr.",
        cast: ["Auliʻi Cravalho", "Dwayne Johnson", "Temuera Morrison"],
      },
      fr: {
        title: "Vaiana 2",
        description: "Vaiana prend la mer pour une nouvelle aventure avec un équipage de marins improbables pour briser une malédiction et reconnecter son peuple.",
        genre: ["Animation", "Aventure", "Famille"],
        director: "David Derrick Jr.",
        cast: ["Auliʻi Cravalho", "Dwayne Johnson", "Temuera Morrison"],
      },
    },
  },
  {
    id: 12,
    image: "https://image.tmdb.org/t/p/original/i47IUSsN126K11JUzqQIOi1Mg1M.jpg",
    backdrop: "https://i.ytimg.com/vi/A8KVD0FzTXU/maxresdefault.jpg",
    duration: "2h 7min",
    rating: 6.5,
    releaseDate: "Dec 13, 2024",
    trailerUrl: "https://www.youtube.com/watch?v=A8KVD0FzTXU",
    formats: ["IMAX", "Standard"],
    showtimes: [
      { date: "Today", times: ["15:30", "18:30", "21:30"] },
      { date: "Tomorrow", times: ["14:00", "17:00", "20:00", "22:30"] },
      { date: "Sun, Dec 29", times: ["16:00", "19:00", "22:00"] },
    ],
    isNew: true,
    translations: {
      en: {
        title: "Kraven the Hunter",
        description: "The brutal and complex origin story of Kraven the Hunter, one of Marvel's most iconic villains.",
        genre: ["Action", "Adventure", "Thriller"],
        director: "J.C. Chandor",
        cast: ["Aaron Taylor-Johnson", "Ariana DeBose", "Russell Crowe"],
      },
      fr: {
        title: "Kraven le Chasseur",
        description: "L'histoire d'origine brutale et complexe de Kraven le Chasseur, l'un des méchants les plus emblématiques de Marvel.",
        genre: ["Action", "Aventure", "Thriller"],
        director: "J.C. Chandor",
        cast: ["Aaron Taylor-Johnson", "Ariana DeBose", "Russell Crowe"],
      },
    },
  },
];

export const upcomingMoviesData: MovieData[] = [
  {
    id: 13,
    image: shrek5Poster,
    backdrop: "https://i.ytimg.com/vi/I9-wXs4KtrU/maxresdefault.jpg",
    duration: "1h 45min",
    rating: 0,
    releaseDate: "Jul 1, 2026",
    trailerUrl: "https://www.youtube.com/watch?v=I9-wXs4KtrU",
    formats: ["Standard", "3D"],
    showtimes: [],
    translations: {
      en: {
        title: "Shrek 5",
        description: "The beloved ogre returns for another adventure in the kingdom of Far Far Away.",
        genre: ["Animation", "Comedy", "Family"],
        director: "Walt Dohrn",
        cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
      },
      fr: {
        title: "Shrek 5",
        description: "L'ogre bien-aimé revient pour une nouvelle aventure dans le royaume de Fort Fort Lointain.",
        genre: ["Animation", "Comédie", "Famille"],
        director: "Walt Dohrn",
        cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
      },
    },
  },
  {
    id: 14,
    image: odysseyPoster,
    backdrop: "https://i.ytimg.com/vi/Mzw2ttJD2qQ/maxresdefault.jpg",
    duration: "2h 45min",
    rating: 0,
    releaseDate: "Jul 17, 2026",
    trailerUrl: "https://www.youtube.com/watch?v=Mzw2ttJD2qQ",
    formats: ["IMAX", "70mm"],
    showtimes: [],
    translations: {
      en: {
        title: "The Odyssey",
        description: "Christopher Nolan's epic adaptation of Homer's legendary tale of Odysseus's journey home.",
        genre: ["Adventure", "Drama", "Fantasy"],
        director: "Christopher Nolan",
        cast: ["Matt Damon", "Tom Holland", "Anne Hathaway", "Robert Pattinson", "Zendaya"],
      },
      fr: {
        title: "L'Odyssée",
        description: "L'adaptation épique de Christopher Nolan du conte légendaire d'Homère sur le voyage d'Ulysse vers sa patrie.",
        genre: ["Aventure", "Drame", "Fantastique"],
        director: "Christopher Nolan",
        cast: ["Matt Damon", "Tom Holland", "Anne Hathaway", "Robert Pattinson", "Zendaya"],
      },
    },
  },
  {
    id: 16,
    image: hungerGamesPoster,
    backdrop: "https://i.ytimg.com/vi/MPjxijuBuSo/maxresdefault.jpg",
    duration: "2h 30min",
    rating: 0,
    releaseDate: "Nov 20, 2026",
    trailerUrl: "https://www.youtube.com/watch?v=MPjxijuBuSo",
    formats: ["IMAX", "Standard"],
    showtimes: [],
    translations: {
      en: {
        title: "The Hunger Games: Sunrise on the Reaping",
        description: "The next chapter in The Hunger Games saga, set during the 50th Hunger Games.",
        genre: ["Action", "Drama", "Sci-Fi"],
        director: "Francis Lawrence",
        cast: ["TBA"],
      },
      fr: {
        title: "Hunger Games : L'Aube de la Moisson",
        description: "Le prochain chapitre de la saga Hunger Games, se déroulant pendant les 50èmes Hunger Games.",
        genre: ["Action", "Drame", "Science-Fiction"],
        director: "Francis Lawrence",
        cast: ["À confirmer"],
      },
    },
  },
  {
    id: 17,
    image: scream7Poster,
    backdrop: "https://i.ytimg.com/vi/An5ixqNAMxw/maxresdefault.jpg",
    duration: "2h",
    rating: 0,
    releaseDate: "Feb 27, 2026",
    trailerUrl: "https://www.youtube.com/watch?v=An5ixqNAMxw",
    formats: ["Standard"],
    showtimes: [],
    translations: {
      en: {
        title: "Scream 7",
        description: "Ghostface returns in the seventh installment of the iconic slasher franchise.",
        genre: ["Horror", "Mystery", "Thriller"],
        director: "Kevin Williamson",
        cast: ["Neve Campbell", "Courteney Cox", "Mason Gooding"],
      },
      fr: {
        title: "Scream 7",
        description: "Ghostface revient dans le septième volet de la franchise culte de films d'horreur.",
        genre: ["Horreur", "Mystère", "Thriller"],
        director: "Kevin Williamson",
        cast: ["Neve Campbell", "Courteney Cox", "Mason Gooding"],
      },
    },
  },
  {
    id: 18,
    image: supergirlPoster,
    backdrop: "https://i.ytimg.com/vi/YqdAEdkHrwo/maxresdefault.jpg",
    duration: "2h 15min",
    rating: 0,
    releaseDate: "Jun 26, 2026",
    trailerUrl: "https://www.youtube.com/watch?v=YqdAEdkHrwo",
    formats: ["IMAX", "4DX"],
    showtimes: [],
    translations: {
      en: {
        title: "Supergirl: Woman of Tomorrow",
        description: "Supergirl embarks on an epic journey of vengeance across the cosmos.",
        genre: ["Action", "Adventure", "Sci-Fi"],
        director: "Craig Gillespie",
        cast: ["Milly Alcock", "Eve Ridley", "Matthias Schoenaerts"],
      },
      fr: {
        title: "Supergirl : Femme de Demain",
        description: "Supergirl se lance dans un voyage épique de vengeance à travers le cosmos.",
        genre: ["Action", "Aventure", "Science-Fiction"],
        director: "Craig Gillespie",
        cast: ["Milly Alcock", "Eve Ridley", "Matthias Schoenaerts"],
      },
    },
  },
  {
    id: 19,
    image: yearsLaterPoster,
    backdrop: "https://i.ytimg.com/vi/QlF68NIz8dg/maxresdefault.jpg",
    duration: "2h",
    rating: 0,
    releaseDate: "Jan 16, 2026",
    trailerUrl: "https://www.youtube.com/watch?v=QlF68NIz8dg",
    formats: ["Standard"],
    showtimes: [],
    translations: {
      en: {
        title: "28 Years Later: The Bone Temple",
        description: "The follow-up to the zombie franchise continues the story in Rage Virus-ravaged Britain.",
        genre: ["Horror", "Thriller", "Sci-Fi"],
        director: "Nia DaCosta",
        cast: ["Alfie Williams", "Jack O'Connell", "Cillian Murphy"],
      },
      fr: {
        title: "28 Ans Plus Tard : Le Temple d'Os",
        description: "La suite de la franchise zombie continue l'histoire dans une Grande-Bretagne ravagée par le virus de la rage.",
        genre: ["Horreur", "Thriller", "Science-Fiction"],
        director: "Nia DaCosta",
        cast: ["Alfie Williams", "Jack O'Connell", "Cillian Murphy"],
      },
    },
  },
  {
    id: 20,
    image: avatar4Poster,
    backdrop: "https://i.ytimg.com/vi/Ma1x7ikpid8/maxresdefault.jpg",
    duration: "3h",
    rating: 0,
    releaseDate: "Dec 18, 2026",
    formats: ["IMAX", "4DX", "3D"],
    showtimes: [],
    translations: {
      en: {
        title: "Avatar 4",
        description: "James Cameron continues the epic saga of Pandora with the fourth Avatar installment.",
        genre: ["Action", "Adventure", "Sci-Fi"],
        director: "James Cameron",
        cast: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver"],
      },
      fr: {
        title: "Avatar 4",
        description: "James Cameron continue la saga épique de Pandora avec le quatrième volet d'Avatar.",
        genre: ["Action", "Aventure", "Science-Fiction"],
        director: "James Cameron",
        cast: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver"],
      },
    },
  },
];

// Helper function to get translated movie details
export interface MovieDetails {
  id: number;
  title: string;
  image: string;
  backdrop?: string;
  description: string;
  duration: string;
  rating: number;
  genre: string[];
  releaseDate: string;
  director: string;
  cast: string[];
  trailerUrl?: string;
  showtimes: {
    date: string;
    times: string[];
  }[];
  formats: string[];
  isNew?: boolean;
}

export const getTranslatedMovie = (movie: MovieData, language: 'en' | 'fr'): MovieDetails => {
  const translation = movie.translations[language];
  return {
    id: movie.id,
    title: translation.title,
    image: movie.image,
    backdrop: movie.backdrop,
    description: translation.description,
    duration: movie.duration,
    rating: movie.rating,
    genre: translation.genre,
    releaseDate: movie.releaseDate,
    director: translation.director,
    cast: translation.cast,
    trailerUrl: movie.trailerUrl,
    showtimes: movie.showtimes,
    formats: movie.formats,
    isNew: movie.isNew,
  };
};

export const getTranslatedMovies = (movies: MovieData[], language: 'en' | 'fr'): MovieDetails[] => {
  return movies.map(movie => getTranslatedMovie(movie, language));
};

// For backward compatibility - these will be used with language context
export const currentlyShowingDetails = getTranslatedMovies(moviesData, 'en');
export const nextReleasesDetails = getTranslatedMovies(upcomingMoviesData, 'en');
