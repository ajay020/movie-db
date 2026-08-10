import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getMoviesByGenre } from "../services/movieService";

export function useMoviesByGenre(genreId: number | null, page: number) {
  return useQuery({
    queryKey: ["movies-by-genre", genreId, page],
    queryFn: () => getMoviesByGenre(genreId, page),
    placeholderData: keepPreviousData,
  });
}
