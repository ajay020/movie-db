import { useState } from "react";
import type { MovieVideo } from "../../types/movie-video";
import { getTrailer } from "../../utils/getTrailer";
import { getYoutubeThumbnail } from "../../utils/youtube";
import { Play } from "lucide-react";

type MovieTrailerProps = {
  videos: MovieVideo[];
};

const MovieTrailer = ({ videos }: MovieTrailerProps) => {
  const trailer = getTrailer(videos);

  const [isPlaying, setIsPlaying] = useState(false);

  if (!trailer) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="mb-5 text-2xl font-bold">Trailer</h2>

      <div className="overflow-hidden rounded-xl shadow-lg">
        {!isPlaying ? (
          <div
            className="group relative cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={getYoutubeThumbnail(trailer.key)}
              alt={trailer.name}
              className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-4xl text-white shadow-xl transition group-hover:scale-110">
                <Play className="h-10 w-10 fill-white text-white ml-1" />
              </div>
            </div>
          </div>
        ) : (
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&rel=0`}
              title={trailer.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieTrailer;
