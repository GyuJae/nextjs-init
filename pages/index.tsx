import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useQuery } from "react-query";
import HeaderTitle from "../components/HeaderTitle";
import Seo from "../components/Seo";
import { IMovieResult } from "../types/movie.type";
import { IMAGE_URL } from "../types/utils";

const getPopular = () =>
  fetch("/api/movies/popular")
    .then((res) => res.json())
    .catch((e) => alert(e));

const getUpcoming = () =>
  fetch("/api/movies/upcoming")
    .then((res) => res.json())
    .catch((e) => alert(e));

const getNowPlaying = () =>
  fetch("/api/movies/now_playing")
    .then((res) => res.json())
    .catch((e) => alert(e));

const Home: NextPage = () => {
  const { isLoading: popularLoading, data: popularData } =
    useQuery<IMovieResult>(["movies", "popular"], getPopular);

  const { isLoading: upcomingLoading, data: upcomingData } =
    useQuery<IMovieResult>(["movies", "upcoming"], getUpcoming);

  const { isLoading: nowPlayingLoading, data: nowPlayingData } =
    useQuery<IMovieResult>(["movies", "nowplaying"], getNowPlaying);

  const loading = popularLoading || upcomingLoading || nowPlayingLoading;

  return (
    <div>
      <Seo title={"Movie"} />
      <HeaderTitle title={"Movie"} />
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className="LayoutMovie">
            <h2>Popular</h2>
            <div className="MovieContainer">
              {popularData?.results.map((movie) => (
                <div key={movie.id} className="Movie">
                  <img src={IMAGE_URL(movie.poster_path)} />
                  <h4>{movie.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="LayoutMovie">
            <h2>Upcoming</h2>
            <div className="MovieContainer">
              {upcomingData?.results.map((movie) => (
                <div key={movie.id} className="Movie">
                  <img src={IMAGE_URL(movie.poster_path)} />
                  <h4>{movie.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="LayoutMovie">
            <h2>Now Playing</h2>
            <div className="MovieContainer">
              {nowPlayingData?.results.map((movie) => (
                <div key={movie.id} className="Movie">
                  <img src={IMAGE_URL(movie.poster_path)} />
                  <h4>{movie.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <style jsx>
        {`
          .LayoutMovie {
            max-width: 1400px;
            margin: 5px auto;
          }
          h2 {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
            padding: 10px 0px;
          }
          .MovieContainer {
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: repeat(auto-fill, 180px);
            gap: 8px;
            margin: 0px auto;
          }
          .Movie {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
          img {
            width: 150px;
            height: 185px;
            border-radius: 5px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .Movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          h4 {
            font-size: 12px;
            text-align: center;
            margin-top: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
