import Header from "./Header";
import { useSelector } from "react-redux";
import useNowPlaying from "../Hooks/useNowPlaying";
import MoviesListContainer from "./MoviesListContainer";
import VideoContainer from "./VideoContainer";

const Browse = () => {

useNowPlaying();

  return (
    <div>
     <div className="flex flex-wrap min-h-screen">     
        <Header></Header>
        <VideoContainer></VideoContainer>
        <MoviesListContainer></MoviesListContainer>
      </div>
    </div>
  );
};

export default Browse;
