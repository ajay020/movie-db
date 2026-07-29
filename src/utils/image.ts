const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function getImageUrl(path: string | null) {
  if (!path) {
    return "https://placehold.co/500x750?text=No+Image";
  }

  return `${IMAGE_BASE_URL}${path}`;
}
