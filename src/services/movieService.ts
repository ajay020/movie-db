import { api } from "../api/axios";
import type { MovieResponse } from "../types/movie";

export const getTrendingMovies = async (): Promise<MovieResponse> => {
  const response = await api.get<MovieResponse>("/trending/movie/week");
  return response.data;
};