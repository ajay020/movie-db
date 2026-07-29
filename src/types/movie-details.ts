export interface MovieDetails {
  id: number;
  title: string;
  overview: string;

  poster_path: string;
  backdrop_path: string;

  vote_average: number;
  vote_count: number;

  release_date: string;

  tagline: string;

  runtime: number;

  budget: number;
  revenue: number;

  homepage: string;

  genres: Genre[];

  production_companies: ProductionCompany[];
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}
