import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Amar</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
