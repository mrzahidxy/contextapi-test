import React, {useContext} from 'react'
import '../App.css';
import { MovieContext } from '../MovieContext';


const Navbar = () => {
  const [movies, setMovies] = useContext(MovieContext);


  return (
    <div className='navbar'>
        <h3>Zahid </h3>
        <p> Movie list: {movies.length}</p>
    </div>
  )
}

export default Navbar