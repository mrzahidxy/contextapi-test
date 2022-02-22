import React, { useState, createContext } from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
          name: "Demon Slayer",
          price: 10,
          avality: "Availeable",
          id: 1,
        },
        {
          name: "Jujutsu Kaisen",
          price: 10,
          avality: "Availeable",
          id: 2,
        },
        {
          name: "Attack on Titan",
          price: 10,
          avality: "Unavaileable",
          id: 3,
        },
      ]);
    
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
    </MovieContext.Provider>
  )
}

