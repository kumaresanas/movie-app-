import React from 'react'
import {useSelector} from "react-redux";
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () =>{
    const movies = useSelector(getAllMovies);
   // console.log("***",movies);
    let renderMovies = "";
    console.log(movies.Response === "True")
    renderMovies = 
      movies.Response === "True" ? (
        movies.Search.map((movie,index) => (
          <MovieCard key={index} data={movie} />
        ))
      ) : (
        <div className='movies-error'>
          <h3>{movies.error}</h3>
        </div>
      ); 
    
    
   
 return(
  <div className='movie-wrapper'> 
    <div className='movie-list'>
      <h1>Moviesdd</h1>

    <div className='movie-container'>{renderMovies}</div>
    </div>
  </div> )
}
export default MovieListing;