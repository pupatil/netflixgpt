import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovies from "../Hooks/usePopularMovies";
const MoviesListContainer = () => {

usePopularMovies();
const movies = useSelector((store)=>store.movies.movieList);
const popularMovie =  useSelector((store)=>store.movies.popularMovieList);
console.log("popularMovie",popularMovie)
    return(
        <div className="w-full bg-black">
            <div className="-mt-72 relative z-index-1">
                <MovieList movies={movies} title={"Now Playing"}></MovieList>
                <MovieList movies={popularMovie} title={"Popular Movies"}></MovieList>
            
            </div>
        </div>
    )
}

export default MoviesListContainer;