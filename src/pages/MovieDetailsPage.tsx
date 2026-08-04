import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { getImageUrl } from "../utils/image";
import Badge from "../components/Badge";
import { useMovieCredits } from "../hooks/useMovieCredits";
import CastList from "../components/movie/CastList";
import { useSimilarMovies } from "../hooks/useSimilarMovies";
import SimilarMovies from "../components/movie/SimilarMovies";
import { useMovieVideos } from "../hooks/useMovieVideos";
import MovieTrailer from "../components/movie/MovieTrailer";
import MovieStats from "../components/MovieStats";
import FavoriteButton from "../components/movie/FavouriteButton";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const { data: movie, isLoading, error } = useMovieDetails(id);
  const { data: credits } = useMovieCredits(id);
  const { data: similarMovies } = useSimilarMovies(id);
  const { data: videos } = useMovieVideos(id);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl p-8">
        <h2 className="text-xl">Loading...</h2>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="mx-auto max-w-7xl p-8">
        <h2>Movie not found.</h2>
      </div>
    );
  }

  return (
    <div>
      {/* Backdrop */}
      <div className="relative h-[350px]">
        <img
          src={getImageUrl(movie.backdrop_path)}
          alt={movie.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-10">
        <div className="-mt-36 grid gap-10 md:grid-cols-[300px_1fr]">
          {/* Poster */}
          <img
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            className="w-full rounded-xl shadow-2xl"
          />

          {/* Details */}
          <div className="pt-36 md:pt-40">
            <h1 className="text-4xl font-bold">{movie.title}</h1>

            {movie.tagline && (
              <p className="mt-2 italic text-slate-400">"{movie.tagline}"</p>
            )}

            <div className="mt-5 flex flex-wrap gap-5 text-lg">
              <span>⭐ {movie.vote_average.toFixed(1)}</span>

              <span>{movie.vote_count.toLocaleString()} votes</span>

              <span>{movie.runtime} min</span>

              <span>{movie.release_date}</span>
            </div>

            {/* Favorite Button */}
            <div className="mt-6">
              <FavoriteButton movie={movie} />
            </div>

            {/* Genres */}
            <div className="mt-6 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <Badge name={genre.name} key={genre.id} />
              ))}
            </div>

            {/* Overview */}
            <div className="mt-8">
              <h2 className="mb-3 text-2xl font-semibold">Overview</h2>

              <p className="leading-8 text-slate-300">{movie.overview}</p>
            </div>

            {/* Stats */}
            <MovieStats movie={movie} />

            {/* Homepage */}
            {movie.homepage && (
              <a
                href={movie.homepage}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
              >
                Official Website
              </a>
            )}
          </div>
        </div>

        {/* Trailer  */}
        {videos && <MovieTrailer videos={videos} />}

        {/* cast  */}
        {credits && <CastList cast={credits.cast} />}

        {/* Production Companies */}
        <section className="mt-16">
          <h2 className="mb-5 text-2xl font-bold">Production Companies</h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {movie.production_companies.map((company) => (
              <div key={company.id} className="rounded-lg bg-slate-900 p-4">
                <h3 className="font-semibold">{company.name}</h3>

                <p className="mt-1 text-sm text-slate-400">
                  {company.origin_country}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Similar movies     */}
        {similarMovies && <SimilarMovies movies={similarMovies} />}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
