import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants";


const GptSearch = () => {

    const langKay = useSelector((store)=>store.configLang.Lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
          <input
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={lang[langKay].gptSearchPlaceholder}
          ></input>
          <button className="bg-red-700 px-4 m-4 py-4 text-white rounded-lg col-span-2">
            {lang[langKay].search}
          </button>
      </form>
    </div>
  );
};

export default GptSearch;
