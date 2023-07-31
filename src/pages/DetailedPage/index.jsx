import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailedBanner } from "./DetailedBanner";

export const DetailedPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  console.log(movie);

  // API Call

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTk0Y2MzM2Q4MmM1YTVmN2NkNmNiMmQ0ZjBhNmUzNSIsInN1YiI6IjY0YmZlOTk2NmVlM2Q3MDBjN2ZiMWQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cqKZ_hZhlpnbXZqTbLuS2J4le_STmHcZSo4izYlfARo",
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
        <DetailedBanner movie={movie}/>
      )}
    </div>
  );
};
