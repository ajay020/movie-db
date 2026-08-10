import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/movie/MovieCard";
import { useGenres } from "../hooks/useGenres";
import { useMoviesByGenre } from "../hooks/useMoviesByGenre";
import GenreList from "../components/genre/genreList";

const GenrePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const genreParam = searchParams.get("genre");

  const selectedGenre = genreParam ? Number(genreParam) : null;

  const {
    data: genres = [],
    isLoading: genresLoading,
    error: genresError,
  } = useGenres();

  const {
    data: movieResponse,
    isLoading: moviesLoading,
    error: moviesError,
  } = useMoviesByGenre(selectedGenre);

  const movies = movieResponse?.results ?? [];

  const handleGenreSelect = (genreId: number | null) => {
    if (genreId === null) {
      setSearchParams({});
    } else {
      setSearchParams({
        genre: String(genreId),
      });
    }
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
        {moviesLoading && <p>Loading movies...</p>}

        {moviesError && <p>Unable to load movies.</p>}

        {!moviesLoading && movies.length === 0 && <p>No movies found.</p>}

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
