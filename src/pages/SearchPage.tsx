import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import { useSearchMovies } from "../hooks/useSearchMovies";
import MovieCard from "../components/movie/MovieCard";
import { Search } from "lucide-react";
import SearchResults from "../components/search/SearchResults";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const debouncedQuery = useDebounce(query);

  const {
    data: movies = [],
    isLoading,
    error,
  } = useSearchMovies(debouncedQuery);

  const handleSearch = (value: string) => {
    if (value.trim()) {
      setSearchParams(value ? { query: value } : {}, { replace: true });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Search Movies</h1>

      <SearchBar value={query} onChange={handleSearch} />

      <div className="mt-8">
        <SearchResults
          query={query}
          movies={movies}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default SearchPage;
