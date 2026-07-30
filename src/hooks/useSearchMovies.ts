import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../services/movieService";

export function useSearchMovies(query: string) {
  return useQuery({
    queryKey: ["search-movies", query],
    queryFn: () => searchMovies(query),
    enabled: query.trim().length > 0,
  });
}
