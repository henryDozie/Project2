import React from 'react'
import { getPopularIn2019 } from './loadAPI';

class PopularIn2019 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      porularGames: [],
      results: '',
      apiDataLoaded: false
    }
  }

  componentDidMount = async () => {
    let response = await getPopularIn2019()
    console.log(response);
    this.setState({
      result: response,
      apiDataLoaded: true
    })
  }

  hover = () => {
    // console.log('here');

  }

  render() {

    return (

      <div className="gamesDiv">
        {this.state.apiDataLoaded &&
          this.state.result.map((game, index) =>
            <div key={index} className="gameCatDiv">
              <h3>{game.name}</h3>
              <video width="320" height="240" controls className="video" onMouseOver={this.hover}>
                <source src={game.clip.clips[320]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
      </div>
    )
  }
}

export default PopularIn2019;