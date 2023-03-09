import React from 'react'
import {useSelector} from "react-redux";
import { getAllMovies ,getAllShows} from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () =>{
    const movies = useSelector(getAllMovies);
    const shows =useSelector(getAllShows);
   // console.log("***",movies);
    let renderMovies = "";
    let renderShows = "";
    //console.log(movies.Response === "True")
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
    
      renderShows = 
      shows.Response === "True" ? (
        shows.Search.map((movie,index) => (
          <MovieCard key={index} data={movie} />
        ))
      ) : (
        <div className='movies-error'>
          <h3>{shows.error}</h3>
        </div>
      );
      
    
   
 return(
  <div className='movie-wrapper'> 
    <div className='movie-list'>
      <h1>Movies</h1>

    <div className='movie-container'>{renderMovies}</div>
    </div>
    <div className='show-list'>
      <h1>Shows</h1>

    <div className='movie-container'>{renderShows}</div>
    </div>
  </div> )
}
export default MovieListing;