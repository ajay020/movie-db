import type { MovieVideo } from "../types/movie-video";

export function getTrailer(videos: MovieVideo[]) {
  return (
    videos.find(
      (video) =>
        video.site === "YouTube" && video.type === "Trailer" && video.official,
    ) ??
    videos.find(
      (video) => video.site === "YouTube" && video.type === "Trailer",
    ) ??
    null
  );
}
