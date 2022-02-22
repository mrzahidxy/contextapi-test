import React, {useState, useContext} from 'react'
import "../App.css"
import {MovieContext} from '../MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) =>{
        setName(e.target.value);
    }

    const updatePrice = (e) =>{
        setPrice(e.target.value);
    }

    const addMovie = (e) =>{
        e.preventDefault();
        setMovies (prevMovies=> [...prevMovies, {name:name, price:price }])
    }

  return (
    <div className='addMovie'>
        <form onSubmit={addMovie}>
            <input type='text'  value= {name} onChange={updateName} required/>
            <input type='text'  value= {price} onChange={updatePrice} required/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default AddMovie