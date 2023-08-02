import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ClipsSection = ({ id }) => {
  const [videos, setVideos] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  // API Call

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then((response) => response.json())
      .then((response) => setVideos(response.results))
      .catch((err) => console.error(err));
  }, [id]);

  // Button Functions

  const previous = () => {
    if (currentVideo === 0) {
      return;
    }

    setCurrentVideo((currentVideo) => currentVideo - 1);
  };

  const next = () => {
    if (currentVideo === videos.length - 1) {
      return;
    }

    setCurrentVideo((currentVideo) => currentVideo + 1);
  };

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
      className='w-full h-fit p-4 bg-cyan-800 rounded-lg flex flex-col gap-4 '
    >
      <h1 className='text-xl font-semibold'>Clips</h1>
      {videos && videos.length > 0 && (
        <div className='aspect-video' key={videos[currentVideo].key}>
          <iframe
            src={`https://www.youtube.com/embed/${videos[currentVideo].key}`}
            title={videos[currentVideo].name}
            allowFullScreen
            className='w-full h-full rounded-lg'
          />
        </div>
      )}
      <div className='w-full p-4 flex justify-between gap-5'>
        <button
          onClick={() => previous()}
          className='text-xl w-1/2 border-2 border-white rounded-md p-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out'
        >
          Previous
        </button>
        <button
          onClick={() => next()}
          className='text-xl w-1/2 border-2 border-white rounded-md p-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out'
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};
