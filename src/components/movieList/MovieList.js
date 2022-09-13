import React from "react";
import './MovieList.css';
import image from "../../image/cover_3.jpg";

const MovieList = () => {
  return (
    <div className="movie-container">
      <img src={image} alt="" className="image" />
      <div className="heading">
        <p className="title">the title</p>
        <span>
          <svg
            className="love"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 
                                           4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </span>
      </div>
      <p className="date-label">Realsed date:
        <span className="date"> date </span>
      </p>
      <p> the day of the lord is coming where there will be no </p>
    </div>
  );
};

export default MovieList;
