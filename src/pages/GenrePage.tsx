import { useSearchParams } from "react-router-dom";
import GenreList from "../components/genre/GenreList";
import MovieCard from "../components/movie/MovieCard";
import { useGenres } from "../hooks/useGenres";
import { useMoviesByGenre } from "../hooks/useMoviesByGenre";
import Pagination from "../components/common/Pagination";

const GenrePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const genreParam = searchParams.get("genre");
  const pageParam = searchParams.get("page");

  const selectedGenre = genreParam ? Number(genreParam) : null;

  const currentPage = pageParam ? Number(pageParam) : 1;

  const {
    data: genres = [],
    isLoading: genresLoading,
    error: genresError,
  } = useGenres();

  const {
    data: movieResponse,
    isLoading: moviesLoading,
    isFetching: moviesFetching,
    error: moviesError,
  } = useMoviesByGenre(selectedGenre, currentPage);

  const movies = movieResponse?.results ?? [];

  const totalPages = movieResponse?.total_pages ?? 0;

  const handleGenreSelect = (genreId: number | null) => {
    setSearchParams(
      genreId ? { genre: String(genreId), page: "1" } : { page: "1" },
    );
  };

  const handlePageChange = (page: number) => {
    setSearchParams({
      ...(selectedGenre && {
        genre: String(selectedGenre),
      }),
      page: String(page),
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (genresLoading) {
    return <p>Loading genres...</p>;
  }

  if (genresError) {
    return <p>Unable to load genres.</p>;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">Browse Movies</h1>

      <GenreList
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />

      <div className="mt-10">
        {moviesLoading && <p className="text-slate-400">Loading movies...</p>}

        {moviesError && <p>Unable to load movies.</p>}

        {!moviesLoading && movies.length === 0 && <p>No movies found.</p>}

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {moviesFetching && !moviesLoading && (
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-600 border-t-red-500" />
            Loading new movies...
          </div>
        )}

        {/* Pagination */}
        {!moviesLoading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default GenrePage;
