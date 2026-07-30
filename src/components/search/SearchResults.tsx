import { Search } from "lucide-react";
import type { Movie } from "../../types/movie";
import MovieCard from "../movie/MovieCard";
import SearchSkeleton from "./SearchSkeleton";

type SearchResultsProps = {
  query: string;
  movies: Movie[];
  isLoading: boolean;
  error: Error | null;
};

const SearchResults = ({
  query,
  movies,
  isLoading,
  error,
}: SearchResultsProps) => {
  if (error) {
    return (
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold">Something went wrong</h2>

        <p className="mt-2 text-slate-400">Please try again later.</p>
      </div>
    );
  }

  if (!query) {
    return (
      <div className="mt-24 text-center">
        <Search size={80} className="mx-auto text-slate-700" />

        <h2 className="mt-6 text-3xl font-bold">Search for a movie</h2>

        <p className="mt-2 text-slate-400">
          Discover millions of movies from TMDB.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <SearchSkeleton />;
  }

  if (movies.length === 0) {
    return (
      <div className="mt-20 text-center">
        <Search size={70} className="mx-auto text-slate-600" />

        <h2 className="mt-5 text-2xl font-semibold">No movies found</h2>

        <p className="mt-2 text-slate-400">Try another movie title.</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-semibold">
        Search results for
        <span className="ml-2 text-red-500">"{query}"</span>
      </h2>

      <p className="mt-2 mb-6 text-slate-400">{movies.length} movies found</p>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
