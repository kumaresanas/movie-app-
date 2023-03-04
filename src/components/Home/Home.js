import React,{useEffect} from 'react'
import MovieApi from '../../common/apis/MovieApi'
import MovieListing from '../MovieListing/MovieListing'
import {ApiKey} from "../../common/apis/MovieApiKey"
import {useDispatch} from "react-redux";
import {addMovies} from "../../features/movies/movieSlice";
export default function Home() {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchMovies = async () =>{
            const movieText = "Harry";
           
            const response = await MovieApi
            .get(`?i=tt3896198&apikey=${ApiKey}&type=movie&s=${movieText}`)
            .catch((error)=>{
                console.log(error);
            });
            dispatch(addMovies(response.data));
            console.log(response);
        }
        fetchMovies();

    },[])

  return (
    <React.Fragment>
    <div className='banner-img'></div>
    <MovieListing />
    </React.Fragment>
  )
}
