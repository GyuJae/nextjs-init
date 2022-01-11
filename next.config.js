/** @type {import('next').NextConfig} */
const API_KEY = "962cebc1820ada99a807125b7f1fdcbf";

module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/movies/popular",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/upcoming",
        destination: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/now_playing",
        destination: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
      {
        source: "/api/tv/popular",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/tv/latest",
        destination: `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}`,
      },
      {
        source: "/api/tv/top_rated",
        destination: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
      },
    ];
  },
};
