import React from "react";
import GameCard from "./gameCard";

function MyLibrary(props) {
  console.log(props);

  return (
    <div>
      <div className="gamesDiv">
        {props.favorites.map((game, index) => (
          <GameCard
            name={game.name}
            background_image={game.background_image}
            index={index}
          />
        ))}
      </div>
      ); } }
    </div>
  );
}
export default MyLibrary;
