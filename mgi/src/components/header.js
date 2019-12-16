import React from 'react'
import { Route, Link } from 'react-router-dom'

function Header(props) {
  return (
    <nav>
      <Link to='./home'><h1>Home</h1></Link>
      <Link to='./categories'><h2>Categories</h2></Link>
      <Link to='./home'><h3>My Library</h3></Link>
      <Link to='./home'><h3>Wishlist</h3></Link>
      <h1>Releases</h1>
      <Link to='./home'><h3>Last 30 Days</h3></Link>
      <Link to='./home'><h3>This Week</h3></Link>
      <Link to='./home'><h3>Next Week</h3></Link>
      <h1>Game Chart</h1>
      <Link to='./home'><h3>Best by year</h3></Link>
      <Link to='./home'><h3>Porpular in 2019</h3></Link>
      <Link to='./home'><h3>All time top 250</h3></Link>
  </nav>
)
}

export default Header