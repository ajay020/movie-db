import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Movie } from "../types/movie";

type FavoriteState = {
  favorites: Movie[];

  addFavorite: (movie: Movie) => void;
  removeFavorite: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
};

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (movie) =>
        set((state) => ({
          favorites: [...state.favorites, movie],
        })),

      removeFavorite: (movieId) =>
        set((state) => ({
          favorites: state.favorites.filter((movie) => movie.id !== movieId),
        })),

      isFavorite: (movieId) =>
        get().favorites.some((movie) => movie.id === movieId),
    }),
    {
      name: "movie-favorites",
    },
  ),
);
