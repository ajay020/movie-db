import { Film, Heart, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      return;
    }

    navigate(`/search?query=${encodeURIComponent(query)}`);

    setSearchQuery("");
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2 text-xl font-bold text-white"
        >
          <Film className="text-red-500" size={26} />

          <span>
            Movie<span className="text-red-500">DB</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive ? "text-red-500" : "text-slate-300 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive ? "text-red-500" : "text-slate-300 hover:text-white"
              }`
            }
          >
            Search
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `flex items-center gap-1.5 text-sm font-medium transition ${
                isActive ? "text-red-500" : "text-slate-300 hover:text-white"
              }`
            }
          >
            <Heart size={17} />
            Favorites
          </NavLink>
        </nav>

        {/* Desktop Search */}
        <form
          onSubmit={handleSearch}
          className="ml-auto hidden w-full max-w-sm md:block"
        >
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies..."
              className="w-full rounded-lg border border-slate-700 bg-slate-900 py-2 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
          </div>
        </form>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="ml-auto rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive ? "text-red-500" : "text-slate-300"
                }`
              }
            >
              <Film size={18} />
              Home
            </NavLink>

            <NavLink
              to="/search"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive ? "text-red-500" : "text-slate-300"
                }`
              }
            >
              <Search size={18} />
              Search
            </NavLink>

            <NavLink
              to="/favorites"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive ? "text-red-500" : "text-slate-300"
                }`
              }
            >
              <Heart size={18} />
              Favorites
            </NavLink>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="pt-2">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search movies..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 py-2.5 pl-10 pr-4 text-sm text-white outline-none focus:border-red-500"
                />
              </div>
            </form>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
