import React from "react";
import '../App.css';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <h3>{movie.name}</h3>
      <p>Price: {movie.price} $</p>
    </div>
  );
};

export default Movie;
