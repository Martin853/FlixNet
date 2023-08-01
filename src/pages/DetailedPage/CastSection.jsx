import React, { useEffect, useState } from "react";
import { CastCard } from "./CastCard";

export const CastSection = ({ id }) => {
  const [cast, setCast] = useState(null);

  // API Call

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options)
      .then((response) => response.json())
      .then((response) => setCast(response.cast))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className='w-full h-fit p-4 bg-cyan-800 rounded-lg'>
      <h1 className='text-xl font-semibold'>Cast</h1>
      <div className='w-full h-fit overflow-x-auto overflow-y-hidden whitespace-nowrap py-4 scrollbar-thin md:scrollbar scrollbar-track-cyan-900 scrollbar-thumb-cyan-950 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg'>
        {cast &&
          cast.map((actor) => {
            return <CastCard key={actor.id} actor={actor} />;
          })}
      </div>
    </div>
  );
};
