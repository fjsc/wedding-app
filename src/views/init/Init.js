import React, { Component } from 'react';
import './Init.css';
import logo from './logo.png';
import load from './load.gif';

class Init extends Component {

  constructor(props) {
    super(props)
    props.history.push(`/layout/home`);
  }
  
  render() {
    // https://www.freepik.com/free-vector/watercolor-seashore-with-starfish-and-seashell-background_888305.htm#term=sea star&page=1&position=3
    return (
      <main>
        <div className="Init-container">
            <div className="Init-logo-container">
                <img src={logo} className="Init-logo" alt="logo" />
                <div className="Init-spinner-container">
                  <img src={load} className="Init-spinner" alt="loading"/>
                </div>
            </div>
        </div>
      </main>
    );
  }
}

export default Init;
