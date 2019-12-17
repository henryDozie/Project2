import React from 'react';
import './App.css'
import { getCat, getPopularIn2019 } from './components/loadAPI';
import Header from './components/header'
import { Route } from 'react-router-dom';
import Categories from './components/categories'
import HighestRating from './components/highestRating';
import MainBody from './components/mainBody';
import PopularIn2019 from './components/popularIn2019'
import Last30Days from './components/last30Days'
import SearchResults from './components/searchResults';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <nav className="sideNav"></nav> */}
        
        <Route path="/categories" render={() => <Categories/>}/>
        <Route path="/categories" render={() => <Categories/>}/>
        <Route path="/popularIn2019" render={() => <PopularIn2019/>}/>
        <Route path="/last30Days" render={() => <Last30Days/>}/>
        <Route path="/mainBody" render={() => <MainBody/>}/>
        
          
        />
      </div>
    );
  }
}

export default App;
