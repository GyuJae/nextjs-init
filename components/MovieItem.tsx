import { useRouter } from "next/router";
import React from "react";
import { IMovie } from "../types/movie.type";
import { IMAGE_URL } from "../types/utils";

const MovieItem: React.FC<IMovie> = (movie) => {
  const router = useRouter();
  const onClick = ({ id, title }: { id: number; title: string }) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div>
      <div
        key={movie.id}
        className="Movie"
        onClick={() => onClick({ id: movie.id, title: movie.original_title })}
      >
        <img src={IMAGE_URL(movie.poster_path)} />
        <h4>{movie.title}</h4>
      </div>
      <style jsx>{`
        .Movie {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        img {
          width: 140px;
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
      `}</style>
    </div>
  );
};

export default MovieItem;
