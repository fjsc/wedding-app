import React, { Component } from 'react';
import './Init.css';
import logo from './logo.png';

class Init extends Component {
  render() {
    // https://www.freepik.com/free-vector/watercolor-seashore-with-starfish-and-seashell-background_888305.htm#term=sea star&page=1&position=3
    return (
      <main>
        <div className="Init-container">
            <div className="Init-logo-container">
                <img src={logo} className="Init-logo" alt="logo" />
            </div>
        </div>
      </main>
    );
  }
}

export default Init;
