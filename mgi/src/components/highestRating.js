import React, { Component } from 'react'
import { getCat, getPopularIn2019, getHighestRating } from './loadAPI';

class HighestRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highRatings: [],
      results: '',
      apiDataLoaded: false
    }
  }

  componentDidMount = async () => {
    let response = await getHighestRating()
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
              <img src={game.background_image} />
              <div>
                <ul>
                  <li><h4>Rating: {game.rating}</h4></li>
                   <li><h4>Released: {game.released}</h4></li>
                  <li><h4>Rating: {game.platforms[0].name}</h4></li>
                </ul>
              </div>
            </div>

          )}
      </div>
    )
  }
}

export default HighestRating;