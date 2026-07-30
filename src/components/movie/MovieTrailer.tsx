import type { MovieVideo } from "../../types/movie-video";
import { getTrailer } from "../../utils/getTrailer";

type MovieTrailerProps = {
  videos: MovieVideo[];
};

const MovieTrailer = ({ videos }: MovieTrailerProps) => {
  const trailer = getTrailer(videos);

  if (!trailer) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="mb-5 text-2xl font-bold">Trailer</h2>

      <div className="aspect-video overflow-hidden rounded-xl">
        <iframe
          className="h-full w-full"

          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          allowFullScreen
          
        />
      </div>
    </section>
  );
};

export default MovieTrailer;
