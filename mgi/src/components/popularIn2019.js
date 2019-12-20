import React from "react";
import { getPopularIn2019 } from "./loadAPI";
import VideoCard from "./videoCard";

class PopularIn2019 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      porularGames: [],
      results: "",
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    let response = await getPopularIn2019();
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
            <div key={index} className="gameCatDiv">
              <VideoCard
                name={game.name}
                clip={game.clip.clip}
                index={index}
                handleClick={this.props.handleClick}
                game={game}
                released={game.released}
                rating={game.rating}
                ratings_count={game.ratings_count}
                suggestions_count={game.suggestions_count}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default PopularIn2019;
