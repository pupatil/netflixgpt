import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import useNowPlaying from "../Hooks/useNowPlaying";
const VideoContainer = () => {
  useNowPlaying();
  const nowPlayingMovies = useSelector((store) => store.movies.movieList);

  const mainMovie = nowPlayingMovies?.[0];

  if (!mainMovie) return;

  return (
    <div>
      <VideoTitle
        title={mainMovie.title}
        overview={mainMovie.overview}
      ></VideoTitle>
      <VideoBackground movieId={mainMovie?.id}></VideoBackground>
    </div>
  );
};

export default VideoContainer;
