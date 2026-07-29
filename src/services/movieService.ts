import { api } from "../api/axios";
import type { Movie, MovieResponse } from "../types/movie";
import type { MovieDetails } from "../types/movie-details";

export const getTrendingMovies = async (): Promise<Movie[]> => {
  const response = await api.get<MovieResponse>("/trending/movie/week");
  return response.data.results;
};

export const getMovieDetails = async (
  movieId: number,
): Promise<MovieDetails> => {
  const response = await api.get<MovieDetails>(`/movie/${movieId}`);
  return response.data;
};
