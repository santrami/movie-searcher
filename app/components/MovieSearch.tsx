"use client";

import { useState } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import { searchMovies } from "../services/movie.service";

function MovieSearch() {
  const [movies, setMovies] = useState([]);

  const handlerSearch = async (query: string) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div>
      <SearchBar onSearch={handlerSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            overview={movie.overview}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
