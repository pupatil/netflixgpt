import { useEffect } from "react";
import { API_OPTIONS } from "../Constants";
import { useDispatch } from "react-redux";
import { addPopularMovieList } from "../Utils/movieSlice";

const usePopularMovies = () =>{
    const dispatch = useDispatch()

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS,
    );
    const data = await response.json();

    dispatch(addPopularMovieList(data.results))
  };
}

export default usePopularMovies;