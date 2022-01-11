import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Seo from "../../components/Seo";
import { IMovieDetail } from "../../types/movie.type";
import { IMAGE_URL } from "../../types/utils";

const getMovieDetail = (id: string) =>
  fetch(`/api/movies/${id}`)
    .then((res) => res.json())
    .catch((e) => alert(e));

const Detail: NextPage = () => {
  const {
    query: { params },
  } = useRouter();
  const [title, id] = params as string[];
  const { isLoading, data } = useQuery<IMovieDetail>(["movie", id], () =>
    getMovieDetail(id)
  );
  if (isLoading) {
    return (
      <div className="Movie">
        <Seo title={title} />
        <h4>{title || "Loading..."}</h4>
        <h5>loading...</h5>
      </div>
    );
  }
  return (
    <div className="Container">
      <Seo title={title} />
      <div className="Movie">
        <img src={IMAGE_URL(data?.poster_path as string)} />
        <div className="Movie_Content">
          <h4>{title || "Loading..."}</h4>
          <h3>{data?.overview}</h3>
        </div>
      </div>
      <style jsx>{`
        .Container {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.9),
              rgba(0, 0, 0, 0.3)
            ),
            url(${IMAGE_URL(data?.backdrop_path)});
          background-repeat: no-repeat;
          object-fit: contain;
          height: 100vh;
          margin: 0px auto;
        }
        .Movie {
          max-width: 1100px;
          margin: 10px auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 10px 0px;
        }
        img {
          width: 200px;
          height: 300px;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .Movie_Content {
          max-width: 650px;
        }
        .Movie_Content h4 {
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default Detail;
