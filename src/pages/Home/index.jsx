import React from "react";
import { HeroSection } from "./HeroSection";
import { UpcomingMovies } from "./UpcomingMovies";
import { PopularMovies } from "./PopularMovies";
import { NowPlaying } from "./NowPlaying";
import { TopRated } from "./TopRated";

export const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-3'>
      <HeroSection />
      <UpcomingMovies />
      <NowPlaying />
      <TopRated />
      <PopularMovies />
    </div>
  );
};
