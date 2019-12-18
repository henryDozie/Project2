import React from 'react'
import { getCat } from './loadAPI';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCategories: []
    }
  }

  componentDidMount = async () => {
    let response = await getCat()
    this.setState({
      result: response,
      apiDataLoaded: true
    })
    
  }

  render() {

    return (
      <div className="gamesDiv">{this.state.apiDataLoaded &&
        this.state.result.map((game, index) =>
          (
            <div key={index} className="gameCatDiv">
              <h2>{game.name}</h2>
              <img src={game.image_background} alt=""/>
            </div>
          ))}
      </div>
    )
  }
}
export default Categories