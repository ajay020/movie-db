import { Link } from "react-router-dom";
import { Play, Star } from "lucide-react";
import type { Movie } from "../../types/movie";
import { getImageUrl } from "../../utils/image";

type HeroMovieProps = {
  movie: Movie;
};

const HeroMovie = ({ movie }: HeroMovieProps) => {
  return (
    <section className="relative mb-14 min-h-[500px] overflow-hidden rounded-2xl">
      {/* Background */}
      <img
        src={getImageUrl(movie.backdrop_path, "original")}
        alt={movie.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative flex min-h-[500px] max-w-2xl flex-col justify-end p-8 md:p-12">
        <div className="mb-3 flex items-center gap-4 text-sm text-slate-300">
          <span className="flex items-center gap-1 text-yellow-400">
            <Star size={17} fill="currentColor" />
            {movie.vote_average.toFixed(1)}
          </span>

          {movie.release_date && <span>{movie.release_date.slice(0, 4)}</span>}
        </div>

        <h1 className="text-4xl font-bold text-white md:text-6xl">
          {movie.title}
        </h1>

        {movie.overview && (
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-300 md:text-base">
            {movie.overview}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={`/movies/${movie.id}`}
            className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            <Play size={18} fill="currentColor" />
            More Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroMovie;
