import React, { useContext} from "react";
import "../App.css"
import Movie from "./Movie";
import { MovieContext } from "../MovieContext";

const Movielist = () => {
    const [movies, setMovies]= useContext(MovieContext);
  
  return (
    <div className="movieList">
      {movies.map((movie) => (
        <Movie movie={movie} key={Math.random()} />
      ))}
    </div>
  );
};

export default Movielist;
