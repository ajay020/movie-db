import { useQuery } from "@tanstack/react-query";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "../services/movieService";

type MovieCategory = "popular" | "now-playing" | "top-rated";

const movieQueries = {
  popular: getPopularMovies,
  "now-playing": getNowPlayingMovies,
  "top-rated": getTopRatedMovies,
};

export function useMovies(category: MovieCategory) {
  return useQuery({
    queryKey: ["movies", category],
    queryFn: movieQueries[category],
  });
}
