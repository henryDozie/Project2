import React from "react";
import { getPlatforms } from "./loadAPI";
import PlatformCard from "./platformCard";

class Platforms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCategories: [],
      result: [],
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    let response = await getPlatforms();
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
            <PlatformCard
              name={game.name}
              image_background={game.image_background}
              index={index}
              games={game.games}
            />
          ))}
      </div>
    );
  }
}
export default Platforms;
