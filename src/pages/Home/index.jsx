import React from "react";
import { HeroSection } from "./HeroSection";
import { UpcomingMovies } from "./UpcomingMovies";

export const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-3'>
      <HeroSection />
      <UpcomingMovies />
    </div>
  );
};
