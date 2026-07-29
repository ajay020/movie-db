import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";
import { getImageUrl } from "../utils/image";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="h-80 w-full object-cover"
        />

        <div className="p-4">
          <h2 className="line-clamp-2 text-lg font-semibold">{movie.title}</h2>

          <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
            <span>⭐ {movie.vote_average.toFixed(1)}</span>

            <span>{movie.release_date.slice(0, 4)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
