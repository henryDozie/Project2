import React from "react";
import { getLast30Games } from "./loadAPI";
import GameCard from "./gameCard";

class Last30Days extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      porularGames: [],
      results: "",
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    let response = await getLast30Games();
    console.log(response);
    this.setState({
      result: response,
      apiDataLoaded: true
    });
  };

  render() {
    console.log(this.state.result);
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

export default Last30Days;
