import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../services/movieService";

export function useTrendingMovies() {
  return useQuery({
    queryKey: ["trending-movies"],
    queryFn: getTrendingMovies,
  });
}