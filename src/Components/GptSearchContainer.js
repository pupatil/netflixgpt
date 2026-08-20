import GptSearch from "./GptSearch";
import GptMovieSuggestion from "./GptMovieSuggestion"
const GptSearchContainer = () => {
  return (
  <div className="w-full">
    <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg"
          alt="Netflix Background"
          className="w-full h-screen object-cover"
        />
      </div>
    <GptSearch></GptSearch>
    <GptMovieSuggestion></GptMovieSuggestion>
  </div>
  )
};

export default GptSearchContainer;
