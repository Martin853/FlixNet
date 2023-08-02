import React from "react";
import { motion } from "framer-motion";

export const MoreInformation = ({ movie }) => {
  const homepage = movie.homepage;

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
      className='w-full h-fit p-4 bg-neutral-200 rounded-lg flex flex-col gap-2 text-black'
    >
      <h1 className='text-xl font-semibold'>More Inoformation</h1>
      <h1>Status: {movie.status}</h1>
      <h1>Original Language: {movie.original_language.toUpperCase()}</h1>
      <h1>Budget: {movie.budget}$</h1>
      <h1>Revenue: {movie.revenue}$</h1>
      {homepage && (
        <a href={homepage} target='blank' className='text-blue-500'>
          {"Website"}
        </a>
      )}
    </motion.div>
  );
};
