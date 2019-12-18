import React from 'react'
import AllTimeGreats from './allTimeGreats'

class ShowdropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    }
  }
  render() {
    return (
      <div className="info">
        <ul>
          <li><h2>Release date:</h2></li>
          <li><h2>Genre</h2></li>
          <li><h2>Rating</h2></li>
          <li><div className="platforms"><h2>Platform:</h2>   <i className="fab fa-xbox"></i><i class="fab fa-playstation"></i><i class="fab fa-steam"></i><i class="fas fa-laptop"></i></div></li>

        </ul>

      </div>
    )
  }
}

export default ShowdropDown