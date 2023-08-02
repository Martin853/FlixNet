import React, { useEffect, useState } from "react";
import { MovieCard } from "../../components/ui/MovieCard";

export const Recommended = ({ id }) => {
  const [recommendedMovies, setRecommendedMovies] = useState(null);

  // API Call

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setRecommendedMovies(response.results))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className='w-full h-fit p-4 bg-cyan-800 rounded-lg'>
      <h1 className='text-xl font-semibold'>Recommended</h1>
      <div className='w-full h-fit overflow-x-auto overflow-y-hidden whitespace-nowrap py-4 scrollbar-thin scrollbar-track-cyan-900 scrollbar-thumb-cyan-950 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg'>
        {recommendedMovies &&
          recommendedMovies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
      </div>
    </div>
  );
};
