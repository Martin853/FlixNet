import React, { useEffect, useState } from "react";
import { CastCard } from "./CastCard";
import { motion } from "framer-motion";

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

  // Variants for the main div animation
  const mainDivVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={mainDivVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className='w-full h-fit p-4 bg-cyan-900 rounded-lg'
    >
      <h1 className='text-xl font-semibold'>Cast</h1>
      <div className='w-full h-fit overflow-x-auto overflow-y-hidden whitespace-nowrap py-4 scrollbar-thin scrollbar-track-cyan-900 scrollbar-thumb-cyan-950 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg'>
        {cast &&
          cast.map((actor) => {
            return <CastCard key={actor.id} actor={actor} />;
          })}
      </div>
    </motion.div>
  );
};
