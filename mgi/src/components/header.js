import React from 'react'
import { Route, Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <button><Link to='./categories'>Categories</Link></button>
      <button><Link to='./home'>Home</Link></button>
  </nav>
)
}

export default Header