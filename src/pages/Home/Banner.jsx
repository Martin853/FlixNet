import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";

export const Banner = ({ movie, index, currentMovie, setMovie }) => {
  const releaseYear = movie.release_date.split("-")[0];

  const nextMovie = () => {
    if (currentMovie === 5) {
      return;
    }

    setMovie((currentMovie += 1));
  };

  const prevMovie = () => {
    if (currentMovie === 0) {
      return;
    }

    setMovie((currentMovie -= 1));
  };

  return (
    <motion.div
      key={movie.id}
      className={`w-full h-full p-4 bg-cover bg-center bg-no-repeat rounded-lg flex flex-col justify-end relative ${
        index !== currentMovie ? "hidden" : ""
      }`}
      style={{
        backgroundImage: `url(${import.meta.env.VITE_IMAGE_PATH}${
          movie.backdrop_path
        })`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
    >
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg'></div>
      <div className='relative z-50 flex flex-col gap-3 w-full'>
        <div className='w-full flex justify-between items-center'>
          <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.85 }}>
            <BsArrowLeftCircle
              className='text-4xl hover:cursor-pointer'
              onClick={prevMovie}
            />
          </motion.span>
          <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.85 }}>
            <BsArrowRightCircle
              className='text-4xl hover:cursor-pointer'
              onClick={nextMovie}
            />
          </motion.span>
        </div>
        <div className='w-fit flex flex-col gap-2'>
          <h1 className='text-xl font-bold'>{movie.title}</h1>
          <div className='w-full flex items-center gap-5 text-neutral-200'>
            <div className='flex gap-1 items-center'>
              <AiFillStar className='text-yellow-400 text-xl' />
              <h3 className='font-bold'>{movie.vote_average}</h3>
            </div>
            <h3 className='font-bold'>{releaseYear}</h3>
          </div>
        </div>
        <p className='hidden sm:block text-sm'>{movie.overview}</p>
        <button className='w-fit h-fit py-2 px-6 text-xl text-white border-2 border-white rounded-lg hover:cursor-pointer hover:bg-white hover:text-black ease-in-out transition-all duration-300'>
          More
        </button>
      </div>
    </motion.div>
  );
};
