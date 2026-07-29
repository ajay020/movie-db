import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/movieService";

export function useMovieDetails(movieId?: string) {
  return useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getMovieDetails(Number(movieId)),
    enabled: !!movieId,
  });
}
