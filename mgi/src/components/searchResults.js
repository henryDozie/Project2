import React from "react";
import { getGame } from "./loadAPI";
import { Link } from "react-router-dom";

function SearchResults(props) {
  console.log(props);

  return (
    <div>
      {props.api &&
        props.name.map((game, index) => (
          <div key={index} className="gameCatDiv">
            <h2>{game.name}</h2>
            <img src={game.background_image} alt="No Image" />
          </div>
        ))}
      }
    </div>
  );
}
export default SearchResults;
