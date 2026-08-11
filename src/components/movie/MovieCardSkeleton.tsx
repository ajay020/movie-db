const MovieCardSkeleton = () => {
  return (
    <div className="w-44 shrink-0 overflow-hidden rounded-lg bg-slate-800 sm:w-52">
      <div className="h-80 w-full animate-pulse bg-slate-700" />

      <div className="space-y-3 p-4">
        <div className="h-5 w-3/4 animate-pulse rounded bg-slate-700" />

        <div className="flex justify-between">
          <div className="h-4 w-12 animate-pulse rounded bg-slate-700" />
          <div className="h-4 w-10 animate-pulse rounded bg-slate-700" />
        </div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
