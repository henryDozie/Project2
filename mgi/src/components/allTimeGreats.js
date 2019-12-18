import React from 'react'
import { getAllTimeGreats } from './loadAPI';
import GameCard from './gameCard';

class AllTimeGreats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greats: [],
      results: '',
      apiDataLoaded: false,
      hovered: false
    }
  }

  componentDidMount = async () => {
    let response = await getAllTimeGreats()
    console.log(response);
    this.setState({
      greats: response,
      apiDataLoaded: true
    })
  }

  showDropdown = () => {
    console.log("hovered")
    this.setState({
      hovered: true
    })
  }
  hideDropDown = () => {
    this.setState({
      hovered: false
    })
  }

  render() {

    return (

      <div className="gamesDiv">
        {this.state.apiDataLoaded &&
          this.state.greats.map((game, index) =>
            <GameCard name={game.name} background_image={game.background_image} index={index}/>
          )}
      </div>
    )
  }
}

export default AllTimeGreats;