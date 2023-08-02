import React from "react";
import { motion } from "framer-motion";
import genres from "../data/genres";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

export const MobileDesktopNavbar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className='w-full h-80 md:h-full overflow-y-auto bg-neutral-800 rounded-lg p-4 flex flex-col gap-3 '
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='w-full md:hidden'>
        <SearchBar />
      </div>
      <motion.h1 className='text-lg' variants={itemVariants}>
        Genre
      </motion.h1>
      {genres.map((genre) => (
        <Link to={`/genre/${genre.id}`} key={genre.id}>
          <motion.h1
            className='text-neutral-400 hover:text-neutral-500 cursor-pointer'
            variants={itemVariants}
          >
            {genre.name}
          </motion.h1>
        </Link>
      ))}
    </motion.div>
  );
};
