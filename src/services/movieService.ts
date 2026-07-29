import { api } from "../api/axios";
import type { Movie, MovieResponse } from "../types/movie";

export const getTrendingMovies = async (): Promise<Movie[]> => {
  const response = await api.get<MovieResponse>("/trending/movie/week");
  return response.data.results;
};