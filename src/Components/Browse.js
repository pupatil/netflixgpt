import Header from "./Header";
import MoviesListContainer from "./MoviesListContainer";
import VideoContainer from "./VideoContainer";
import GptSearchContainer from "./GptSearchContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearch = useSelector((store) => store.gptSearch.showGptSearch);
  return (
    <div>
      <div className="">
        <Header></Header>
        {gptSearch ? (
          <GptSearchContainer />
           ) : (
          <>
            <VideoContainer/>
            <MoviesListContainer/>
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
