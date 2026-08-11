import MovieCardSkeleton from "../movie/MovieCardSkeleton";

const SearchSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <MovieCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default SearchSkeleton;
