import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailedBanner } from "./DetailedBanner";
import { MoreInformation } from "./MoreInformation";
import { CastSection } from "./CastSection";
import { ClipsSection } from "./ClipsSection";
import { Recommended } from "./Recommended";

export const DetailedPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  // API Call

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((response) => response.json())
      .then((response) => setMovie(response))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className='w-full h-full'>
      {movie && (
        <div className='w-full flex flex-col gap-4'>
          <DetailedBanner movie={movie} />
          <MoreInformation movie={movie} />
          <CastSection id={id} />
          <ClipsSection id={id} />
          <Recommended id={id} />
        </div>
      )}
    </div>
  );
};
