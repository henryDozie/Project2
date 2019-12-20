import React from "react";

export default class Gamecard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  showDropdown = () => {
    console.log("hovered");
    this.setState({
      hovered: true
    });
  };
  hideDropDown = () => {
    this.setState({
      hovered: false
    });
  };

  render() {
    return (
      <div>
        <div
          key={this.props.index}
          className="gameCatDiv"
          onMouseEnter={this.showDropdown}
          onMouseLeave={this.hideDropDown}
        >
          <div id="title">
            <i
              className="fas fa-plus-circle fa-4x"
              onClick={e => this.props.handleClick(e, this.props.game)}
            ></i>
            <h4 className="gameName" id="titleName">
              {this.props.name}
            </h4>
          </div>
          <img src={this.props.background_image} alt="gameInfoImage"></img>
          {this.state.hovered && (
            <div className="info">
              <ul>
                <li>
                  <h4>Release date: {this.props.released}</h4>
                </li>
                <li>
                  <h4>Rating: {this.props.rating}</h4>
                </li>
                <li>
                  <h4>Review Count: {this.props.ratings_count}</h4>
                </li>
                <li>
                  <h4>Suggestion Index: {this.props.suggestions_count}</h4>
                </li>
                <li>
                  <div className="platforms">
                    <h4>platforms:</h4> <i className="fab fa-xbox"></i>
                    <i className="fab fa-playstation"></i>
                    <i className="fab fa-steam"></i>
                    <i className="fas fa-laptop"></i>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
