import { useTrendingMovies } from "../hooks/useTrendingMovies";

const HomePage = () => {
  const { data, isLoading, error } = useTrendingMovies();

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>Something went wrong.</h2>;

  console.log(data);

  return (
    <div>
      <h1>Trending Movies</h1>

      {data.results.map((movie: any) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
};

export default HomePage;