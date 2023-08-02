import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import placeholder from "../../assets/Placeholder.png";

export const MovieCard = ({ movie }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      key={movie.id}
      className='inline-block mx-2'
    >
      <Link to={`/movie/${movie.id}`}>
        <img
          src={
            import.meta.env.VITE_IMAGE_PATH + movie.poster_path === null
              ? placeholder
              : import.meta.env.VITE_IMAGE_PATH + movie.poster_path
          }
          className='w-40 h-auto rounded-lg'
          loading='lazy'
        ></img>
      </Link>
    </motion.div>
  );
};
