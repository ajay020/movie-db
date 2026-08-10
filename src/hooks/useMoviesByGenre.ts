import { useQuery } from "@tanstack/react-query";
import { getMoviesByGenre } from "../services/movieService";

export function useMoviesByGenre(genreId: number | null) {
  return useQuery({
    queryKey: ["movies-by-genre", genreId],
    queryFn: () => getMoviesByGenre(genreId),
  });
}
