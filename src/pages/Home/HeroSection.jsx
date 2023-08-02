import React, { useEffect, useState } from "react";
import { Banner } from "./Banner";

export const HeroSection = () => {
  const [movies, setMovies] = useState(null);
  const [currentMovie, setMovie] = useState(0);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?language=en", options)
      .then((response) => response.json())
      .then((response) => {
        const englishMovies = response.results.filter(
          (movie) => movie.original_language === "en"
        );
        setMovies(englishMovies);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className='w-full h-96 relative'>
      {movies &&
        movies.slice(0, 6).map((movie, index) => {
          return (
            <Banner
              movie={movie}
              key={movie.id}
              index={index}
              currentMovie={currentMovie}
              setMovie={setMovie}
            />
          );
        })}
    </section>
  );
};
