import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import MovieCard from "../components/movie/MovieCard";
import { useFavoriteStore } from "../store/favoriteStore";

const FavoritesPage = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <Heart size={80} className="text-slate-700" />

          <h1 className="mt-6 text-3xl font-bold">No favorites yet</h1>

          <p className="mt-3 max-w-md text-slate-400">
            Movies you add to your favorites will appear here. Start exploring
            and save the ones you want to watch later.
          </p>

          <Link
            to="/"
            className="mt-6 rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
          >
            Explore Movies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex items-center gap-3">
        <Heart size={28} className="fill-red-500 text-red-500" />

        <h1 className="text-3xl font-bold">My Favorites</h1>

        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
          {favorites.length}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
