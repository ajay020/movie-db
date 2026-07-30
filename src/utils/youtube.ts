export const getYoutubeThumbnail = (
  key: string,
  quality: "maxresdefault" | "hqdefault" = "maxresdefault",
) => {
  return `https://img.youtube.com/vi/${key}/${quality}.jpg`;
};
