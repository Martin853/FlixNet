import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/Placeholder.png";

export const MovieCard = ({ movie }) => {
  console.log(movie);

  return (
    <div className='inline-block mx-2'>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={
            import.meta.env.VITE_IMAGE_PATH + movie.poster_path === null
              ? placeholder
              : import.meta.env.VITE_IMAGE_PATH + movie.poster_path
          }
          className='w-40 rounded-lg'
          loading='lazy'
        ></img>
      </Link>
    </div>
  );
};
