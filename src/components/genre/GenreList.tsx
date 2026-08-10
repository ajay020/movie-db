import type { Genre } from "../../types/genre";

type GenreListProps = {
  genres: Genre[];
  selectedGenre: number | null;
  onSelect: (genreId: number | null) => void;
};

const GenreList = ({ genres, selectedGenre, onSelect }: GenreListProps) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin">
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
          selectedGenre === null
            ? "bg-red-600 text-white"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }`}
      >
        All
      </button>

      {genres.map((genre) => {
        const isSelected = selectedGenre === genre.id;

        return (
          <button
            key={genre.id}
            type="button"
            onClick={() => onSelect(genre.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              isSelected
                ? "bg-red-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {genre.name}
          </button>
        );
      })}
    </div>
  );
};

export default GenreList;
