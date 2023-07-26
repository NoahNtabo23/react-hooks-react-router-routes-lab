import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <div>
        <h1>Actors Page</h1>
      </div>
      <div>
        {actors.map((actor,index)=>(
          <div key={index}>
            <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie,i)=>(
              <li key={i}>
                {movie}
              </li>
            ))}
          </ul>
          </div>
          
          
        ))}
      </div>
    </div>
  )
}

export default Actors;
