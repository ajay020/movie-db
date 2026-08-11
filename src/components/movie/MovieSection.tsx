import MovieCard from "./MovieCard";
import type { Movie } from "../../types/movie";

type MovieSectionProps = {
  title: string;
  movies: Movie[];
};

const MovieSection = ({ title, movies }: MovieSectionProps) => {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold">{title}</h2>

      <div className="flex gap-5 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <div key={movie.id} className="w-44 shrink-0 sm:w-52">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
