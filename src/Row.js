import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const imageurl = "https://image.tmdb.org/t/p/original/";
let name = "";
const Row = ({ title, fetchUrl, islarge }) => {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleclick = (movie) => {
    name = movie?.orginal_name || movie?.name || movie?.title;

    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(name || "")
        .then((url) => {
          const urlid = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlid.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleclick(movie)}
              className={`row_poster ${islarge && "row_posterLarge"}`}
              src={`${imageurl}${
                islarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.original_name}
              srcset=""
            />
          ))}
        </div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
};

export default Row;
