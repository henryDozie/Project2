import React from 'react'
import { getPlatforms } from './loadAPI';

class Platforms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCategories: [],
      result: [],
      apiDataLoaded: false
    }
  }

  componentDidMount = async () => {
    let response = await getPlatforms()
    this.setState({
      result: response,
      apiDataLoaded: true
    })

  }

  render() {

    return (
      <div className="gamesDiv">
        {this.state.apiDataLoaded &&
          this.state.result.map((game, index) =>
            <div key={index} className="gameCatDiv">
              <i className="fas fa-plus-circle fa-2x"></i>
              <div className="catHead">
                <h4 className="gameName">{game.name}</h4>
              </div>
              <img src={game.image_background} alt="gameInfoImage"></img>
              <div className="info">
                <div>
                  <ul>

                    <li><h2>{game.games[0].name}</h2></li>
                    <li><h2>{game.games[1].name}</h2></li>
                    <li><h2>{game.games[2].name}</h2></li>
                    <li><h2>{game.games[3].name}</h2></li>
                    <li><h2>{game.games[4].name}</h2></li>
                    <li><h2>{game.games[5].name}</h2></li>

                    <li><div className="platforms"><h2>Platform:</h2>   <i className="fab fa-xbox"></i><i class="fab fa-playstation"></i><i class="fab fa-steam"></i><i class="fas fa-laptop"></i></div></li>

                  </ul>
                </div>
              </div>

            </div>
          )}
      </div>
    )
  }
}
export default Platforms

