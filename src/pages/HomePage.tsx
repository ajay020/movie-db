import MovieSection from "../components/movie/MovieSection";
import { useMovies } from "../hooks/useMovies";

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

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <section>
        {popularError && <p>Unable to load popular movies.</p>}

        {popularLoading ? (
          <p>Loading popular movies...</p>
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
          <p>Loading now playing movies...</p>
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
          <p>Loading top rated movies...</p>
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
