import React from "react";
import { motion } from "framer-motion";
import genres from "../data/genres";
import languages from "../data/languages";
import { SearchBar } from "./SearchBar";

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
        <motion.h1
          key={genre.id}
          className='text-neutral-400 hover:text-neutral-500 cursor-pointer'
          variants={itemVariants}
        >
          {genre.name}
        </motion.h1>
      ))}
      <motion.h1 className='text-lg' variants={itemVariants}>
        Language
      </motion.h1>
      {languages.map((language) => (
        <motion.h1
          key={language.iso_639_1}
          className='text-neutral-400 hover:text-neutral-500 cursor-pointer'
          variants={itemVariants}
        >
          {language.name}
        </motion.h1>
      ))}
    </motion.div>
  );
};
