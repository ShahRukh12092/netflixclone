import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./banner.css";

const Banner = () => {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(requests[0].link);

      setmovie(
        resp.data.results[
          Math.floor(Math.random() * resp.data.results.length - 1)
        ]
      );
      return resp;
    }

    fetchData();
  }, []);

  const backimage = {
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    // backgroundPosition: "center center",
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header className="banner" style={backimage}>
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.orginal_name || movie?.name || movie?.title}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 190)}</h1>
      </div>
      <div className="banner_fadebottom"></div>
    </header>
  );
};

export default Banner;
