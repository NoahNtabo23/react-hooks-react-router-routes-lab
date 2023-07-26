import React from "react";
import { directors } from "../data";

function Directors() {
  return(
    <div>
      <div>
        <h1>Directors Page</h1>
      </div>
      <div>
        {directors.map((director,index)=>(
          <div key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie,i)=>(
                <li key={i}>{movie}</li>
              ))}
            </ul>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Directors;
