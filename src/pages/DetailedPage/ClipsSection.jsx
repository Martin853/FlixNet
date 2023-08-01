import React, { useEffect, useState } from "react";

export const ClipsSection = ({ id }) => {
  const [videos, setVideos] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(0);

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

  return (
    <div className='w-full h-fit p-4 bg-cyan-800 rounded-lg flex flex-col gap-4 '>
      <h1 className='text-xl font-semibold'>Clips</h1>
      {videos && (
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
    </div>
  );
};
