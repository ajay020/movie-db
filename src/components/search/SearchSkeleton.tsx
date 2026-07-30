const SearchSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="aspect-2/3 rounded-xl bg-slate-800" />

          <div className="mt-3 h-5 rounded bg-slate-800" />

          <div className="mt-2 h-4 w-1/2 rounded bg-slate-800" />
        </div>
      ))}
    </div>
  );
};

export default SearchSkeleton;