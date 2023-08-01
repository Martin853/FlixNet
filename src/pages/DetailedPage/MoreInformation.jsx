import React from "react";

export const MoreInformation = ({ movie }) => {
  const homepage = movie.homepage;

  return (
    <div className='w-full h-fit p-4 bg-neutral-200 rounded-lg flex flex-col gap-2 text-black'>
      <h1 className='text-xl font-semibold'>More Inoformation</h1>
      <h1>Status: {movie.status}</h1>
      <h1>Original Language: {movie.original_language.toUpperCase()}</h1>
      <h1>Budget: {movie.budget}$</h1>
      <h1>Revenue: {movie.revenue}$</h1>
      {homepage && (
        <div className='flex gap-2'>
          <h1>Website:</h1>{" "}
          <a href={homepage} target='blank' className='text-blue-500'>
            {homepage}
          </a>
        </div>
      )}
    </div>
  );
};
