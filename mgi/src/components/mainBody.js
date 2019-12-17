import React from 'react';
import { getGame } from './loadAPI';

class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResponse: [],
      apiDataLoaded: false
    }
  }

  // componentDidMount = async () => {
  //   let response = await getGame()
  //   this.setState({
  //     result: response,
  //     apiDataLoaded: true
  //   })
  //   console.log(response); 
  // }

  onSubmit = async (e) => {
    e.preventDefault()
    const name = this.state.searchResponse
    const result = await getGame(name)
    console.log(result);
    
    this.setState({
      searchResponse: result,
      apiDataLoaded: true
    })
  }
  
  onChange = (e) => {
    const name = e.target.value;
    console.log(name);
    
    this.setState({
      searchResponse: name
    })
  }


  render() {
    return (
      <div className="gamesDiv">
        <form
          id="searchForm"
          onSubmit={this.onSubmit}>
          <input
            type="text"
            name="gameName"
            id="searchInput"
            placeholder="Game Info"
            onChange={this.onChange}></input>
        </form>
        {this.state.apiDataLoaded &&
        this.state.searchResponse.map((game, index) =>
          (
            <div key={index} className="gameCatDiv">
              <h2>{game.name}</h2>
              <img src={game.background_image} alt="No Image"/>
            </div>
          ))}

      </div>
    )
  }
}
export default MainBody
