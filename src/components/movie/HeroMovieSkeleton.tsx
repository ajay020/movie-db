const HeroMovieSkeleton = () => {
  return (
    <section className="relative mb-14 min-h-[500px] overflow-hidden rounded-2xl bg-slate-900">
      <div className="absolute inset-0 animate-pulse bg-slate-800" />

      <div className="relative flex min-h-[500px] max-w-2xl flex-col justify-end p-8 md:p-12">
        <div className="mb-4 h-5 w-32 animate-pulse rounded bg-slate-700" />

        <div className="h-12 w-3/4 animate-pulse rounded bg-slate-700 md:h-16" />

        <div className="mt-5 space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-slate-700" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-slate-700" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-slate-700" />
        </div>

        <div className="mt-6 h-12 w-36 animate-pulse rounded-lg bg-slate-700" />
      </div>
    </section>
  );
};

export default HeroMovieSkeleton;