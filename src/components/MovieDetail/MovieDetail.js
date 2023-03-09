import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShow,getSelectedMovieOrShow,removeSelectedMovieOrShow } from '../../features/movies/movieSlice'
import "./MovieDetail.scss";
const MovieDetail =(id) => {
const dispatch = useDispatch();
const {imdbID} = useParams(); 
const data = useSelector(getSelectedMovieOrShow);
console.log(data)
  useEffect ( () =>{
    dispatch(fetchAsyncMovieOrShow(imdbID));
    return ()=>{
      dispatch(removeSelectedMovieOrShow())
    }
  },[dispatch,imdbID]);
  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ?
      (<div>Loading...</div>)
      :(
      <>
      <div className='section-left'>
        <div className='movie-title'>{data.Title}</div>
        <div className='movie-rating'>
          <span>
            IMDB Rating<i className='fa fa-start'></i>:{data.imdbRating}
          </span>
          <span>
            IBDB Votes<i className='fa fa-thumbs-up'></i>:{data.imdbVotes}
          </span>
          <span>
            Runtime<i className='fa fa-film'></i>:{data.Runtime}
          </span>
          <span>
            Year<i className='fa fa-calender'></i>:{data.Year}
          </span>
        </div>
        <div className='movie-plot'>{data.Plot}</div>
        <div className='movie-info'>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
        </div>
      </div>
      <div className='secion-right'>
        <img src={data.Poster} alt={data.Title} />
      </div>
      </>)}
    </div>
  )
}
export default MovieDetail;