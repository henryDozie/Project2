import React from "react";
import { getGame } from "./loadAPI";
import GameCard from "./gameCard";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResponse: [],
      apiDataLoaded: false
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    const name = this.state.searchResponse;
    const result = await getGame(name);

    this.setState({
      searchResponse: result,
      apiDataLoaded: true
    });
  };

  onChange = e => {
    const name = e.target.value;

    this.setState({
      searchResponse: name
    });
  };

  render() {
    return (
      <div className="gamesDiv">
        {!this.state.apiDataLoaded &&
          <div id="formDiv">
            <form id="searchForm" onSubmit={this.onSubmit}>
              <input
                type="text"
                name="gameName"
                id="searchInput"
                placeholder="Search Games"
                onChange={this.onChange}
              ></input>
            </form>
          </div>}
        {this.state.apiDataLoaded &&
          this.state.searchResponse.map((game, index) => (
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
export default Search;
