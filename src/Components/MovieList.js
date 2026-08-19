import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="pt-6 min-w-0">
      <h1 className="text-3xl text-white mb-4">
        {title} 
      </h1>

      <div className="flex overflow-x-auto">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;