import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MovieCard } from "../../components/ui/MovieCard";
import placeholder from "../../assets/Placeholder.png";

export const PopularMovies = () => {
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
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, []);

  const mainDivVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const createDummyDivs = () => {
    return Array.from({ length: 12 }, (_, index) => (
      <div
        key={index}
        className='inline-block mx-2 animate-pulse bg-cyan-700 rounded-lg  w-40 h-56 mb-4 object-cover object-center'
        style={{
          backgroundImage: `url(${placeholder})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    ));
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
      <h1 className='text-xl font-semibold'>Popular Movies</h1>
      <div className='w-full h-fit overflow-x-auto overflow-y-hidden whitespace-nowrap py-4 scrollbar-thin scrollbar-track-cyan-900 scrollbar-thumb-cyan-950 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg'>
        {!movies
          ? createDummyDivs()
          : movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
      </div>
    </motion.div>
  );
};
