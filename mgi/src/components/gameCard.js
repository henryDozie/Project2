import React from 'react'




export default class Gamecard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    }

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
      <div>
        <div key={this.props.index} className="gameCatDiv" onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropDown}>
          <i className="fas fa-plus-circle fa-3x"></i>
          <div className="catHead">
            <h4 className="gameName">{this.props.name}</h4>
          </div>
          <img src={this.props.background_image} alt="gameInfoImage"></img>
          {this.state.hovered &&
            <div className="info">
              <ul>
                <li><h2>Release date:</h2></li>
                <li><h2>Genre</h2></li>
                <li><h2>Rating</h2></li>
                <li><div className="platforms"><h2>Platform:</h2>   <i className="fab fa-xbox"></i><i class="fab fa-playstation"></i><i class="fab fa-steam"></i><i class="fas fa-laptop"></i></div></li>

              </ul>

            </div>
          }

        </div>
      </div>
    )
  }
}