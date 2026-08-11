// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const getImageUrl = (path: string | null, size = "w500") => {
  if (!path) {
    // return "/placeholder-movie.jpg";
    return "https://placehold.co/500x750?text=No+Image";
  }

  return `${IMAGE_BASE_URL}/${size}${path}`;
};
