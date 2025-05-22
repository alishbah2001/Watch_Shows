// app/data/dummyData.ts

export interface Category {
  id: string
  title: string
  image: string
}

export interface SearchResult {
  id: string
  title: string
  genre: string
  image: string
}

export const MOVIE_CATEGORIES: Category[] = [
  {
    id: "1",
    title: "Comedies",
    image: "https://images.unsplash.com/photo-1489599242320-c63226327b14?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    title: "Crime",
    image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    title: "Family",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    title: "Documentaries",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
  },
  {
    id: "5",
    title: "Dramas",
    image: "https://images.unsplash.com/photo-1489599242320-c63226327b14?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    title: "Fantasy",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  },
  {
    id: "7",
    title: "Holidays",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=300&fit=crop",
  },
  {
    id: "8",
    title: "Horror",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&h=300&fit=crop",
  },
  {
    id: "9",
    title: "Sci-Fi",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
  },
  {
    id: "10",
    title: "Thriller",
    image: "https://images.unsplash.com/photo-1489599242320-c63226327b14?w=400&h=300&fit=crop",
  },
  {
    id: "11",
    title: "Action",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=300&fit=crop",
  },
  {
    id: "12",
    title: "Adventure",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=300&fit=crop",
  },
  {
    id: "13",
    title: "Romance",
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=300&fit=crop",
  },
  {
    id: "14",
    title: "Mystery",
    image: "https://images.unsplash.com/photo-1529676468690-0476a5c71f0e?w=400&h=300&fit=crop",
  },
  {
    id: "15",
    title: "Musicals",
    image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=400&h=300&fit=crop",
  },
]

export const DUMMY_SEARCH_RESULTS: SearchResult[] = [
  {
    id: "1",
    title: "Timeless",
    genre: "Fantasy",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
  },
  {
    id: "2",
    title: "In Time",
    genre: "Sci-Fi",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=200&h=300&fit=crop",
  },
  {
    id: "3",
    title: "A Time To Kill",
    genre: "Crime",
    image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=200&h=300&fit=crop",
  },
  {
    id: "4",
    title: "The Time Machine",
    genre: "Sci-Fi",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=200&h=300&fit=crop",
  },
  {
    id: "5",
    title: "Time After Time",
    genre: "Romance",
    image: "https://images.unsplash.com/photo-1489599242320-c63226327b14?w=200&h=300&fit=crop",
  },
  {
    id: "6",
    title: "About Time",
    genre: "Comedy",
    image: "https://images.unsplash.com/photo-1489599242320-c63226327b14?w=200&h=300&fit=crop",
  },
  {
    id: "7",
    title: "Good Time",
    genre: "Crime",
    image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=200&h=300&fit=crop",
  },
  {
    id: "8",
    title: "The Time Traveler's Wife",
    genre: "Romance",
    image: "https://images.unsplash.com/photo-1489599242320-c63226327b14?w=200&h=300&fit=crop",
  },
  {
    id: "9",
    title: "Just In Time",
    genre: "Drama",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=200&h=300&fit=crop",
  },
  {
    id: "10",
    title: "Back In Time",
    genre: "Adventure",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200&h=300&fit=crop",
  },
  {
    id: "11",
    title: "Time Loop",
    genre: "Mystery",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=300&fit=crop",
  },
  {
    id: "12",
    title: "Beyond Time",
    genre: "Sci-Fi",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
  },
]
