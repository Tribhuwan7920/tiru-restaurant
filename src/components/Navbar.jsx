import React, { Component } from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className='nav_main'>
        <div className="nav_logo">
          <h1>tiru restaurant</h1>
        </div>
        <div className="nav_link">
          <Link to="/" className='nav_ind_link'>home</Link>
          <Link to="/about" className='nav_ind_link'>about</Link>
          <Link to="/services" className='nav_ind_link'>services</Link>
          <Link to="/contact" className='nav_ind_link'>contact</Link>
        </div>
      </div>
    )
  }
}

