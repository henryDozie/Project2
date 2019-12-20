import React from "react";
import { getHighestRating } from "./loadAPI";
import GameCard from "./gameCard";

class HighestRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: "",
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    let response = await getHighestRating();
    console.log(response);
    this.setState({
      result: response,
      apiDataLoaded: true
    });
  };

  render() {
    return (
      <div className="gamesDiv">
        {this.state.apiDataLoaded &&
          this.state.result.map((game, index) => (
            <GameCard
              name={game.name}
              background_image={game.background_image}
              released={game.released}
              rating={game.rating}
              ratings_count={game.ratings_count}
              suggestions_count={game.suggestions_count}
              index={index}
              handleClick={this.props.handleClick}
              game={game}
            />
          ))}
      </div>
    );
  }
}

export default HighestRating;
