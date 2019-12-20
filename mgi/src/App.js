import React from "react";
import "./App.css";
import Header from "./components/header";
import { Route } from "react-router-dom";
import Categories from "./components/categories";
import HighestRating from "./components/highestRating";
import Search from "./components/search";
import PopularIn2019 from "./components/popularIn2019";
import Last30Days from "./components/last30Days";
import AllTimeGreats from "./components/allTimeGreats";
import ThisWeek from "./components/thisWeek";
import Platforms from "./components/platforms";
import HomeBody from "./components/homeBody";
import MyLibrary from "./components/myLibrary";
import Footer from "./components/footer";
import Head from "./components/head";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: []
    };
  }

  handleClick = (e, results) => {
    e.preventDefault();
    let favFlag = true;
    let newFavorite = this.state.favorites;
    for (let i = 0; i < newFavorite.length; i++) {
      if (newFavorite[i].id === results.id) {
        favFlag = false;
        break;
      }
    }
    if (favFlag) {
      newFavorite.push(results);
    }
    this.setState({
      favorites: newFavorite
    });
  };

  render() {
    return (
      <div className="App">
        <Head />
        <Header />
        <Route path="/categories" render={() => <Categories />} />
        <Route
          path="/popularIn2019"
          render={() => <PopularIn2019 handleClick={this.handleClick} />}
        />
        <Route
          path="/last30Days"
          render={() => <Last30Days handleClick={this.handleClick} />}
        />
        <Route
          path="/search"
          render={() => <Search handleClick={this.handleClick} />}
        />
        <Route
          path="/allTimeGreats"
          render={() => <AllTimeGreats handleClick={this.handleClick} />}
        />
        <Route path="/thisWeek" render={() => <ThisWeek />} />
        <Route path="/platforms" render={() => <Platforms />} />
        <Route
          path="/highestRating"
          render={() => <HighestRating handleClick={this.handleClick} />}
        />
        <Route
          path="/myLibrary"
          render={() => <MyLibrary favorites={this.state.favorites} />}
        />
        />
        <HomeBody />
        <Footer />
      </div>
    );
  }
}

export default App;
