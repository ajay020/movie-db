import { Search, X } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={20}
      />

      <input
        autoFocus
        type="text"
        placeholder="Search movies..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border
         border-slate-700 bg-slate-900 py-3 pl-12 pr-12
          text-white outline-none transition-all focus:border-red-500
           focus:ring-2 focus:ring-red-500/30"
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 transition bg-slate-400 hover:bg-slate-300"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
