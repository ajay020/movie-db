import MovieCard from "../components/movie/MovieCard";
import { useTrendingMovies } from "../hooks/useTrendingMovies";

const HomePage = () => {
  const { data: movies, isLoading, error } = useTrendingMovies();

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>Something went wrong.</h2>;

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Trending Movies</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
