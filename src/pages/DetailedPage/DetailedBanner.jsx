import React from 'react'
import { AiFillStar } from "react-icons/ai";

export const DetailedBanner = ({movie}) => {
  // Function to convert minutes to hours and minutes
  const convertToHoursAndMinutes = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <div className='w-full h-full flex flex-col gap-4'>
          <div className='w-full h-fit relative flex justify-center sm:justify-start items-center'>
            <img
              src={import.meta.env.VITE_IMAGE_PATH + movie.backdrop_path}
              className='rounded-lg w-full h-96 object-cover object-center'
            />
            <div className='absolute w-full h-full flex justify-center lg:justify-start items-center gap-4'>
              <img
                src={import.meta.env.VITE_IMAGE_PATH + movie.poster_path}
                className='sm:ml-8 h-3/4 rounded-lg z-50 relative object-cover object-center'
              />
              <div className='hidden lg:flex flex-col gap-2 relative z-50'>
                <div className='flex flex-col gap-1'>
                  <span className='flex gap-1 items-center'>
                    <h1 className='text-2xl font-bold'>
                      {movie.original_title}
                    </h1>
                    <AiFillStar className='text-yellow-400 text-2xl ml-4' />{" "}
                    <h3 className='text-xl'>{movie.vote_average}</h3>
                  </span>
                  <div className='w-full flex gap-10'>
                    <h3 className='text-sm font-thin'>
                        Genres: {movie.genres.map((genre) => genre.name).join(", ")}
                    </h3>
                    <h3 className='text-sm font-thin'>
                        Runtime: {convertToHoursAndMinutes(movie.runtime)}
                    </h3>
                    <h3 className='text-sm font-thin'>
                        Release Date: {movie.release_date}
                    </h3>
                  </div>
                </div>
                <p className=''>{movie.overview}</p>
                <h2 className='text-xl font-bold italic text-start text-neutral-300'>
                  {movie.tagline}
                </h2>
              </div>
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black rounded-lg opacity-50'></div>
          </div>
          <div className='flex flex-col gap-2 lg:hidden'>
            <div className='flex flex-col gap-1'>
              <h1 className='text-lg font-bold'>{movie.original_title}</h1>
              <span className='flex gap-1 items-center'>
                <AiFillStar className='text-yellow-400 text-lg' />{" "}
                <h3 className='text-lg'>{movie.vote_average}</h3>
              </span>
              <h3 className='text-xs font-thin'>
                Genres: {movie.genres.map((genre) => genre.name).join(", ")}
              </h3>
              <h3 className='text-xs font-thin'>
                Runtime: {convertToHoursAndMinutes(movie.runtime)}
              </h3>
              <h3 className='text-xs font-thin'>
                Release Date: {movie.release_date}
              </h3>
            </div>
            <p className='text-sm'>{movie.overview}</p>
            <h2 className='text-sm font-bold italic text-center text-neutral-300'>
              {movie.tagline}
            </h2>
          </div>
        </div>
  )
}
