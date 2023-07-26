import React from "react";
import { movies } from "../data";

function Movies() {
  return(
    <div>
      <div>
        <h1>Movies Page</h1>
      </div>
      <div>
        {movies.map((movie,index)=>(
          <div key={index}>
            <h2>{movie.title}</h2>
            <h3>{movie.time}</h3>
            <ul>
              {movie.genres.map((genres,i)=>(
                <li key={i}>{genres}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies;
