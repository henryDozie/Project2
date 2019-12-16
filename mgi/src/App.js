import React from 'react';
import './App.css'
import { getCat } from './components/loadAPI';
import Header from './components/header'
import { Route } from 'react-router-dom';
import Categories from './components/categories'
import Video from './components/mainBody';
import MainBody from './components/mainBody';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
      apiDataLoaded: false,
      gameCategoriesInfo: []
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <nav className="sideNav"></nav> */}
        <Route path="/categories" render={() => <Categories/>}/>
          {/* <Route path='/mainBody' render={() => <MainBody onSubmit={this.state.onSubmit} />} />
        <MainBody
          onSubmit={this.state.onSubmit} */}
        />
      </div>
    );
  }
}

export default App;
