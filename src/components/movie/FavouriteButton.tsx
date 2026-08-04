import { Heart } from "lucide-react";
import type { Movie } from "../../types/movie";
import { useFavoriteStore } from "../../store/favoriteStore";

type FavoriteButtonProps = {
  movie: Movie;
};

const FavoriteButton = ({ movie }: FavoriteButtonProps) => {
  const isFavorite = useFavoriteStore((state) => state.isFavorite(movie.id));

  const addFavorite = useFavoriteStore((state) => state.addFavorite);

  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={
        isFavorite
          ? `Remove ${movie.title} from favorites`
          : `Add ${movie.title} to favorites`
      }
      className={`flex h-10 w-10 items-center cursor-pointer justify-center rounded-full backdrop-blur-sm transition ${
        isFavorite
          ? "bg-red-600 text-white"
          : "bg-slate-950/70 text-white hover:bg-red-600"
      }`}
    >
      <Heart size={20} className={isFavorite ? "fill-current" : ""} />
    </button>
  );
};

export default FavoriteButton;
