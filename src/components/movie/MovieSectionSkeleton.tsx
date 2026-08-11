import MovieCardSkeleton from "./MovieCardSkeleton";

type MovieSectionSkeletonProps = {
  titleWidth?: string;
};

const MovieSectionSkeleton = ({
  titleWidth = "w-48",
}: MovieSectionSkeletonProps) => {
  return (
    <section>
      <div
        className={`mb-5 h-8 ${titleWidth} animate-pulse rounded bg-slate-800`}
      />

      <div className="flex gap-5 overflow-hidden pb-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

export default MovieSectionSkeleton;
