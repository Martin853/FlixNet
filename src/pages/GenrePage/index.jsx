import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieCardGrid } from "../../components/ui/MovieCardGrid";

export const GenrePage = () => {
  const { id } = useParams();

  const [movies, setMovies] = useState(null);

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
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}&with_original_language=en`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className='w-full h-fit p-4 flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Genre - {id}</h1>
      <div className='w-full h-fit p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
        {movies &&
          movies.map((movie) => <MovieCardGrid key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
