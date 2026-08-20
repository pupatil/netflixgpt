import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movieList",
    initialState:{
        movieList:[],
        trailerId:null,
        popularMovieList:[]
    },


    reducers:{
        addMovieList:(state , action)=>{
            state.movieList= action.payload 
        },
        addPopularMovieList:(state , action)=>{
            state.popularMovieList= action.payload 
        },
        removeMovieList:(state , action)=>{
            state.movieList=[]
        },
        addTrailer:(state,action)=>{
            state.trailerId= action.payload 
        }
    }
})

export const {addMovieList,addPopularMovieList,removeMovieList ,addTrailer} = movieSlice.actions
 
export default movieSlice.reducer

