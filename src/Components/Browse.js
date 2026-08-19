import Header from "./Header";
import MoviesListContainer from "./MoviesListContainer";
import VideoContainer from "./VideoContainer";

const Browse = () => {

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
