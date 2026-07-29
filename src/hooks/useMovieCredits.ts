import { useQuery } from "@tanstack/react-query";
import { getMovieCredits } from "../services/movieService";

export function useMovieCredits(movieId?: string) {
  return useQuery({
    queryKey: ["movie-credits", movieId],
    queryFn: () => getMovieCredits(Number(movieId)),
    enabled: !!movieId,
  });
}
