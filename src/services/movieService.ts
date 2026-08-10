import { api } from "../api/axios";
import type { Genre } from "../types/genre";
import type { GenreResponse } from "../types/genre";
import type { Movie, MovieResponse } from "../types/movie";
import type { MovieCredits } from "../types/movie-credits";
import type { MovieDetails } from "../types/movie-details";
import type { MovieVideo, MovieVideosResponse } from "../types/movie-video";

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

export const getMovieCredits = async (
  movieId: number,
): Promise<MovieCredits> => {
  const response = await api.get<MovieCredits>(`/movie/${movieId}/credits`);

  return response.data;
};

export const getSimilarMovies = async (movieId: number): Promise<Movie[]> => {
  const response = await api.get<MovieResponse>(`/movie/${movieId}/similar`);

  return response.data.results;
};

export const getMovieVideos = async (
  movieId: number,
): Promise<MovieVideo[]> => {
  const response = await api.get<MovieVideosResponse>(
    `/movie/${movieId}/videos`,
  );

  return response.data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await api.get<MovieResponse>("/search/movie", {
    params: {
      query,
    },
  });

  return response.data.results;
};

export const getGenres = async (): Promise<Genre[]> => {
  const response = await api.get<GenreResponse>("/genre/movie/list");

  return response.data.genres;
};

export const getMoviesByGenre = async (
  genreId: number | null,
  page: number = 1,
): Promise<MovieResponse> => {
  const response = await api.get<MovieResponse>("/discover/movie", {
    params: {
      ...(genreId && { with_genres: genreId }),
      page,
    },
  });

  return response.data;
};
