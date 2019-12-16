import React from 'react';
import './App.css'
import { LoadApi } from './loadAPI';
import Header from './components/header'
import { Route } from 'react-router-dom';
import Categories from './components/categories'
import Video from './components/mainBody';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
      apiDataLoaded: false
    }
  }

  componentDidMount = async () => {
    let response = await LoadApi()
    response = response.data.results

    this.setState({
      result: response,
      apiDataLoaded: true
    })
  }

  render() {
    console.log(this.state.result);
    return (
      <div className="App">
        <Header />
        <Route path="/categories" render={() => <Categories/>}/>
        <Route path='/video' render={() => <Video video={this.state.result}/>} />
      </div>
    );
  }
}

export default App;
