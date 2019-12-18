import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div>

      <nav>
        <Link to='./mainBody'><h1>Search</h1></Link>
        <Link to='./home'><h1>Home</h1></Link>
        <Link to='./categories'><h3>Categories</h3></Link>
        <Link to='./myLibrary'><h3>My Library</h3></Link>
        <Link to='./wishList'><h3>Wishlist</h3></Link>
        <h1>Releases</h1>
        <Link to='./last30Days'><h3>Last 30 Days</h3></Link>
        <Link to='./thisWeek'><h3>This Week</h3></Link>
        <Link to='./nextWeek'><h3>Next Week</h3></Link>
        <h1>Game Chart</h1>
        <Link to='./highestRating'><h3>Highest Ratings</h3></Link>
        <Link to='./popularIn2019'><h3>Porpular in 2019</h3></Link>
        <Link to='./allTimeGreats'><h3>All Time Greats</h3></Link>
        
      </nav>
    </div>
  )
}

export default Header