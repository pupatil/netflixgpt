import { useEffect } from "react";
import { API_OPTIONS } from "../Constants";
import { useDispatch } from "react-redux";
import { addMovieList } from "../Utils/movieSlice";

const useNowPlaying = () =>{
    const dispatch = useDispatch()

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS,
    );
    const data = await response.json();

    dispatch(addMovieList(data.results))
  };
}

export default useNowPlaying;