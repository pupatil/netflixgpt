import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movieList",
    initialState:{
        movieList:[],
        trailerId:null
    },


    reducers:{
        addMovieList:(state , action)=>{
            state.movieList= action.payload 
        },
        removeMovieList:(state , action)=>{
            state.movieList=[]
        },
        addTrailer:(state,action)=>{
            state.trailerId= action.payload 
        }
    }
})

export const {addMovieList,removeMovieList ,addTrailer} = movieSlice.actions
 
export default movieSlice.reducer

