import React, { useState } from "react";
import placeholder from "../../assets/Placeholder.png";
import { motion } from "framer-motion";

export const CastCard = ({ actor }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='inline-block mx-2 w-36 shadow-2xl'
    >
      <div className='w-full h-full flex flex-col justify-start'>
        <img
          src={
            import.meta.env.VITE_IMAGE_PATH + actor.profile_path ===
            "https://image.tmdb.org/t/p/originalnull"
              ? placeholder
              : import.meta.env.VITE_IMAGE_PATH + actor.profile_path
          }
          loading='lazy'
          onLoad={() => {
            setImageLoaded(true);
          }}
          className='w-full h-56 rounded-t-lg bg-black object-cover object-center'
        />
        <div className='w-full h-20 p-2 bg-neutral-100 rounded-b-lg'>
          <h1 className='text-neutral-950 text-center truncate overflow-hidden overflow-ellipsis'>
            {actor.name}
          </h1>
          <h1 className='text-neutral-500 text-center text-sm truncate overflow-hidden overflow-ellipsis'>
            {actor.character}
          </h1>
        </div>
      </div>
    </motion.div>
  );
};
