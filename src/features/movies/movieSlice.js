import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import MovieApi from "../../common/apis/MovieApi";
import { ApiKey } from "../../common/apis/MovieApiKey";
const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow:{}
}
export const fetchAsyncMovies = createAsyncThunk(
"movies/fetchAsyncMovies",
 async  () =>{
    const movieText = "Harry";
           
            const response = await MovieApi
            .get(`?i=tt3896198&apikey=${ApiKey}&type=movie&s=${movieText}`)
            .catch((error)=>{
                console.log(error);
            });
           // dispatch(addMovies(response.data));
            console.log(response);
            return response.data;
 }
)

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
     async  () =>{
        const showText = "big bang";
               
                const response = await MovieApi
                .get(`?i=tt3896198&apikey=${ApiKey}&type=series&s=${showText}`)
                .catch((error)=>{
                    console.log(error);
                });
               // dispatch(addMovies(response.data));
                console.log(response);
                return response.data;
     }
    )

    export const fetchAsyncMovieOrShow = createAsyncThunk(
        "movies/fetchAsyncMovieOrShow",
         async  (id) =>{
            
                    const response = await MovieApi
                    .get(`?apikey=${ApiKey}&i=${id}&Plot=full`)
                    .catch((error)=>{
                        console.log(error);
                    });
                   // dispatch(addMovies(response.data));
                    console.log(response);
                    return response.data;
         }
        )
    

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers :{
        addMovies : (state,{payload}) =>{
            state.movies = payload;
        },
        removeSelectedMovieOrShow : (state) =>{
            state.selectMovieOrShow = {};
        }
    },
    extraReducers : {
        [fetchAsyncMovies.pending] : () =>{
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled] :(state,{payload}) =>{
            console.log("Fetched successfully");
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected] : () =>{
            console.log("rejected")
        },
        [fetchAsyncShows.pending] : () =>{
            console.log("Pending");
        },
        [fetchAsyncShows.fulfilled] :(state,{payload}) =>{
            console.log("Fetched successfully");
            return {...state,shows:payload}
        },
        [fetchAsyncShows.rejected] : () =>{
            console.log("rejected")
        },
        [fetchAsyncMovieOrShow.pending] : () =>{
            console.log("Pending");
        },
        [fetchAsyncMovieOrShow.fulfilled] :(state,{payload}) =>{
            console.log("Fetched successfully");
            return {...state,selectMovieOrShow:payload}
        },
        [fetchAsyncMovieOrShow.rejected] : () =>{
            console.log("rejected")
        }
    }
});

export const {addMovies,removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow

export default movieSlice.reducer; 