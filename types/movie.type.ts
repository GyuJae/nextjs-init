export interface IMovie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface IMovieResult {
  page: number;
  results: IMovie[];
  total_results: number;
  total_pages: number;
}

type genre = {
  id: number;
  name: string;
};

type production_company = {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
};

export interface IMovieDetail {
  id: number;
  adult: boolean;
  backdrop_path?: string;
  genres: genre[];
  overview: string;
  poster_path: string;
  release_date?: string;
  runtime?: string;
  original_title: string;
  production_companies: production_company[];
  homepage?: string;
}
