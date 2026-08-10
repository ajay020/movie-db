import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import SearchPage from "../pages/SearchPage";
import MainLayout from "../layouts/MainLayout";
import FavoritePage from "../pages/FavouritePage";
import GenrePage from "../pages/GenrePage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/favorites",
        element: <FavoritePage />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetailsPage />,
      },
      {
        path: "/genres",
        element: <GenrePage />,
      },
    ],
  },
]);
