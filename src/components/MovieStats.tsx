import type { MovieDetails } from "../types/movie-details";

function MovieStats({ movie }: { movie: MovieDetails }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      <div className="rounded-lg bg-slate-900 p-5">
        <h3 className="text-sm text-slate-400">Budget</h3>

        <p className="mt-2 text-2xl font-bold">
          ${movie.budget ? movie.budget.toLocaleString() : "N/A"}
        </p>
      </div>

      <div className="rounded-lg bg-slate-900 p-5">
        <h3 className="text-sm text-slate-400">Revenue</h3>

        <p className="mt-2 text-2xl font-bold">
          ${movie.revenue ? movie.revenue.toLocaleString() : "N/A"}
        </p>
      </div>
    </div>
  );
}

export default MovieStats;
