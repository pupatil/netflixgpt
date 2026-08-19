import {POSTER_PATH} from "../Constants"

const MovieCard = ({title ,posterPath}) =>{
    return(
        <div>
            <div className="w-48 flex-shrink-0 p-2 ">
                <img className="w-full rounded-md" alt="posterImage" src={POSTER_PATH+posterPath } ></img>
            </div>
        </div>
    )
}

export default MovieCard;