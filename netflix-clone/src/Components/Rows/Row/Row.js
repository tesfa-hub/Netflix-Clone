import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "../../../Movies/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/origional";

//   useEffect(() => {
//     (async () => {
//       console.log(fetchUrl);
//       const request = await axios.get(fetchUrl);
//       // catch(error){}
//       console.log(request);
//       setMovies(request.data.results);
//     })();
//   }, [fetchUrl]);

useEffect(() => {
    const fetchData=async()=>{
        const response=await axios.get(fetchUrl)
        setMovies(response.data.results);
        return response
    }
    fetchData()
},[])
// console.log(movies);



  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.origional_name).then(
        (url) => {
          const urlparams = new URLSearchParams(new URL(url).serach);
          setMovies(urlparams.get("v"));
        }
      );
    }
  };
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies?.map((movie, index) => {
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster${isLargeRow && "row_posterLarge"}`}
          />;
        })}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
