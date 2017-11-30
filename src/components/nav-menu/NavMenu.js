import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NavMenu.css';

class NavMenu extends Component {
  render() {
    return (
      <header className="navMenu">
        <nav>
            <ul>
                <li className="navMenu--item"><Link to='/layout/home'>Home</Link></li>
                <li className="navMenu--item"><Link to='/layout/calendar'>Calendario</Link></li>
                <li className="navMenu--item"><Link to='/layout/music'>Music</Link></li>
            </ul>
        </nav>
    </header>
    );
  }
}

export default NavMenu;
