import React from 'react'
import { getLast30Games } from './loadAPI';

class Last30Days extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      porularGames: [],
      results: '',
      apiDataLoaded: false
    }
  }

  componentDidMount = async () => {
    let response = await getLast30Games()
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

      <div className="gamesDiv">{this.state.apiDataLoaded &&
        this.state.result.map((game, index) =>
          (
            <div key={index} className="gameCatDiv">
              <h2>{game.name}</h2>
              <img src={game.background_image} alt=""/>
            </div>
          ))}
        
      </div>
    )
  }
}

export default Last30Days;