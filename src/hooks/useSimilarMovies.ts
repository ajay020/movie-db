import { useQuery } from "@tanstack/react-query";
import { getSimilarMovies } from "../services/movieService";

export function useSimilarMovies(movieId?: string) {
  return useQuery({
    queryKey: ["similar-movies", movieId],
    queryFn: () => getSimilarMovies(Number(movieId)),
    enabled: !!movieId,
  });
}
