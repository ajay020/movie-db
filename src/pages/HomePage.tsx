import HeroMovie from "../components/movie/HeroMovie";
import MovieSection from "../components/movie/MovieSection";
import { useMovies } from "../hooks/useMovies";
import HeroMovieSkeleton from "../components/movie/HeroMovieSkeleton";
import MovieSectionSkeleton from "../components/movie/MovieSectionSkeleton";

const HomePage = () => {
  const {
    data: popularData,
    isLoading: popularLoading,
    error: popularError,
  } = useMovies("popular");

  const {
    data: nowPlayingData,
    isLoading: nowPlayingLoading,
    error: nowPlayingError,
  } = useMovies("now-playing");

  const {
    data: topRatedData,
    isLoading: topRatedLoading,
    error: topRatedError,
  } = useMovies("top-rated");

  const featuredMovie = popularData?.results[0];

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {popularLoading ? (
        <HeroMovieSkeleton />
      ) : (
        featuredMovie && <HeroMovie movie={featuredMovie} />
      )}

      <section>
        {popularError && <p>Unable to load popular movies.</p>}

        {popularLoading ? (
          <MovieSectionSkeleton />
        ) : (
          <MovieSection
            title="🔥 Popular Movies"
            movies={popularData?.results ?? []}
          />
        )}
      </section>

      <section className="mt-14">
        {nowPlayingError && <p>Unable to load now playing movies.</p>}

        {nowPlayingLoading ? (
          <MovieSectionSkeleton />
        ) : (
          <MovieSection
            title="🎬 Now Playing"
            movies={nowPlayingData?.results ?? []}
          />
        )}
      </section>

      <section className="mt-14">
        {topRatedError && <p>Unable to load top rated movies.</p>}

        {topRatedLoading ? (
          <MovieSectionSkeleton />
        ) : (
          <MovieSection
            title="⭐ Top Rated"
            movies={topRatedData?.results ?? []}
          />
        )}
      </section>
    </main>
  );
};

export default HomePage;
