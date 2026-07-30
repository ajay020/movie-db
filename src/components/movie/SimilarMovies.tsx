import type { Movie } from "../../types/movie";
import MovieCard from "./MovieCard";

type SimilarMoviesProps = {
  movies: Movie[];
};

const SimilarMovies = ({ movies }: SimilarMoviesProps) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="mb-5 text-2xl font-bold">Similar Movies</h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default SimilarMovies;
