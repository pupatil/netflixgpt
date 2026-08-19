import { useEffect } from "react";
import { API_OPTIONS } from "../Constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../Utils/movieSlice";

const useTrailerVideo = (movieId) => {

  const dispatch = useDispatch();

  useEffect(() => {
    if(!movieId) return
    getVideo();
  }, []);

  const getVideo = async () => {
    const videoData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await videoData.json();
    console.log("videoData", json);

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer",
    );
    const firstTrailer = filterTrailer?.[0];
    dispatch(addTrailer(firstTrailer.key));
  };
};

export default useTrailerVideo;
