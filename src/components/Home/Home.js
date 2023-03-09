import React,{useEffect} from 'react'
//import MovieApi from '../../common/apis/MovieApi'
import MovieListing from '../MovieListing/MovieListing'
//import {ApiKey} from "../../common/apis/MovieApiKey"
import {useDispatch} from "react-redux";
import {fetchAsyncMovies,fetchAsyncShows} from "../../features/movies/movieSlice";
export default function Home() {
    const dispatch = useDispatch();
    useEffect(()=>{
            
            dispatch(fetchAsyncMovies());
            dispatch(fetchAsyncShows());
         
    },[dispatch])

  return (
    <React.Fragment>
    <div className='banner-img'></div>
    <MovieListing />
    </React.Fragment>
  )
}
