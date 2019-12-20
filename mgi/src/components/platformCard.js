import React from "react";

export default class PlatformCard extends React.Component {
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
            <i className="fas fa-plus-circle fa-5x"></i>
            <h4 className="gameName" id="platformTitleName">
              {this.props.name}
            </h4>
          </div>
          <img src={this.props.image_background} alt="gameInfoImage"></img>
          {this.state.hovered && (
            <div className="info">
              <ul>
                <h4 id="sampleGames">Sample Games</h4>
                <li>
                  <h4>{this.props.games[0].name}</h4>
                </li>
                <li>
                  <h4>{this.props.games[1].name}</h4>
                </li>
                <li>
                  <h4>{this.props.games[2].name}</h4>
                </li>
                <li>
                  <h4>{this.props.games[3].name}</h4>
                </li>
                <li>
                  <h4>{this.props.games[4].name}</h4>
                </li>
                <li>
                  <h4>{this.props.games[5].name}</h4>
                </li>

                <li>
                  <div className="platforms">
                    <h4>Platform</h4> <i className="fab fa-xbox"></i>
                    <i class="fab fa-playstation"></i>
                    <i class="fab fa-steam"></i>
                    <i class="fas fa-laptop"></i>
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
